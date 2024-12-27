import React from 'react'
import Navbar from './Components/Navbar'
import Card from './Components/Card'
import Blog from './Components/Blog'

const page = () => {
  return (
    <><section className='bg-gray-600'>
    <Navbar/>
    <Card/>
    <Blog/>
    </section>
    </>
  )
}

export default page