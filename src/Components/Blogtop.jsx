import React from "react";
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from "react-responsive";
function Blogtop() {
    const navigate = useNavigate();
    const isScreenSmaller = useMediaQuery({
        query: '(min-width:900px)'
    });
    return (
        <div className="blogtop" style={!isScreenSmaller?{width:"100%"}:{}}>
        <div className="blogcontent" style={!isScreenSmaller?{width:"100%",padding:"10%",paddingTop:"5%"}:{}}>
            <h1>Title of a longer featured blog post</h1>
            <h3>Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.
                informing new readers quickly and efficiently about what's most interesting in this post's contents.
                informing new readers quickly and efficiently about what's most interesting in this post's contents.
            </h3>
            <button id="continue" onClick={() => navigate("/blogs")}>Continue reading ...</button>
        </div>
    </div>
    )
}
export default Blogtop;