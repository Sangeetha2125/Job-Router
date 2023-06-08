function Contact(){
    return <div className="contact">
        <form>
            <div className="form-container">
                <label htmlFor="userName">Enter your Name: </label>
                <input type="text" id="userName" />
            </div>
            <div className="form-container">
                <label htmlFor="userMail">Enter your Email: </label>
                <input type="email" id="userMail" />
            </div>
            <div className="form-container">
                <label htmlFor="mobile">Enter your Number: </label>
                <input type="number" id="mobile" />
            </div>
            <div className="form-container">
                <label htmlFor="comments">Enter your Comments: </label>
                <input type="text" id="comments" />
            </div>
            <div className="form-container">
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>
}

export default Contact