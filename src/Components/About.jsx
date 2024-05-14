import React from "react";
import { useMediaQuery } from "react-responsive";
import './style.css';
function About() {
    const isScreenSmaller = useMediaQuery({
        query: '(min-width:900px)'
    });
    return (
        <div className="About" id="about" style={!isScreenSmaller?{gap:"60px"}:{}}>
        <div className="About-container" style={!isScreenSmaller?{flexDirection:"column",display:"flex",justifyContent:"center",alignItems:"center",gap:"4rem"}:{}}>
            <div className="Aboutimg" style={!isScreenSmaller?{height:"50vh",marginRight:"15%"}:{}}><img src="https://paultan.org/image/2019/03/Lamborghini-Aventador-SVJ-Roadster-5.jpg" style={{objectFit:"cover"}}/></div>
            <div className="Description" style={!isScreenSmaller?{width:"70%",marginLeft:"15%",marginRight:"15%"}:{}}>
                <h1>What Do We Do??</h1>
                <p style={{textAlign:"center"}}>Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                <button className="About-button" style={!isScreenSmaller?{width:"90%"}:{}}>Learn more</button>
            </div>
        </div>
        <div className="About-container" style={!isScreenSmaller?{flexDirection:"column-reverse",display:"flex",justifyContent:"center",alignItems:"center"}:{}}>
            <div className="Description2" style={!isScreenSmaller?{width:"70%",marginLeft:"15%",marginRight:"15%"}:{}}>
                <h1>What Do We Do??</h1>
                <p style={{textAlign:"center"}}>Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                <button className="About-button" >Learn more</button>
            </div>
            <div className="Aboutimg2" style={!isScreenSmaller?{height:"50vh"}:{}}><img src="https://wallpapercave.com/wp/wp6380550.jpg" style={{objectFit:"cover",borderLeft:"none"}}/><img src="https://wallpapercave.com/wp/wp6380550.jpg" style={{objectFit:"cover"}}/></div>
        </div>
        </div>
    )
}

export default About;