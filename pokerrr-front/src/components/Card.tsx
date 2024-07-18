interface CardProps {
  suit: "spade" | "heart" | "diamond" | "club"
  rank: "Ace" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "Jack" | "Queen" | "King"
  width?: number
  height?: number
}

export default function Card({ suit, rank, width, height }) {
  const image_fp = `/cards/svgs/${suit}${rank}.svg`
  return (
    <img
      src={image_fp}
      alt={`Card ${suit}${rank}`}
      width={width}
      height={height}
      style={{ width: width ? `${width}px` : "auto", height: height ? `${height}px` : "auto" }}
    />
  )
}
