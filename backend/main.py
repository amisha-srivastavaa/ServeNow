from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
import sqlite3
import os
import json
import uuid
import re
from pathlib import Path

try:
    from google import genai
except ImportError:
    genai = None

app = FastAPI(title="ServeNow API")

# Enable CORS for the frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Database Setup (SQLite) ---
# Use absolute path relative to this script so it works from any cwd
DB_FILE = str(Path(__file__).parent / "servenow.db")


def get_db():
    """Get a database connection with Row factory enabled."""
    conn = sqlite3.connect(DB_FILE)
    conn.row_factory = sqlite3.Row
    return conn


def init_db():
    conn = get_db()
    c = conn.cursor()
    c.execute("""
        CREATE TABLE IF NOT EXISTS orders (
            id TEXT PRIMARY KEY,
            status TEXT,
            eta INTEGER,
            total REAL,
            items TEXT,
            provider_name TEXT
        )
    """)
    conn.commit()
    conn.close()


init_db()


# --- Models ---
class OrderItem(BaseModel):
    name: str
    emoji: str
    price: float
    qty: int


class OrderCreate(BaseModel):
    items: List[OrderItem]
    total: float
    slot: str
    address: str


class StyleQuizRequest(BaseModel):
    answers: List[int]


# --- Gemini Configuration ---
GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY", "")


def get_genai_client():
    """Lazy-create the Gemini client. Returns None if no API key is set."""
    if not GEMINI_API_KEY or genai is None:
        return None
    return genai.Client(api_key=GEMINI_API_KEY)


# --- Endpoints ---

@app.get("/")
def read_root():
    return {"message": "Welcome to the ServeNow API!"}


@app.post("/api/orders")
def create_order(order: OrderCreate):
    order_id = "ORD-" + uuid.uuid4().hex[:6].upper()

    conn = get_db()
    c = conn.cursor()
    items_json = json.dumps([item.model_dump() for item in order.items])

    c.execute(
        "INSERT INTO orders (id, status, eta, total, items, provider_name) VALUES (?, ?, ?, ?, ?, ?)",
        (order_id, "pending", 25, order.total, items_json, "Ramesh Tailors"),
    )
    conn.commit()
    conn.close()

    return {
        "id": order_id,
        "status": "pending",
        "eta": 25,
        "message": "Order created successfully",
    }


@app.get("/api/orders")
def get_orders():
    conn = get_db()
    c = conn.cursor()
    c.execute("SELECT * FROM orders")
    rows = c.fetchall()
    conn.close()

    return [
        {
            "id": row["id"],
            "status": row["status"],
            "eta": row["eta"],
            "total": row["total"],
            "items": json.loads(row["items"]),
            "provider_name": row["provider_name"],
        }
        for row in rows
    ]


# Style quiz question labels for building the Gemini prompt
QUIZ_LABELS = [
    ("Style vibe", ["Minimal & Clean", "Bold & Colourful", "Traditional & Ethnic", "Casual & Sporty"]),
    ("Occasions", ["Office / Work", "Casual Outings", "Weddings / Festivals", "Social Events"]),
    ("Fabrics", ["Cotton & Linen", "Silk & Georgette", "Denim & Canvas", "Wool & Knit"]),
    ("Colour palette", ["Neutrals & Earth", "Pastels & Soft", "Brights & Jewel", "Monochrome"]),
    ("Fit preference", ["Tailored / Fitted", "Relaxed / Loose", "Structured / Sharp", "Flowy / Draping"]),
]


def resolve_quiz_answers(answers: List[int]) -> str:
    """Convert answer indices to readable labels for the Gemini prompt."""
    parts = []
    for i, idx in enumerate(answers):
        if i < len(QUIZ_LABELS):
            label, options = QUIZ_LABELS[i]
            choice = options[idx] if 0 <= idx < len(options) else f"option {idx}"
            parts.append(f"{label}: {choice}")
    return "; ".join(parts)


@app.post("/api/ai/style")
def generate_style(request: StyleQuizRequest):
    client = get_genai_client()

    if client is None:
        # No API key or google-genai not installed — return mock
        return {
            "vibe": "Modern Minimalist",
            "recommendation": "Stick to neutral colors, well-fitted blazers, and clean lines. Perfect for casual office days!",
        }

    readable = resolve_quiz_answers(request.answers)

    try:
        response = client.models.generate_content(
            model="gemini-2.0-flash",
            contents=f"I am a user of a local styling and tailor app. My style preferences are: {readable}. "
                     f"Provide a short, fun, 2-sentence style recommendation and a creative title for my 'vibe'. "
                     f"Format the response as JSON with 'vibe' and 'recommendation' keys.",
        )
        text = response.text

        match = re.search(r"\{.*\}", text, re.DOTALL)
        if match:
            return json.loads(match.group(0))
        return {"vibe": "Trendsetter", "recommendation": text}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
