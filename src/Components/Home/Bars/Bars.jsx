import React from 'react'
import Sidebar from './Sidebar'
import Feedbar from './Feedbar'
import Rightbar from './Rightbar'

function Bars() {
  return (
    <div className='flex w-full'>
    <Sidebar/>
    <Feedbar/>
    <Rightbar/>
    </div>
  )
}

export default Bars
