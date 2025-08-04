const Card = ({children,url })=>{
    return(
        <div className=" bg-cover h-65 w-48 rounded-2xl p-4 flex  items-end text-white shadow-[0_35px_35px_rgba(0,0,0,0.25)]" style={{ backgroundImage: `url(${url})` }}>
            <p>
                {children}
            </p>
        </div>
    )
}

export default Card