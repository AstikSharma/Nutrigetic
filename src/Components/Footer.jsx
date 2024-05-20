// Client-side code (Footer.js)
import axios from "axios";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from 'react-router-dom';
function Footer() {
  const navigate = useNavigate();
  const navigateToFooter = () => {
   const footerElement = document.getElementById('footer');
   if (footerElement) {
     footerElement.scrollIntoView({ behavior: 'smooth' });
   }
 };
  const isScreenSmaller = useMediaQuery({
    query: "(max-width: 1000px)",
  });
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      await axios.post("https://nutrigetic-1.onrender.com/", {
        name,
        mail,
      });
      
      setName("");
      setMail("");

      // Send request to send-email route after saving data
      await axios.post("https://nutrigetic-1.onrender.com//send-email");
      alert("Emails sent successfully!");
    } catch (error) {
      console.log(error);
      alert("Error occurred. Please try again.");
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
const navigateToBlogs = () => {
  navigate("/blogs");
  setTimeout(() => {
   const BlogsSection = document.getElementById("Blog");
   if (BlogsSection) {
     BlogsSection.scrollIntoView({ behavior: "smooth" });
   }
 }, 100);
};
  return (
    <div className="footer-container" id="footer">
      <div className="Getonlist" style={isScreenSmaller ? { paddingBottom: "18%" } : { paddingTop: "7.5%" }}>
        <h1>Let us Contact You</h1>
        <p style={{ textAlign: "center", maxWidth: "80%" }}>
          Freebies and Tips + Tools sent straight to your inbox! I promise not to spam.
        </p>
        <form onSubmit={handleSubmit} method="POST">
          <div className="form-container">
            <div className="listinputs" style={isScreenSmaller ? { display: "flex", flexDirection: "column" } : {}}>
              <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} placeholder="First Name" className="ip" />
              <input type="text" value={mail} onChange={(e) => { setMail(e.target.value) }} placeholder="Email Address" className="ip" />
              <input type="submit" value="Submit" className="Services-button" id="Subscribe" />
            </div>
          </div>
        </form>
      </div>
      <div className="footer">
        <div className="footer-top">
          <div className="social-icons">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram icons"></i>
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin icons"></i>
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook icons"></i>
            </a>
            <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter icons"></i>
            </a>
          </div>
        </div>
        <div className="footer-links" style={isScreenSmaller ? { display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" } : {}}>
          <button className="footer-buttons" onClick={navigateToAbout}>About</button>
          <button className="footer-buttons" onClick={navigateToFooter} >Contact</button>
          <button className="footer-buttons" onClick={navigateToBlogs}>Blogs</button>
          <button className="footer-buttons">Privacy Policy</button>
        </div>
      </div>
      <p style={{ textAlign: "center", color: "#66412b", backgroundColor: "#fff7ef", height: "100%", margin: "0%", padding: "1.5% 0% 1.5% 0%", borderTop: "2px solid #14aecf" }}>© 2024 Your Website. All rights reserved.</p>
    </div>
  );
}

export default Footer;
