import { useLoaderData } from "react-router-dom"

function CareerDetails(){
    // const {id} = useParams()
    const career = useLoaderData()
    return <div className="career-details">
        <h1>Career Details for <span>{career.title}</span></h1>
        <div className="career-info">
            <p className="location"><strong>Location :</strong> {career.location}</p>
            <p className="salary"><strong>Salary :</strong> ${career.salary}</p>
            <p className="details">{career.details}</p>
        </div>
    </div>
}

export default CareerDetails

export const careerdetailsloader = async ({params}) =>{
    const { id } = params
    const res = await fetch('http://localhost:4000/careers/' + id)
    return res.json()
}