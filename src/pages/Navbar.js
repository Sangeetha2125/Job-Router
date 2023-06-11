import {NavLink } from "react-router-dom"
import logo from '../images/logo.png'

function Navbar(){
    return <nav>
        <img src={logo} alt="" width="100px" />
        <h1>Job Router</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="careers">Careers</NavLink>
        <NavLink to="help">Help</NavLink>
    </nav>
}

export default Navbar