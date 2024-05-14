import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import './style.css';

function Introduction() {
    const isScreenSmaller = useMediaQuery({
        query: '(min-width:900px)'
    });

    return (
        <div className="Intro" style={!isScreenSmaller ? { flexDirection: "column", justifyContent: "flex-start", alignItems: "center", minHeight: "100vh" } : {}}>
            <div className="Intro-content" style={!isScreenSmaller ? { width: "80%", paddingBottom: "22.5%",minWidth:"94%" } : {}}>
                <div className="Introtext" style={!isScreenSmaller?{paddingTop:"12.5%"}:{}}>
                    <p style={{textAlign:"center"}}>Responsive  image:</p>
                    <h1>Quickly prebuilt components, and powerful JavaScript plugins.</h1>
                <div style={{ display: "flex", flexDirection: "row",justifyContent:"center"}}>
                    <p>I am </p>
                    <div class="words">
                        <span>fantastic</span>
                        <span>interesting</span>
                        <span>awesome</span>
                        <span>incredible</span>
                        <span>fantastic</span>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;
