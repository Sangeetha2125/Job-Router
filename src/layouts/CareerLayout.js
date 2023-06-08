import { Outlet } from "react-router-dom"

function CareerLayout(){
    return <div className="career-layout">
        <h1>Careers</h1>
        <Outlet />
    </div>
}

//Loader Function
export default CareerLayout

export const careersloader = async () => {
    const res=await fetch('http://localhost:4000/careers')
    return res.json()
}
