import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import Jumbotron from "../Jumbotron/Jumbotron"
import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./Testimonials.css"

const Testimonials = () => {
    return (
        <>
            <Navbar />
            <Jumbotron />
            <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={6100}
            >
                <div>
                    <img src="/images/shirley.png" alt="Roger"/>
                    <div className="myCarousel">
                        <h3>Carlos Pontos</h3>
                        <h4>Jiu Jitsu/Muay Thai</h4>
                        <p>
                            I joined Fightzone learning Jiu Jitsu from Theo and Magna which has been an amazing experience, now I do Muay Thai.
                        </p>
                    </div>
                </div>

                <div>
                    <img src="/images/daniel.png" alt="Josh"/>
                    <div className="myCarousel">
                        <h3>Kohl Vernon</h3>
                        <h4>Jiu Jitsu Gi and NoGi</h4>
                        <p>
                            Joining fightzone has been one of the best decisions I have made; learning Jiu Jitsu from Theo and Magna which has boosted my confidence.
                        </p>
                    </div>
                </div>

                <div>
                    <img src="/images/theo.png" alt="John"/>
                    <div className="myCarousel">
                        <h3>John Wick</h3>
                        <h4>Muay Thai</h4>
                        <p>
                            I joined Fight Zone for the Muay Thai, where I met the amazing coach Jose who helped me build my foundation. 
                        </p>
                    </div>
                </div>
            </Carousel>
            <Footer />
        </>
    )
}

export default Testimonials