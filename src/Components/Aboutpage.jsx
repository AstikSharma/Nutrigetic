import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useMediaQuery } from "react-responsive";
import Aboutlower from "./Aboutpagelower";
import Resources from "./Resources";
function Aboutpage() {
    const isScreenSmaller = useMediaQuery({
        query: '(min-width:900px)'
    });
    return (
        <div id="about">
            <Header />
            <div className="About-container" id="abtpg" style={!isScreenSmaller ? { flexDirection: "column", display: "flex", justifyContent: "center", alignItems: "center", gap: "4rem",  paddingTop:"15%"} : {}}>
                <div className="Aboutimg" id="abtpgimg1" style={!isScreenSmaller ? { height: "50vh" } : {}}><img src="https://paultan.org/image/2019/03/Lamborghini-Aventador-SVJ-Roadster-5.jpg" style={{objectFit:"cover"}}/></div>
                <div className="Description" style={!isScreenSmaller ? { width: "70%", marginLeft: "15%", marginRight: "15%" } : {}}>
                    <h1>What Do We Do??</h1>
                    <p style={{ textAlign: "center" }}>Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins. Quickly design a</p>
                </div>
            </div>
            <Aboutlower />
            <div className="aboutme" style={!isScreenSmaller?{display:"flex",flexDirection:"column"}:{}}>
                <p style={!isScreenSmaller?{paddingLeft:"8%",paddingRight:"8%"}:{}}>When jkcbdhzshvdfjnsjvfhvf cjhdbvjbfdssj vfhsgviufh iufhkmvnnjhgyurhewjg rejhgfyireh afndihiahfiuqerh aifreaijhiof agbfiuabfa f.</p>
                <div style={{ border: "#14aecf 1px solid " }}></div>
                <p style={!isScreenSmaller?{paddingLeft:"8%",paddingRight:"8%"}:{}}>IF cjkhnssghfvuyhegfuyhwfgtydgeiufjkf uyrtgyw8w9th kjbuyh v78dfayhvijbauyfge hgruiaguyfeywioaf hrgauydhywiamnjkdb vfg suihvhbuyof. </p>
                <div style={{ border: "#14aecf 1px solid " }}></div>
                <p style={!isScreenSmaller?{paddingLeft:"8%",paddingRight:"8%"}:{}}>My ,jhvcfbdghlruijhgiorjhifoperwfherwqnbe v cxvnnbdalufh ruehfregajfnfjnabvuyhfdhaejfg hgiureha orjhabv rfnsei asuifu hahhfdusahgur hs. </p>
            </div>
            <div className="aboutmeletter" style={!isScreenSmaller?{paddingBottom:"20%",paddingTop:"15%"}:{}}>
                <div className="aboutmelettercontent" style={!isScreenSmaller?{width:"100%"}:{}}>
                    <h2>When you LET GO of PLANS, and start living YOUR DREAM</h2>

                    <p>
                        So often we have a set plan in mind of how our lives are </p><p>‘supposed’ to go. BUT then life comes at you fast and throws a curve ball.
                        I totally get it and have been there. This is why I’m so passionate about helping people navigate these times and grow through them.
                        Credential</p>
                        <p>BA Psychology – UC Berkeley
                        MA Marriage and Family Therapy – USC
                        Life Purpose Life Coach Certification</p>
                        <p>REBT Mindset Life Coach Certification 
                    </p>
                </div>
            </div>
            <Resources />
            <Footer id="footer" />
        </div>
    )
}
export default Aboutpage;