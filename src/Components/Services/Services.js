import React from "react"
import Navbar from "../Navbar/Navbar"
import Grid from "@mui/material/Grid";
import "./Services.css"
import gi from "../../Assets/gi.jpg"
import nogi from "../../Assets/nogi.jpg"
import muaythai from "../../Assets/muaythai1.jpg"
import StickyFooter from "../Footer/Footer";
import { Link } from "react-router-dom";




const Services = () => {
    return (
        <>
            <Navbar />
            <Grid container spacing={2}>
                <Grid item xs={12} md={4} lg={4}>
                        <img src={gi} alt="Jiu Jitsu Gi" className="BJJ-Gi"/>
                        <h4 className="service-title">Jiu Jitsu</h4>
                        <p>Jujutsu, also known as jiu-jitsu and ju-jitsu, is a family of Japanese martial arts and a system of close combat that can be used in a defensive or offensive manner to kill or subdue one or more weaponless or armed and armored opponents</p>
                        <h6 className="pricing">1 Hour £25 | 2 Hour £45</h6>
                        <div className="anchor-wrapper">
                        <Link to='/contact' className="enquiries">Find out more</Link>
                        </div>
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                        <img src={nogi} alt="Jiu Jitsu No Gi" className="BJJ-Nogi"/>
                        <h4 className="service-title">No Gi Jiu Jitsu</h4>
                        <p>No-Gi is the act of fighting without the kimono, and grappling usually in just a rash guard, shorts, and finger wraps.</p>
                        <p>It is becoming the fastest growing form of grappling, as you do not need a GI to participate.</p>
                        <h6 className="pricing">1 Hour £25 | 2 Hour £45</h6>
                        <div className="anchor-wrapper">
                        <Link to='/contact' className="enquiries">Find out more</Link>
                        </div>
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                        <img src={muaythai} alt="Muay Thai" className="Muay-Thai"/>
                        <h4 className="service-title">Muay Thai</h4>
                        <p>Muay Thai, sometimes referred to as Thai boxing, is a combat sport that uses stand-up striking along with various clinching techniques.</p> 
                        <p>This discipline is known as the "Art of eight limbs", as it is characterised by the combined use of fists, elbows, knees and shins.</p>
                        <h6 className="pricing">1 Hour £25 | 2 Hour £45</h6>
                        <div className="anchor-wrapper">
                        <Link to='/contact' className="enquiries">Find out more</Link>
                        </div>
                </Grid>
            </Grid>
            <StickyFooter />
        </>
    )
}

export default Services