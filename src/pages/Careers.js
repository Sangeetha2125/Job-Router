import { useState } from "react"
import { Link, useLoaderData } from "react-router-dom"

function Careers(){
    const data = useLoaderData()
    const [careers,setCareers] = useState(data)

    const deleteCareer=(id)=>{
        const newCareers = careers.filter(
            (career) => (career.id!==id)
        )
        setCareers(newCareers)
    }

    return <div className="career-layout">
        <div className="career-header">
            <h1>Careers</h1>
            <Link to="create" className="create-career">Add Career</Link>
        </div>
        <div className="career">
            {careers && careers.map(
                (career)=>(
                    <div key={career.id}>
                        <Link to={career.id.toString()}>
                            <p>{career.title}</p>
                            <p>Based on {career.location}</p>
                        </Link>
                        <button className="delete-career" onClick={()=>deleteCareer(career.id)}>Delete</button>
                    </div>
                )
            )}
        </div>
    </div>
}

export default Careers