import React from 'react'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import BookMark from './Components/BookMark/BookMark'

function App() {
  return (
    <>
    <Header/>
    <div className='md:flex '>
      <Blogs/>
      <BookMark/>
    </div>
    </>
  )
}

export default App
