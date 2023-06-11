import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Careerlist from "./Careerlist"
import useFetch from "../hooks/useFetch"

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
            {careers && <Careerlist careers={careers}/>}
        </div>
    </div>
}

export default Careers