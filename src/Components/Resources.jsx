import React from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from 'react-router-dom';

function Resources() {
    const navigate = useNavigate();

    const navigateToFooter = () => {
        const footerElement = document.getElementById('footer');
        if (footerElement) {
            footerElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navigateToService = () => {
        navigate("/");
        setTimeout(() => {
         const ServiceSection = document.getElementById("services");
         if (ServiceSection) {
           ServiceSection.scrollIntoView({ behavior: "smooth" });
         }
       }, 100); 
    };
    const navigateToBlog = () => {
        navigate("/");
        setTimeout(() => {
         const BlogSection = document.getElementById("blogs");
         if (BlogSection) {
           BlogSection.scrollIntoView({ behavior: "smooth" });
         }
       }, 100); 
    };

    const isScreenSmaller = useMediaQuery({
        query: '(min-width:900px)'
    });

    return (
        <div className="Resource">
            <h1 className="heading" id="rsrchding">Find More Resources</h1>
            <div className="Resource-container" style={!isScreenSmaller ? { display: "flex", flexDirection: "column", gap: "80px", width: "60%" } : {}}>
                <div className="rsrc" style={!isScreenSmaller ? { width: "100%", height: "500px" } : {}}>
                    <img src="https://wallpapercave.com/wp/wp6380550.jpg" style={{ objectFit: "cover" }} />
                    <p onClick={navigateToFooter}>Get in touch</p>
                </div>
                <div style={{ border: "#14aecf 1px solid ", marginTop: "-5%", marginBottom: "-4%" }}></div>
                <div className="rsrc" style={!isScreenSmaller ? { width: "100%", height: "500px" } : {}}>
                    <img src="https://wallpapercave.com/wp/wp6380550.jpg" style={{ objectFit: "cover" }} />
                    <p onClick={navigateToService}>Let's work together</p>
                </div>
                <div style={{ border: "#14aecf 1px solid ", marginTop: "-5%", marginBottom: "-4%" }}></div>
                <div className="rsrc" style={!isScreenSmaller ? { width: "100%", height: "500px" } : {}}>
                    <img src="https://wallpapercave.com/wp/wp6380550.jpg" style={{ objectFit: "cover" }} />
                    <p onClick={navigateToBlog}>The blog</p>
                </div>
            </div>
        </div>
    )
}

export default Resources;
