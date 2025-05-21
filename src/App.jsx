import React, { useState } from 'react'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import BookMark from './Components/BookMarks/BookMarks'

function App() {
  const [bookmarks,setBookmarks]=useState([]);
  const [readingTime,setReadingTime]=useState(0);
  const handleAddtoBookMark =(blog)=>{
      const newBookmark=[...bookmarks,blog];
      setBookmarks(newBookmark);
  }
  const hanndleMarkread=(readtime,id)=>{
    const newreadingTime=readingTime+readtime;
    setReadingTime(newreadingTime);
       const remainBookmark = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainBookmark);
  }
  return (
    <>
    <Header/>
    <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleAddtoBookMark={handleAddtoBookMark} hanndleMarkread={hanndleMarkread}/>
      <BookMark bookmarks={bookmarks} readingTime={readingTime}/>
    </div>
    </>
  )
}

export default App
