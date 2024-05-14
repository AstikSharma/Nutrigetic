import React from "react";
import { useMediaQuery } from "react-responsive";
function Aboutlower(){
    const isScreenSmaller = useMediaQuery({
        query: '(min-width:1200px)'
    });
    return(
        <div className="Aboutlower">
        <h1 className="heading">More About Me</h1>
        <div className="About-container" style={!isScreenSmaller?{flexDirection:"column-reverse",display:"flex",justifyContent:"center",alignItems:"center",gap:"250px"}:{}}>    
            <div className="Description2" style={!isScreenSmaller?{width:"70%",marginLeft:"15%",marginRight:"15%"}:{}}>
                <h1>What Do We Do??</h1>
                <p style={{textAlign:"center"}}>Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.
                Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.
                Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                {/* <button className="About-button" >Learn more</button> */}
            </div>
            <div className="Aboutpgimg2"><img id="abtlowerimg"src="https://wallpapercave.com/wp/wp6380550.jpg" style={{objectFit:"cover"}}/><img id="abtlowerimg2" src="https://wallpapercave.com/wp/wp6380550.jpg" style={{objectFit:"cover"}}/></div>
        </div>  
        </div>   
    )
}
export default Aboutlower;