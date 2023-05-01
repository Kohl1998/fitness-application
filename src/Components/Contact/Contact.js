import React, { useState } from "react";
import "./Contact.css"
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer"


// Add validation to check for user input 
// Use Email Js to send emails without backend

const Contact = () => {
    const [name, updateName] = useState('')
    const [email, updateEmail] = useState('')
    const [message, updateMessage] = useState('')
    const [error, updateError] = useState('')
    
    console.log(name, email, message)

    return (
        <>
            <Navbar />
            <form className="form-wrapper">
            <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" onChange={(e) => updateName(e.target.value)}/>
            </div>
            <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control"  onChange={(e) => updateEmail(e.target.value)}/>
            </div>
            <div className="form-group">
            <label htmlFor="message">message</label>
            <input type="text" className="form-control" style={{height: "200px"}}  onChange={(e) => updateMessage(e.target.value)}/>
            </div>
            <div className="form-button">
            <button type="submit" onClick={(e) => e.preventDefault()}>Submit</button>
            </div>
            </form>
            <Footer />
        </>
    )


}


export default Contact