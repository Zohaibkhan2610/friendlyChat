import React from 'react'
import { FaGift } from 'react-icons/fa6'
import Work from './../../../assets/work.jpg'
import DummyData from './Feed/DummyData'
function Rightbar() {
  let Name = DummyData.map((p) => {
    return (
      <li className="inline-flex w-full ml-4 m-3 items-center gap-2">
            <div className="mr-[10px] relative">
            <img className='w-[40px] h-[40px] object-cover rounded-full' src={Work} alt="" />
            <span className="w-[12px] h-[12px] bg-green-500 rounded-full absolute top-[-2px] right-0"></span>
            </div>
            <span className='text-[15px] font-bold'>{p.name}</span>
          </li>
    )
  })

  return (
    <div className='Rightbar flex-[3] p-2 m-2 h-cal-custom overflow-y-scroll scrollBeuti'>
      <div className="rightbarWrapper">
        <div className="brithdaycontainer inline-flex items-center gap-2">
          <FaGift className='text-red-600 text-[40px]'/>
          <span className='text-[15px] font-normal'>
            <span className='font-bold'>Saqib</span> and 
            <span className='font-bold'> 1 other Friend </span>
             have Birthday Today.</span>
        </div>
        <img src={Work} alt="" />
        <h4 className='text-[15px] font-bold mt-[15px]'>Online Friend</h4>
        <ul className="mb-[15px] inline-flex flex-col list-none items-center">
          {Name}
        </ul>
      </div>
    </div>
  )
}



export default Rightbar
