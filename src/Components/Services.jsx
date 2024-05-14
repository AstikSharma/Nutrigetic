import React from "react";
import Cards from "./Cards";
import { useMediaQuery } from "react-responsive";

function Services() {
    const isScreenSmaller = useMediaQuery({
        query: '(min-width:900px)'
    });
    return (
        <div className="Services" >
            <h1 className="heading" id="services">Services</h1>
            <div className="Services-container" style={!isScreenSmaller?{display:"flex",flexDirection:"column",paddingBottom:"10%"}:{}}>
                    <div style={!isScreenSmaller?{display:"flex",flexDirection:"column"}:{display:"flex",gap:"20px"}}>
                    <Cards />
                    <div style={{border:"#14aecf 1px solid ",width:"1px"}}></div>
                    <Cards />
                    <div style={{border:"#14aecf 1px solid ",width:"1px"}}></div>
                    <Cards />
                    </div>
                    <div style={!isScreenSmaller?{display:"flex",flexDirection:"column"}:{width:"90%",display:"flex",justifyContent:"center",marginLeft:"5%"}}>
                    <Cards />
                    <div style={!isScreenSmaller?{border:"none"}:{border:"#14aecf 1px solid ",backgroundColor:"#14aecf"}}></div>
                    <Cards />
                    </div>
            </div>
        </div>
    );
} 

export default Services;
