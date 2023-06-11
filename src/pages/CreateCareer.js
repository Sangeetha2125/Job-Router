import { useState } from "react"
import { useNavigate } from "react-router-dom"

function CreateCareer(){
    const [title,setTitle] = useState('')
    const [salary,setSalary] = useState(0)
    const [location,setLocation] = useState('')
    const [details,setDetails] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        const career = {title,salary,location,details}
        fetch('http://localhost:4000/careers',{
            method:'POST',
            headers:{"Content-type":"application/json"},
            body:JSON.stringify(career)
        }).then(()=>{
            navigate('/careers')
        })
    }

    return <div className="create-form">
        <h1>Create New Career</h1>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <div className="form-element">
                <label htmlFor="careerName">Career Title: </label>
                <input type="text" name="careerName" value={title} onChange={(e)=>setTitle(e.target.value)} autoComplete="off" required autoFocus/>
            </div>
            <div className="form-element">
                <label htmlFor="careerSalary">Career Salary: </label>
                <input type="number" name="careerSalary" onChange={(e)=>setSalary(e.target.value)}autoComplete="off" required/>
            </div>
            <div className="form-element">
                <label htmlFor="careerLocation">Career Location: </label>
                <input type="text" name="careerLocation" value={location} onChange={(e)=>setLocation(e.target.value)} autoComplete="off" required/>
            </div>
            <div className="form-element">
                <label htmlFor="details">Career Details: </label>
                <textarea name="details" cols="30" rows="8" value={details} onChange={(e)=>setDetails(e.target.value)} autoComplete="off" required></textarea>
            </div>
            <div className="form-element">
                <button type="submit">Add Career</button>
            </div>
        </form>
    </div>
}

export default CreateCareer