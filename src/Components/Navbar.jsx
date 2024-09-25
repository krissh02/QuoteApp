import Figma from "../assets/figma_logo.png"

const Navbar = () => {
  return (
    <div className="h-14 w-full flex items-center justify-between px-16 border-b-2">
        {/* logo */}
        <div className="">
            <img src={Figma} alt="figma_logo" width="23"/>
        </div>

        {/* Menu bar */}
        <div className="flex items-center space-x-12 ml-[33%]">
            <p>Products</p>
            <p>Solutions</p>
            <p>Community</p>
            <p>Resources</p>
            <p>Pricing</p>
            <p>Contact</p>
        </div>

        {/* Sign in and Register button */}
        <div className="flex space-x-8">
            {/* Sign in button */}
            <div className="border-1 bg-gray-300 rounded-lg">
                <button className="mx-4 my-[2px]">Sign in</button>
            </div>
            {/* Register button */}
            <div className="border-1 bg-black text-white rounded-lg">
                <button className="mx-4 my-[2px]">Register</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar