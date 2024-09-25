import Quote from "./Quote"


const Heading1 = () => {
  return (
    <div className="h-screen w-full pt-10 px-24 space-y-16 mt-10">
        <div className="space-y-1">
            <h2 className="text-4xl font-semibold">Famous Quotes</h2>
            <h3 className="text-2xl text-gray-500">Subheading</h3>
        </div>
        <div className="flex justify-between">
            <Quote />
            <Quote />
            <Quote />
        </div>
        <div className="flex justify-between">
            <Quote />
            <Quote />
            <Quote />
        </div>
    </div>
  )
}

export default Heading1