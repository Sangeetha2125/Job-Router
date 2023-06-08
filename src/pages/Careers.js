import { Link, useLoaderData } from "react-router-dom"

function Careers(){
    const careers = useLoaderData()
    return <div className="career-layout">
        <h1>Careers</h1>
        <div className="career">
            {careers.map(
                (career)=>(
                    <Link to={career.id.toString()} key={career.id}>
                        <p>{career.title}</p>
                        <p>Based on {career.location}</p>
                    </Link>
                )
            )}
        </div>
    </div>
}

export default Careers