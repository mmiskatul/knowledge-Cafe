import React from 'react'
import profile from '../../assets/images/profile.png'

function Header() {
  return (
    <><div className='flex items-center justify-between p-4 mx-4 max-w-7xl mx-auto '>
          <h1 className='text-4xl font-bold'> Knowledge Cafe</h1>
          <img src={profile} alt="" />

      </div><hr className='text-gray-300 '/></>
  )
}

export default Header
