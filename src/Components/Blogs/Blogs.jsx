import React, { useEffect, useState } from 'react'
import Blog from '../Blog/Blog';
import PropTypes from 'prop-types';

function Blogs({handleAddtoBookMark ,handleMarkRead}) {
    const [blogs,setBlogs]=useState([]);
    useEffect(()=>{
        fetch('blogs.json').then(res=>res.json()).then(data=>setBlogs(data));
    },[]);
  return (
    <div className='md:w-2/3'>
       {/* <h1 >blogs  :{blogs.length}</h1> */}
       {
        blogs.map(blog=><Blog key={blog.id} handleAddtoBookMark={handleAddtoBookMark} handleMarkRead={handleMarkRead} blog={blog}/>)
       }
    </div>
  )
}
Blogs.prototype ={
    handleAddtoBookMark: PropTypes.func,
    handleMarkRead: PropTypes.func
}
export default Blogs
