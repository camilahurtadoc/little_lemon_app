import HeroPic from "../../assets/images/restaurant/restauranfood_small.jpg"

const HeroSection = () => {
  return (
    <div>
      <h2>Little Lemon</h2>
      <h3>Chicago</h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur quis fugiat dolorem ex corrupti omnis a facilis modi sint? Minus non ex, officia suscipit ducimus odio sequi eaque. Ab, quos.</p>
      <button>Reserve a table</button>
      <img src={HeroPic} alt="food on plate"/>
    </div>
  )
}

export default HeroSection