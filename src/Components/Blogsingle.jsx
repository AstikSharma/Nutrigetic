import React from "react";
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useMediaQuery } from "react-responsive";

function Blogsingle({ title, content, id, image }) {
    const navigate = useNavigate();
    const isScreenSmaller = useMediaQuery({
        query: '(min-width:900px)'
    });

    const handleContinueReading = () => {
        navigate(`/blog/${id}`);
    };

    return (
        <div className="blogcards" style={!isScreenSmaller ? { flexDirection: "column" } : {}}>
            <div style={!isScreenSmaller ? { width: "100%", marginRight: "10%" } : { width: "45%" }}>
                <div className="bloginterior" >
                    <div style={{ overflow: "hidden", width: "100%" }}>
                        <div className='tiltComponent'>
                            <Card style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                <CardMedia
                                    sx={{
                                        height: 400, width: 700, transition: "transform 0.3s",
                                        overflow: "hidden",
                                        "&:hover": {
                                            transform: "scale(1.05)",
                                        },
                                    }}
                                    image={image} // Use the image URL passed as a prop
                                />
                                <CardContent style={{ width: "80%", textAlign: "center", paddingTop: "5%" }}>
                                    <Typography gutterBottom variant="h5" component="div" style={{ textAlign: "center", fontSize: "2rem" }}>
                                        {title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" style={{ fontSize: "1.15rem", textAlign: "center" }}>
                                        {content}
                                        <br />
                                        <button className="blogcontinue" onClick={handleContinueReading}>Continue reading ...</button>
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blogsingle;
