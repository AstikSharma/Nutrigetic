import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { useMediaQuery } from 'react-responsive';
import Blogsingle from "./Blogsingle";
import axios from "axios";

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const isScreenSmaller = useMediaQuery({ query: '(min-width:900px)' });

  useEffect( () => {
    const func=async()=>{
      
      await fetchBlogs();
      console.log("Hi there!!");
    }
    func();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get('https://nutrigetic-1.onrender.com/api/blogs').catch((err)=>{
        throw new Error(err)
      });
      console.log(response) // Assuming your backend API endpoint is '/api/blogs'
      
      

      setBlogs(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="Blog">
      <Header />
      <div className="Blogspage">
        <div
          className="Intro"
          id="blogintro"
          style={
            !isScreenSmaller
              ? {
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  height: '60vh',
                  marginBottom: '10%',
                }
              : {}
          }
        >
          <div
            className="Intro-content"
            id="blogintrocontent"
            style={
              !isScreenSmaller
                ? { width: '80%', paddingBottom: '22.5%', minWidth: '94%' }
                : {}
            }
          >
            <div className="Introtext" id="blogintrotext">
              <p style={{ textAlign: 'center' }}> Read the Latest</p>
              <h1>
                <span style={{ fontStyle: 'italic' }}>From the </span> 
                <span>Blogs</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="blog-container" style={!isScreenSmaller ? {display:"flex", flexDirection:"column", width:"70%" ,paddingRight:"5%" }:{}}>
          {blogs.map((blog) => (
            <Blogsingle key={blog._id} id={blog._id} image={blog.image} title={blog.title} content={blog.content} />
          ))}
        </div>
      </div>
      <Footer id="footer" />
    </div>
  );
}

export default Blogs;
