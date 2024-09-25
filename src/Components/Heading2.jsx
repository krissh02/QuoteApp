import TitleBox1 from "./TitleBox1"

const Heading2 = () => {
  return (
    <div className="h-screen w-full pt-2 px-24 space-y-10">
        <div className="space-y-1">
            <h2 className="text-4xl font-semibold">Heading</h2>
            <h3 className="text-2xl text-gray-500">Subheading</h3>
        </div>
        <div className="space-y-4">
            <TitleBox1 />
            <TitleBox1 />
            <TitleBox1 />
        </div>
    </div>
  )
}

export default Heading2