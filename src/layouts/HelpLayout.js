import { Outlet } from "react-router-dom"
import {NavLink } from "react-router-dom"

function HelpLayout(){
    return <div className="help">
        <h1>Website Help</h1>
        <p>Our team has carefully curated a list of frequently asked questions based on user feedback and common inquiries. By visiting our FAQ section, you can access detailed explanations, step-by-step guides, and tips to troubleshoot any challenges you may encounter. We strive to make our FAQ section as comprehensive as possible, but if you don't find the answer you're looking for, don't worry! Our dedicated support team is ready to assist you further.</p>
        <p>If you have a specific question or need personalized assistance, we invite you to reach out to us using our Contact Form. We value your feedback and inquiries and are committed to providing timely and helpful responses. Our Contact Form is designed to gather essential information from you, ensuring that our support team can understand your query thoroughly and provide the most accurate assistance possible.</p>
        <nav>
            <NavLink to="faq">FAQ</NavLink>
            <NavLink to="contact">Contact Us</NavLink>
        </nav>
        <Outlet />
    </div>
}

export default HelpLayout