import { experimental_sx } from "@mui/material";
import React from "react";
import { useMediaQuery } from "react-responsive";
function Expectations() {
    const isScreenSmaller = useMediaQuery({
        query: '(min-width:900px)'
    });

    return (
        <div className="Expectations">
                      <div id="expect" style={!isScreenSmaller ? { display: "flex", flexDirection: "column", justifyContent:"center", alignItems:"center",gap:"40px", paddingTop:"15%",paddingBottom:"15%" } : {}}>
                <div id="expect-overlay"></div>
                <p style={!isScreenSmaller ? {width:"80%"} : {}}>
                    <div style={{ marginBottom: "10%", fontWeight: "bold", fontSize: "2rem" }}>1</div>
                    When jkcbdhzshvdfjnsjvf jkfdnskjn jhdwgjkfnew jfnnv fdiu ipjnkm jiebqfinrj cjhdbvjbfdssj vfhsgviufh iufhkmvnnjhgyurhewjg rejhgfyireh afndihiahfiuqerh aifreaijhiof agbfiuabfa f.
                </p>
                <div style={!isScreenSmaller?{border:"1px solid #14aecf",zIndex:"3", width:"80%"}:{ border: "#14aecf 1px solid ",zIndex:"3" }}></div>
                <p style={!isScreenSmaller ? {width:"80%"} : {}}>
                    <div style={{ marginBottom: "10%", fontWeight: "bold", fontSize: "2rem" }}>2</div>
                    IF cjkhnssg iufsjnbgj ijjwj oiogoi nihkf friuewfj uiej iojewojr uyrtgyw8w9th kjbuyh v78dfayhvijbauyfge hgruiaguyfeywioaf hrgauydhywiamnjkdb vfg suihvhbuyof.
                </p>
                <div style={!isScreenSmaller?{border:"1px solid #14aecf",zIndex:"3", width:"80%"}:{ border: "#14aecf 1px solid ",zIndex:"3" }}></div>
                <p style={!isScreenSmaller ? {width:"80%"} : {}}>
                    <div style={{ marginBottom: "10%", fontWeight: "bold", fontSize: "2rem" }}>3</div>
                    My ,jhvcfbdge v fuigjt jjns juhknds fjdshf svjnfsv fjnss vjfsvknf sk gvbfhss fshvbs vh h vjbvf hvb uheaa cxvnnbdalufh vuyhfdhaejfg hgiureha orjhabv rfnsei asuifu hahhfdusahgur hs.
                </p>
            </div>
        </div>
    )
}

export default Expectations;