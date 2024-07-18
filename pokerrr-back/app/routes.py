from flask import current_app as app, jsonify, request
import random

# Define the suits and ranks
suits = ["spade", "heart", "diamond", "club"]
ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]


# Create the deck of cards
def create_deck():
    return [{"suit": suit, "rank": rank} for suit in suits for rank in ranks]


# RNG function to get a random card considering unavailable cards
def get_random_card(unavailable_cards):
    deck = create_deck()
    available_deck = [card for card in deck if card not in unavailable_cards]

    if not available_deck:
        raise ValueError("No available cards left in the deck")

    return random.choice(available_deck)


@app.route("/random-card", methods=["POST"])
def random_card():
    try:
        unavailable_cards = request.json.get("unavailableCards", [])
        card = get_random_card(unavailable_cards)
        return jsonify(card)
    except ValueError as e:
        return jsonify({"error": str(e)}), 400


@app.route("/")
def index():
    return "Welcome to the Card RNG API"
