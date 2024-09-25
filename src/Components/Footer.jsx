import Figma from "../assets/figma_logo.png"

const Footer = () => {
  return (
    <div className="p-3 flex justify-between space-x-2 px-32 h-[60%] mt-20 border pt-10 pb-16">
        <div className="space-y-2">
            <img src={Figma} alt="" width="25"/>
            <div className="flex space-x-1">
                <img src={Figma} alt="" width="25"/>
                <img src={Figma} alt="" width="25"/>
                <img src={Figma} alt="" width="25"/>
                <img src={Figma} alt="" width="25"/>
            </div>
        </div>
        <div>
            <h3 className="font-semibold mb-10">Use cases</h3>
            <p>UI Design</p>
            <p>UX Design</p>
            <p>Wireframing</p>
            <p>Diagramming</p>
            <p>Brainstorming</p>
            <p>Online whiteboard</p>
            <p>Team collaboration</p>
        </div>
        <div>
        <h3 className="font-semibold mb-10">Explore</h3>
            <p>Design</p>
            <p>Prototyping</p>
            <p>Development features</p>
            <p>Design systems</p>
            <p>Collaboration features</p>
            <p>Design process</p>
            <p>FigJam</p>
        </div>
        <div>
        <h3 className="font-semibold mb-10">Resources</h3>
            <p>Blog</p>
            <p>Best practices</p>
            <p>Colors</p>
            <p>Color wheel</p>
            <p>Support</p>
            <p>Developers</p>
            <p>Resource library</p>
        </div>

    </div>
  )
}

export default Footer