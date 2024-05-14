import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import Blogtop from "./Blogtop";
import Blogsingle from "./Blogsingle";
import axios from "axios";

  

function Blogsection() {

  const [blogs, setBlogs] = useState([]);
  const isScreenSmaller = useMediaQuery({ query: '(min-width:900px)' });

  useEffect( () => {
    const func=async()=>{
      
      await fetchBlogs();
      console.log("Lauki lele");
    }
    func();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/blogs').catch((err)=>{
        throw new Error(err)
      });
      console.log(response)
      
      

      setBlogs(response.data);
    } catch (error) {
      console.log(error);
    }
  };
    return (
        <div className="blog" id="blogs">
            <h1 className="heading">Blogs</h1>
            <div style={{width:"80%",marginTop:"-2.5%"}}>
            <Blogtop />
            </div>
            <div style={!isScreenSmaller?{display:"flex",flexDirection:"column", width:"70%", alignItems:"center",paddingRight:"0%", marginRight:"25%"}:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",width:"70%",padding:"0%",marginBottom:"2%", marginRight:"10%"}}>
            <Blogsingle id={"6639c2ba9eab60d7acd8442b"} image={"https://stimg.cardekho.com/images/carexteriorimages/630x420/Lamborghini/Huracan-EVO/10643/1690010999692/front-left-side-47.jpg"} title={"Hi"} content={"I am Astik"} />
            <Blogsingle id={"6639c3329eab60d7acd8442c"} image={"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/2023_Lamborghini_Huracan_Tecnica_1.jpg/1200px-2023_Lamborghini_Huracan_Tecnica_1.jpg"} title={"Example"} content={"Hi"} />
            </div>
        </div>
    )
}
export default Blogsection;