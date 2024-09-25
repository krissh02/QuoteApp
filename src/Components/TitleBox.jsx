import Person from "../assets/person_logo.png"

const TitleBox = () => {
  return (
    <div className="border-2 border-gray-400 rounded-lg space-y-1 p-3 w-[19%]">
        <img src={Person} alt="" width="150"/>
        <h2 className="text-xl font-semibold">Title</h2>
        <p className="text-base text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, inventore!</p>
    </div>
  )
}

export default TitleBox