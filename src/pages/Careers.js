import { Link, useLoaderData } from "react-router-dom"

function Careers(){
    const careers = useLoaderData()
    return <div className="career">
        {careers.map(
            (career)=>(
                <Link to="/" key={career.id}>
                    <p>{career.title}</p>
                    <p>Based on {career.location}</p>
                </Link>
            )
        )}
    </div>
}

export default Careers