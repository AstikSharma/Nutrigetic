import React from "react";
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from "react-responsive";

function Contact(){
    const navigate = useNavigate();
    const navigateToservices = () => {
    const servicesElement = document.getElementById('services');
    if (servicesElement) {
      servicesElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const navigateToFooter = () => {
    const footerElement = document.getElementById('footer');
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const navigateToAbout = () => {
    navigate("/about");
    setTimeout(() => {
     const AboutSection = document.getElementById("about");
     if (AboutSection) {
       AboutSection.scrollIntoView({ behavior: "smooth" });
     }
   }, 100); 
};
    const isScreenSmaller = useMediaQuery({
        query: '(min-width:800px)'
      });
    return(
        <div className="Contact">
            <div className="Contact-container" style={!isScreenSmaller?{display:"flex",flexDirection:"column",gap:"100px"}:{}}>
                <div className="Contactimg" style={!isScreenSmaller?{width:"80%"}:{}}>
                    <img src="https://paultan.org/image/2019/03/Lamborghini-Aventador-SVJ-Roadster-5.jpg" style={{objectFit:"cover"}}/>
                </div>
                <div className="Contactcontent" style={!isScreenSmaller?{width:"fit-content"}:{}}>
                    <p style={{fontSize:"2.5rem",lineHeight:"120%"}}>Hey, nice to meet you, I'm SIGMA</p>
                    <p>I’m so happy you’re here!</p>
                    <p>I truly feel privileged and honored to have been able to support individuals on their transformative journey throughout this last decade. Being a source of support as I guide clients along their journeys is truly fulfilling as I witness people create the happy, fulfilling, and thriving life they’ve always wanted.</p>
                    <p>I’m looking forward to getting to know you and exploring how I can help!</p>
                    <button className="Contacttxt" onClick={navigateToAbout}><p >Get To Know Me</p></button>
                    <button className="Contacttxt" onClick={navigateToservices}><p >Let's Work Together</p></button>
                    <button className="Contacttxt" onClick={navigateToFooter}><p >Send Me A Message</p></button>
                </div>
            </div>
        </div>
    )
}

export default Contact;