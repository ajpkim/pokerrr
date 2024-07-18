"use client"

import React, { useState } from "react"

const Random = () => {
  const [card, setCard] = useState(null)
  const [error, setError] = useState(null)

  const fetchRandomCard = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/random-card`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ unavailableCards: [] }), // Example with no unavailable cards
      })

      if (!response.ok) {
        throw new Error("Network response was not ok")
      }

      const data = await response.json()
      setCard(data)
      setError(null)
    } catch (error) {
      setError(error.message)
      setCard(null)
    }
  }

  return (
    <div>
      <h1>Random Card Generator</h1>
      <button onClick={fetchRandomCard}>Get Random Card</button>
      {card && (
        <div>
          <h2>Random Card:</h2>
          <p>
            {card.rank} of {card.suit}
          </p>
          <img src={`/cards/svgs/${card.suit}${card.rank}.svg`} alt={`Card ${card.suit}${card.rank}`} />
        </div>
      )}
      {error && (
        <div>
          <h2>Error:</h2>
          <p>{error}</p>
        </div>
      )}
    </div>
  )
}

export default Random
