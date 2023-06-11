import { Link } from "react-router-dom"
import person from '../images/person.png'

function Careerlist(props){
    const careers = props.careers
    return <div>
        {careers.map((career)=>(
            <div className="career-wrap" key={career.id}>
                <Link to={career.id.toString()} className="career-container">
                    <img src={person} alt="" />
                    <div>
                        <p>{career.title}</p>
                        <p>Based on {career.location}</p>
                    </div>
                </Link>
                <button className="delete-career">Delete</button>
            </div>
        )
    )}
    </div>
}

export default Careerlist