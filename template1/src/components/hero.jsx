const Hero =()=>{
    return(
        <section className=" h-70 w-1/2 m-auto flex flex-col items-center justify-end gap-6">
            <h1 className=" text-5xl text-center  font-medium">Revolutionizing Business Operations with Intelligent AI Agents</h1>
            <p className=" text-xs">Smarter automation, 24/7 efficiency. Empower your enterprise with AI agents that think, learn, and act.</p>
            <div className="flex gap-2">
                <button className="flex justify-center items-center bg-teal-900 px-4 py-2 rounded-full text-teal-100 text-center cursor-pointer hover:bg-teal-950"><span className="text-xs">Get Started</span></button>
                <button className="flex justify-center items-center bg-white px-4 py-2 border border-black rounded-full font-medium text-teal-900 text-center cursor-pointer hover:bg-teal-100"><span className="text-xs">Try Demo</span></button>
                
            </div>
        </section>
    )
}

export default Hero