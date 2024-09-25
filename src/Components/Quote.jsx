import Person from "../assets/person_logo.png"

const Quote = () => {
  return (
    <div className="border-2 border-gray-300 rounded-lg w-[30%] p-4">
        <h3 className="text-3xl font-semibold ml-3 mb-4">Quote</h3>
        <div className="flex items-center space-x-1">
            <img src={Person} alt="" width="60"/>
            <div className="">
                <p className="text-gray-600 font-semibold text-xl">Title</p>
                <p className="text-gray-400 text-lg">Description</p>
            </div>
        </div>
    </div>
  )
}

export default Quote