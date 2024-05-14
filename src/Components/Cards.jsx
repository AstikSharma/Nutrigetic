import React from "react";
import './style.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useMediaQuery } from "react-responsive";

export default function Cards() {
  const isScreenSmaller = useMediaQuery({
    query: '(min-width:900px)'
    });
  return (
    
    <div style={{overflow:"hidden",width:"90%"}}>
            <div className='tiltComponent'>
                {
    <Card sx={{ maxWidth: 500, height: "fitContent"}} style={!isScreenSmaller?{padding:"10%",marginLeft:"10%",boxShadow:"none",borderBottom:"2px solid #14aecf"}:{boxShadow:"none",padding:"5% 10% 18% 10%"}}>
     
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{textAlign:"center",fontSize:"3rem",marginBottom:"5%",fontFamily:"Abel, sans-serif",fontWeight: "400",fontStyle: "normal"}}>
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{textAlign:"center",fontSize:"1.15rem"}}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
          <hr style={{opacity:"0"}}/>
          {/* <button className="Services-button" >Learn More</button> */}
        </Typography>
      </CardContent>
    </Card>
    }
            </div>
       </div> 
      
  );
}

