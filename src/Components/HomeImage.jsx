import Scenary1 from "../assets/scenary1.jpg"
import Scenary2 from "../assets/scenary2.jpg"

const HomeImage = () => {
  return (
    <div className="h-[40%] w-full flex justify-evenly">
        <img src={Scenary1} alt="" className="border-2 object-contain w-[42%]"/>
        <img src={Scenary2} alt="" className="border-2"/>
    </div>
  )
}

export default HomeImage