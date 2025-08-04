const Card2 = ({bgcolor,children})=>{
    return(
        <div className={`h-50 w-30 rounded-2xl flex flex-col justify-center items-center gap-1 text-center shadow-[0_35px_35px_rgba(0,0,0,0.25)] ${bgcolor}`}>
            {children}
        </div>
    )
}

export default Card2