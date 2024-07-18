import Card from "@/components/Card"

const Home = () => (
  <div>
    <h1>Welcome to Pokerrr</h1>
    <div className="flex">
      <Card suit="spade" rank="Ace" width={100} height={150} />
      <Card suit="spade" rank="King" width={100} height={150} />
      <Card suit="spade" rank="Queen" width={100} height={150} />
      <Card suit="spade" rank="Jack" width={100} height={150} />
      <Card suit="spade" rank="10" width={100} height={150} />
    </div>
  </div>
)

export default Home
