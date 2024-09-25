import TitleBox from "./TitleBox"


const Heading3 = () => {
  return (
    <div className="h-screen w-full px-24 space-y-10">
        <div className="space-y-1">
            <h2 className="text-4xl font-semibold">Heading</h2>
            <h3 className="text-2xl text-gray-500">Subheading</h3>
        </div>
        <div className="flex justify-between">
            <TitleBox />
            <TitleBox />
            <TitleBox />
            <TitleBox />
        </div>
        <div className="flex justify-between">
            <TitleBox />
            <TitleBox />
            <TitleBox />
            <TitleBox />
        </div>
    </div>
  )
}

export default Heading3