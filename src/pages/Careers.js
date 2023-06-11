import { Link } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import person from '../images/person.png'

function Careers(){
    const {data : careers, isLoading, error} = useFetch('http://localhost:4000/careers')
    
    return <div className="career-layout">
        <div className="career-header">
            <h1>Careers</h1>
            <Link to="create" className="create-career">Add Career</Link>
        </div>
        <div className="career">
            {error && <div className="error">{error}</div>}
            {isLoading && <div className="loading">Loading...</div>}
            {careers && careers.map((career)=>{
                return <div className="career-wrap" key={career.id}>
                    <Link to={career.id.toString()} className="career-container">
                        <img src={person} alt="" />
                        <div>
                            <p>{career.title}</p>
                            <p>Based on {career.location}</p>
                        </div>
                    </Link>
                </div>
            })}
        </div>
    </div>
}

export default Careers