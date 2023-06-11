import useFetch from "../hooks/useFetch"
import { useParams } from "react-router-dom"

function CareerDetails(){
    const {id} = useParams()
    const {data:career,isLoading,error} = useFetch('http://localhost:4000/careers/' + id)

    return <div className="career-details">
        {error && <div className="error">{error}</div>}
        {isLoading && <div className="loading">Loading...</div>}
        {career && <h1>Career Details for <span>{career.title}</span></h1>}
        {career && <div className="career-info">
            <p className="location"><strong>Location :</strong> {career.location}</p>
            <p className="salary"><strong>Salary :</strong> ${career.salary}</p>
            <p className="details">{career.details}</p>
        </div>}
    </div>
}

export default CareerDetails

// Using Loader
// export const careerdetailsloader = async ({params}) =>{
//     const { id } = params
//     const res = await fetch('http://localhost:4000/careers/' + id)
//     return res.json()
// }