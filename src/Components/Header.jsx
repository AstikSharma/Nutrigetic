import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import './style.css';
import { useNavigate, useLocation } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location
  const navigateToFooter = () => {
    const footerElement = document.getElementById('footer');
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function toggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
    document.body.classList.toggle("no-scroll"); // Optional: prevent scrolling when sidebar is open
  }
  const isScreenSmaller = useMediaQuery({
    query: '(min-width:800px)'
  });

  return (
    <div className="container" id="header">
      <div className="NavBar">
        <div className="logo">
          <p className="Name" style={!isScreenSmaller ? { paddingTop: "20%", paddingBottom: "20%", fontWeight: "600", fontSize: "2rem" } : { fontWeight: "600", fontSize: "2rem" }}>Aradhana Sharma</p>
        </div>
        <div className="NavItems" style={isScreenSmaller ? {} : { display: "none" }}>
          <button className={`Navigator ${location.pathname === "/" ? "active" : ""}`} onClick={() => navigate("/")}>Home</button>
          <button className={`Navigator ${location.pathname === "/about" ? "active" : ""}`} onClick={() => navigate("/about")}>About</button>
          <button className={`Navigator ${location.pathname === "/Testimonials" ? "active" : ""}`} onClick={() => navigate("/Testimonials")}>Testimonials</button>
          <button className={`Navigator ${location.pathname === "/blogs" ? "active" : ""}`} onClick={() => navigate("/blogs")}>Blogs</button>
          <button className={`Navigator ${location.pathname === "/contact" ? "active" : ""}`} onClick={navigateToFooter} >Contact Us</button>
          <a id="instagram" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram" ></i>
          </a>
          <a id="linkedin" href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin" ></i>
          </a>
        </div>

        {!isScreenSmaller ? (
          <div className="sidebar-button" style={isSidebarOpen ? { zIndex: "3" } : {}}>
            <button onClick={toggleSidebar} >
              <div>
                <div className={isSidebarOpen ? "menufirstline" : "menunotdropped1"}><hr /></div>
                <div className={isSidebarOpen ? "menusecondline" : "menunotdropped2"}><hr /></div>
                <div className={isSidebarOpen ? "menuthirdline" : "menunotdropped3"}><hr /></div>
              </div>
            </button>
          </div>
        ) : ""}
      </div>
      {!isScreenSmaller ? (
        <div className={isSidebarOpen ? "sidebar" : "hide"}>
          <button onClick={() => navigate("/")} style={{fontWeight:"500", fontSize:"150%"}}>Home</button>
          <button onClick={() => navigate("/about")} style={{fontWeight:"500", fontSize:"150%"}}>About</button>
          <button onClick={() => navigate("/Testimonials")} style={{fontWeight:"500", fontSize:"150%"}}>Testimonials</button>
          <button onClick={() => navigate("/blogs")} style={{fontWeight:"500", fontSize:"150%"}}>Blogs</button>
          <button onClick={navigateToFooter} style={{fontWeight:"500", fontSize:"150%"}}>Contact Us</button>
        </div>) : ""
      }


    </div>
  );
}

export default Header;
