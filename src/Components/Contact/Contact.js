import React, { useRef } from "react";
import emailjs, { init } from "@emailjs/browser";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer"
import "./Contact.css"


// Add validation to check for user input 
// Use Email Js to send emails without backend


function Contact() {
    init("6GM97vw1k7n549Fc5")
    {/* accesses all data fields on form */}
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            "service_60jd348",
            "template_nv9zpj7",
            e.target,
            "6GM97vw1k7n549Fc5"
        )
            .then(
                (result) => {
                    alert("Message Sent Successfully");
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <>
            <Navbar />
            <div className="container">
                <form onSubmit={handleSubmit} ref={form}>
                    <h1 className="text-center">Registration Form</h1>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="First Name">First Name</label>
                            <input type="text" className="form-control" placeholder="John"  name="firstname" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="Last Name">Last Name</label>
                            <input type="text" placeholder="Smith"  className="form-control" name="lastname" />
                        </div>
                        <div className="form-group col-12">
                            <label htmlFor="inputAddress">Address</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputAddress"
                                placeholder="1234 Main St"
                                name="user_address"
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="message">message</label>
                            <textarea
                                type="text"
                                className="form-control"
                                id="inputmessage4"
                                name="user_message"
                            />
                        </div>
                    </div>
                    <div className="button-wrapper">
                    <button type="submit" className="btn btn-dark">
                        Submit
                    </button>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    );
}


export default Contact