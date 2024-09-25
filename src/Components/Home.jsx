

const Home = () => {
  return (
    <div className="h-screen flex justify-center items-center w-full">
        <div className="flex flex-col items-center space-y-4">
            <h1 className="text-8xl text-black font-semibold">Title</h1>
            <h3 className="text-4xl text-gray-400">Subtitle</h3>
            <div className="flex justify-between items-center space-x-2 pt-4">
                <button className="border border-black px-8 bg-gray-300 rounded-lg py-1">Button</button>
                <button className="px-8 bg-black text-white rounded-lg py-1">Button</button>
            </div>
        </div>
    </div>
  )
}

export default Home