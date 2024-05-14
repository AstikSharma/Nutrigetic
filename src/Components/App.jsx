import React from "react";
import Home from "./Home";
import Aboutpage from "./Aboutpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blogs from "./Blogspage";
import Test from "./TestimonialsPage";
import Bloglayout from "./Bloglayout";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/Testimonials" element={<Test />} />
          <Route path="/blog/:id" element={<Bloglayout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
