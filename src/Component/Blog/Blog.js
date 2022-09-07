import React, { useState, useEffect } from 'react';
import './Blog.css'

export default function Blog() {
   const [blogs, setBlogs] = useState();
   useEffect(() => {
       fetch('http://localhost:5000/addBlog')
         .then(res => res.json())
         .then(data => setBlogs(data));
     }, []);
  return (
    <div className='blog-area'>
        <div className="container">
            <div className="blog-content">
                 <div className="blog-title">
                    <h3>Our Latest News</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique ab facilis <br /> deserunt nesciunt voluptas officia.</p>
                 </div>
                 <div className="blogs">
                 {
              blogs?.map(item =>
                    <div key={item?._id}  className="single-blog" >
                         <div className="blog-img">
                            <img src={item?.image} alt="" />
                         </div>
                         <h6>Collection - <span>09-06-2022</span></h6>
                         <h3>{item?.title}</h3>
                         <p>{item?.short_desc} </p>
                        <button>see more</button>
                    </div>
              )
}
                 </div>
            </div>
        </div>
    </div>
  )
}
