import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Resources from "./Resources";
import axios from "axios";
import { useParams } from "react-router-dom";

function Bloglayout() {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
  
    useEffect(() => {
      const fetchBlog = async () => {
        try {
          const response = await axios.get(`https://nutrigetic-1.onrender.com/api/blog/${id}`);
          setBlog(response.data);
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchBlog(); 
    }, [id]);
  
    if (!blog) return <div>Loading...</div>; // or fallback UI
  return ( 
    <div>
      <Header />
      <div className="Bloglayout_container">
        <div className="Bloglayout">
          {blog ? (
            <>
              <img
                className="Bloglayoutimg"
                src={blog.image}
                alt="Blog Image"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{
                    textAlign: "center",
                    fontSize: "4rem",
                    marginBottom: "2%",
                    fontFamily: "Abel, sans-serif",
                    fontWeight: "400",
                    fontStyle: "normal",
                  }}
                >
                  {blog.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  style={{
                    textAlign: "center",
                    fontSize: "1.15rem",
                    width: "80%",
                    marginLeft: "10%",
                  }}
                >
                  {blog.content}
                </Typography>
              </CardContent>
            </>
          ) : (
            <Typography variant="body1">Loading...</Typography>
          )}
        </div>
        <Resources />
      </div>
      <Footer />
    </div>
  );
}

export default Bloglayout;
