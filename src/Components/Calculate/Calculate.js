import React, { useState } from "react";
import axios from "axios";
import "./Calculate.css"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

// Add MMA API

const Calculate = () => {

    const [year, setYear] = useState('')
    const [event, setEvent] = useState('')
    const [fighter, setFighter] = useState('')
    
    const options = {
        method: 'GET',
        url: `https://fightingtomatoes.com/API/627eb84ecbcbf67c8c4cf22249f032a6d60a59fb/${year}/${event}/${fighter}`,
    }
    axios.request(options).then(function (response) {
        console.log(response.data)
    }).catch((function (error) {
        console.error(error)
    }))


    return (
        <>
            <Navbar />
            <h1 className="text-center" style={{ marginTop: '15px' }}>Search for fight news</h1>
            <div className="calculator-wrapper" />
            <div className="form-group col-md-6 col-sm-12">
                <label htmlFor="Year">Enter year: </label>
                <input type="text" className="form-control" placeholder="2022" name="year" value={year} required onChange={(e) => setYear(e.target.value)} />
            </div>
            <div className="form-group col-md-6  col-sm-12">
                <label htmlFor="Last Name">Enter event: </label>
                <input type="text" placeholder="UFC 287" className="form-control" name="event" value={event} required onChange={(e) => setEvent(e.target.value)} />
            </div>
            <div className="form-group col-md-6  col-sm-12">
                <label htmlFor="Fighter">Enter fighter:  </label>
                <input type="text" placeholder="UFC 287" className="form-control" name="fighter" value={fighter} required onChange={(e) => setFighter(e.target.value)} />
            </div>
            <div className="button-container">
                <button type="submit" onSubmit={options}>Click</button>
            </div>
            <Footer />
        </>
    )
}

export default Calculate