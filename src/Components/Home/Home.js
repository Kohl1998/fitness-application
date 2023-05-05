import React from "react";
import Navbar from "../Navbar/Navbar";
import Jumbotron from "../Jumbotron/Jumbotron";
import About from "../About/About"
import StickyFooter from "../Footer/Footer";


const Home = () => {
    return (
        <>
        <Navbar/>
        <Jumbotron/>
        <About/>
        <StickyFooter/>
        </>
    )
}

export default Home