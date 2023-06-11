import { Link } from "react-router-dom"

function Careerlist(props){
    const careers = props.careers
    return <div>
        {careers.map((career)=>(
            <div key={career.id}>
                <Link to={career.id.toString()}>
                    <p>{career.title}</p>
                    <p>Based on {career.location}</p>
                </Link>
                <button className="delete-career">Delete</button>
            </div>
        )
    )}
    </div>
}

export default Careerlist