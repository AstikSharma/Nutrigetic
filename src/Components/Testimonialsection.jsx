import React from "react";
import { useMediaQuery } from "react-responsive";

function TestimonialSection() {
    const isScreenSmaller = useMediaQuery({
        query: '(min-width:900px)'
    });

    return (
        <div className="Testimonialsection">
            <div className="About-container" style={!isScreenSmaller ? { flexDirection: "column", display: "flex", justifyContent: "center", alignItems: "center", gap: "4rem" } : {}}>
                <div className="Aboutimg" id="testimg" style={!isScreenSmaller ? { height: "50vh", marginRight: "25%", marginTop: "15%", marginBottom: "-10%", width: "90%" } : {}}>
                    <img src="https://th.bing.com/th/id/OIP.u3dPwza1Ec3lKd9PwSZmkAHaE8?rs=1&pid=ImgDetMain" style={{ width: "100%", height: "95%", objectFit: "cover" }} />
                </div>
                <div className="Description" id="testdesc" style={!isScreenSmaller ? { width: "70%", marginLeft: "18%", marginRight: "12%",marginTop:"4%" } : { marginLeft: "2%" }}>
                    <h1>"What Do We Do??"</h1>
                    <p style={!isScreenSmaller ? { width: "100%", margin: "0%", padding: "0%" } : {}}>Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins. Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                </div>
            </div>
            <hr style={{ marginTop: "8%", width: "95%", marginBottom: "5%" }} />
            <div className="About-container" style={!isScreenSmaller ? { flexDirection: "column-reverse", display: "flex", justifyContent: "center", alignItems: "center" } : {}}>
                <div className="Description2" id="testdesc2" style={!isScreenSmaller ? { width: "70%", marginLeft: "15%", marginRight: "15%" } : {}}>
                    <h1>"What Do We Do??"</h1>
                    <p style={!isScreenSmaller ? { width: "100%", margin: "0%", padding: "0%" } : {}}>Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins. Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                </div>
                <div className="testimg2" style={!isScreenSmaller ? { height: "50vh", marginLeft: "20%", marginTop: "7%", width: "90%" } : {}}>
                    <img src="https://th.bing.com/th/id/OIP.u3dPwza1Ec3lKd9PwSZmkAHaE8?rs=1&pid=ImgDetMain" style={{ width: "100%", height: "80%", objectFit: "cover" }} />
                </div>
            </div>
            <hr style={{ marginTop: "5%", width: "95%" }} />
        </div>
    )
}

export default TestimonialSection;
