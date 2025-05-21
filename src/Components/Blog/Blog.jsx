import React from 'react';
import PropTypes from 'prop-types';
import { GoBookmark } from 'react-icons/go';

const Blog = ({blog}) => {
    const {title,cover,author,authorImg,date,readTime,tags}=blog;
    return (
        <div className='flex flex-col justify-center  px-20 mt-10  rounded-2xl hover:'>
            {/* cover page */}
            <div className='w-fit items-center'>
                <img className='rounded-2xl mt-8'  src={cover} alt="" />
            </div>
            {/* description */}
            <div className='px-2 py-3  '>
                {/* author */}
                <div className='flex justify-between items-center mt-5 ' >
                <div className='flex items-center gap-5 mt'>
                    <div><img src={authorImg} className='size-12 rounded-full' alt="" /></div>
                    <div>
                        <h5 className='text-2xl text-[#111111] font-bold'>{author}</h5>
                        <p className='text-sm font-semibold text-[#111111]/60'>{date}</p>
                    </div>
                    
                </div>
                <div className='flex items-center gap-2 text-[#111111]/60 text-xl'>{readTime} min read
                    <button className='cursor-pointer text-3xl' ><GoBookmark /></button>
                </div>
                
            </div>
                {/* Title */}
                    <h1 className='text-4xl text-[#111111] font-bold my-7' >{title}</h1>
               
                {/* Tags */}
                <h4 className='font-medium text-xl text-[#111111]/60 mb-7'> {tags} </h4>
                <button className='text-blue-500  cursor-pointer mb-10'> Mark as Read</button>
                <hr  className='text-gray-400'/>

            </div>

        </div>
    );
};

Blog.propTypes ={
    blog: PropTypes.object.isRequired
}
export default Blog;