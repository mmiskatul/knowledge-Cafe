import React from 'react';
import PropTypes from 'prop-types';
import { GoBookmark } from 'react-icons/go';

const Blog = ({blog,handleAddtoBookMark,handleMarkRead}) => {
    const {id,title,cover,author,authorImg,date,readTime,tags}=blog;

    return (
        <div className='flex flex-col justify-center  px-20 mt-10 mb-20  rounded-2xl '>
            {/* cover page */}
            <div className='w-full items-center'>
                <img  className='full rounded-2xl '  src={cover} alt={`Cover picture of the Title ${title}`} />
            </div>
            {/* description */}
            <div className='py-3  '>
                {/* author */}
                <div className='flex justify-between items-center mt-5 ' >
                <div className='flex items-center gap-5 mt'>
                    <div><img src={authorImg} className='size-14 rounded-full' alt="" /></div>
                    <div>
                        <h5 className='text-2xl text-[#111111] font-bold'>{author}</h5>
                        <p className='text-sm font-semibold text-[#111111]/60'>{date}</p>
                    </div>
                    
                </div>
                <div className='flex items-center gap-2 text-[#111111]/60 text-xl'>
                        <span>{readTime} min read</span>
                    <button onClick={()=>handleAddtoBookMark(blog)} className='cursor-pointer text-3xl' ><GoBookmark /></button>
                </div>
                
            </div>
                {/* Title */}
                    <h1 className='text-4xl text-[#111111] font-bold my-7' >{title}</h1>
               
                {/* Tags */}
                <p className='font-medium text-xl text-[#111111]/60 mb-7 space-x-2 flex gap-2'> 
                    {
                        tags.map((tag,index)=>(
                           <span key={index}><a href="">{tag}</a></span>
                        ))
                    }
                </p>
                <button className='text-blue-500  cursor-pointer mb-10' onClick={()=>handleMarkRead(readTime,id)}> Mark as Read</button>
                <hr  className='text-gray-400'/>

            </div>

        </div>
    );
};

    Blog.propTypes ={
        blog: PropTypes.object.isRequired,
        handleAddtoBookMark: PropTypes.func,
        handleMarkRead: PropTypes.func
    }
export default Blog;