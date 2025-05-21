import React from 'react'
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'

const BookMarks = ({bookmarks ,readingTime}) => {
  return (
    <div className='w-1/3 p-4  mt-10 mb-20 bg-gray-200 rounded-xl'>
      <h1 className='text-[#6047EC]  px-8 py-5 text-2xl bg-[#6047EC]/10 font-bold border rounded-lg'>Spent time on read : {readingTime} min</h1>
        <div className='px-2 py-3 mt-5'>
            <h3 className='text-2xl font-bold mb-5 text-[#111111]'>Bookmarked Blogs : {bookmarks.length}</h3>
            {
              bookmarks.map((bookmark,idx)=><Bookmark key={idx} bookmark={bookmark}/>)
            }
        </div>
    </div>
  )
}

BookMarks.propTypes = {
  bookmarks :PropTypes.object.array,
  readingTime:PropTypes.number
}

export default BookMarks
