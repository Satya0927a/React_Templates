

const Navbar = ()=>{
    return(
        <nav className=" flex justify-between px-20 py-2 items-center">
            <div className="flex items-center gap-2">
                <img src="src\assets\logo.png" alt="" className="h-6 relative -bottom-px" />
                <h1 className="cursor-pointer">Prodman</h1>
            </div>
            <ul className="flex gap-8 text-xs">
                <li className="cursor-pointer font-medium hover:underline">Home</li>
                <li className="cursor-pointer hover:underline">About</li>
                <li className="cursor-pointer hover:underline">Services</li>
                <li className="cursor-pointer hover:underline">Contact</li>
            </ul>
            <button className="flex justify-center items-center bg-teal-900 px-4 py-2 rounded-full text-white text-center cursor-pointer hover:bg-teal-950"><span className="text-xs">Sign Up</span></button>
        </nav>
    )
}

export default Navbar