import { Outlet } from "react-router-dom"

function CareerLayout(){
    return <Outlet />
}

//Loader Function
export default CareerLayout

export const careersloader = async () => {
    const res=await fetch('http://localhost:4000/careers')
    return res.json()
}
