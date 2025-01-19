import React from 'react'
import { MdEmojiEvents, MdRssFeed } from 'react-icons/md'
import { IoChatbubbleEllipsesSharp } from 'react-icons/io5'
import { BiSolidVideos } from 'react-icons/bi'
import { FaBriefcase, FaPeopleGroup, FaSchool } from 'react-icons/fa6'
import { BsBookmarkHeartFill } from 'react-icons/bs'
import { PiSealQuestionFill } from 'react-icons/pi'
import { BtnOne } from '../Topbar/Searchbar'
import Person2 from './../../../assets/Persons/Saqib.png'

function Sidebar() {

  return (
    <div className='sidebar mt-2 flex-[3.3] h-cal-custom overflow-y-scroll scrollBeuti'>
      <div className="sidebarwrapper inline-flex flex-col p-[20px]">
        <ul className='inline-flex flex-col p-0 m-0 items-start'>
          <SidebarListIcon LiICons={MdRssFeed} LiText='Feed'/>
          <SidebarListIcon LiICons={IoChatbubbleEllipsesSharp} LiText='Chats'/>
          <SidebarListIcon LiICons={BiSolidVideos} LiText='Videos'/>
          <SidebarListIcon LiICons={FaPeopleGroup} LiText='Group'/>
          <SidebarListIcon LiICons={BsBookmarkHeartFill} LiText='Bookmarks'/>
          <SidebarListIcon LiICons={PiSealQuestionFill} LiText='Questions'/>
          <SidebarListIcon LiICons={FaBriefcase} LiText='Jobs'/>
          <SidebarListIcon LiICons={MdEmojiEvents} LiText='Events'/>
          <SidebarListIcon LiICons={FaSchool} LiText='Courses'/>
        </ul>
        <BtnOne Text='Show more'/>
        <hr className='h-[2px] my-[20px]'/>
          <ul className="p-0 m-0 inline-flex flex-col items-start">
           <FriendPic Person={Person2} Text='Saqib'/>
           <FriendPic Person={Person2} Text='Saqib'/>
           <FriendPic Person={Person2} Text='Saqib'/>
           <FriendPic Person={Person2} Text='Saqib'/>
           <FriendPic Person={Person2} Text='Saqib'/>
           <FriendPic Person={Person2} Text='Saqib'/>
           <FriendPic Person={Person2} Text='Saqib'/>
           <FriendPic Person={Person2} Text='Saqib'/>
           <FriendPic Person={Person2} Text='Saqib'/>
           <FriendPic Person={Person2} Text='Saqib'/>
           <FriendPic Person={Person2} Text='Saqib'/>
           <FriendPic Person={Person2} Text='Saqib'/>
           <FriendPic Person={Person2} Text='Saqib'/>
           <FriendPic Person={Person2} Text='Saqib'/>
          </ul>
      </div>
    </div>
  )
}

export default Sidebar


let SidebarListIcon = ({LiICons,LiText})=>{
  return(
    <li className='inline-flex items-center mb-[20px]'>
    < LiICons className='bartext text-[22px] mr-[15px]'/>
    <span className='font-bold font-serif'>{LiText}</span> 
    </li>
  )
}

let FriendPic = ({Person,Text})=>{
  return(
    <li className="inline-flex items-center mb-[15px]">
    <img className='h-[32px] w-[32px] rounded-full object-cover mr-[15px]' src={Person} alt="" />
    <span>{Text}</span>
  </li>
  )
}