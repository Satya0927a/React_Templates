import Card from "./card"
import Card2 from "./card2"
import Card3 from "./card3"

const Feature = ()=>{
    return(
        <div className=" px-40 flex justify-center gap-6 items-end">
            <Card url={"./src/assets/victor-2PJMDIgK9EA-unsplash.jpg"}></Card>
            <Card2 bgcolor={"bg-teal-900"}>
                <h1 className="text-2xl text-white font-medium">300+</h1>
                <p className="text-green-100 text-xs w-20">Trusted Clients and Forward-Thinking Partners</p>
            </Card2>
            <Card3></Card3>
            <Card2 bgcolor={"bg-lime-100"}>
                <h1 className="text-2xl text-black font-medium">5+</h1>
                <p className="text-black text-xs w-20">Building Scalable and Reliable AI Agent Solutions</p>
            </Card2>
            <Card url={"./src/assets/martin-martz-npdGyujDvaU-unsplash.jpg"}>
                Achieve Optimal Efficieny and Boost Productivity
            </Card>
        </div>
    )
}

export default Feature