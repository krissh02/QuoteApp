import Person from "../assets/person_logo.png"

const TitleBox1 = () => {
  return (
    <div className="p-3 w-full border-2 rounded-lg border-gray-300 flex space-x-4">
        <div className="w-36">
            <img src={Person} alt=""/>
        </div>
        <div className="w-full space-y-2">
            <h1 className="text-xl font-semibold">Title</h1>
            <p className="text-base text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, laboriosam?</p>
            <button className="rounded-lg px-2 bg-gray-300 border-2 border-gray-400">Button</button>
        </div>
    </div>
  )
}

export default TitleBox1