import './style.css';
import React from "react";
import Header from "./Header.jsx";
import Introduction from "./Introduction.jsx";
import About from "./About.jsx";
import Testimonials from "./Testimonials.jsx";
import Services from './Services.jsx';
import Footer from './Footer.jsx';
import Blogsection from './Blogs.jsx';
import Contact from './Contact.jsx';
function Home(){
    return (
    <div>
        <Header />
        <div style={{height:"100vh"}}> 
        <Introduction/>
        </div>
        <About />
        <Services />
        <Testimonials/>
        <Contact />
        <Blogsection />
        <Footer id="footer" />
    </div>
    )
}

export default Home;