import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import { useMediaQuery } from "react-responsive"
import TestimonialSection from "./Testimonialsection"
import Expectations from "./Expectations"
function Test() {
    const isScreenSmaller = useMediaQuery({
        query: '(min-width:900px)'
    });
    return (
        <div>
            <Header />
            <div className="Testimonialpage">
                <div className="Testimonialsectiontop" style={!isScreenSmaller?{display:"flex",flexDirection:"column-reverse"}:{}}>
                    <div className="testopcontent" style={!isScreenSmaller?{width:"100%"}:{}}>
                        <h1 style={!isScreenSmaller?{width:"80%",marginRight:"15%"}:{}}>Helping clients <span style={{fontStyle:"normal"}}>GROW</span> and <span style={{fontStyle:"normal"}}>TRANSFORM</span> their <span style={{fontStyle:"normal"}}>LIVES</span> is my passion.</h1>
                        <p style={!isScreenSmaller?{width:"60%",marginRight:"15%"}:{}}>Kind words from some of the clients I have helped!</p>
                    </div>
                    <div className="testopimg" style={!isScreenSmaller?{width:"100%",height:"100%",marginBottom:"-1%"}:{}}><img src="https://supersportiva.com/wp-content/uploads/2023/03/lamborghini-revuelto-feature-image-lambo-media-center.jpg" style={{objectFit:"cover"}}/></div>
                </div>
            </div>
            <TestimonialSection />
            <TestimonialSection />
            <TestimonialSection /> 
            <Expectations />
            <Footer id="footer" />
        </div>
    )
}
export default Test;