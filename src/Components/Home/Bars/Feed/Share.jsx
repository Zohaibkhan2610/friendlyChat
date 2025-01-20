import React from 'react'
import Person1 from './../../../../assets/Persons/me.png'
import { MdEmojiEmotions, MdPermMedia } from 'react-icons/md'
import { FaLocationCrosshairs, FaTag } from 'react-icons/fa6'
import { BtnTwo } from '../../Topbar/Searchbar'
function Share() {
    return (
        <div className='share m-1 w-full h-[190px] border rounded-lg shadow-lg p-4'>
            <div className="shareWrapper p-[20px]">
                <div className="shareTop inline-flex items-center">
                    <img className='h-[50px] w-[50px] object-cover rounded-full mr-[10px] shareProfile' src={Person1} alt="" />
                    <input placeholder="What's in Your mind" className="border-none w-[80%] focus:outline-none shareInput" />
                </div>
                <hr className="m-[20px] shareHr" />
                <div className="inline-flex items-center justify-between mb-3 shareBottom">
                    <div className="shareOptions ml-[15px] cursor-pointer inline-flex items-center justify-between">
                        <ShareOption IconColor='red' MediaIcon={MdPermMedia} Text="Photo or Videos" />
                        <ShareOption IconColor='blue' MediaIcon={FaTag} Text="Tag" />
                        <ShareOption IconColor='green' MediaIcon={FaLocationCrosshairs} Text="Location" />
                        <ShareOption IconColor='black' className="emoji" MediaIcon={MdEmojiEmotions} Text="Feelings" />
                    </div>
                    <BtnTwo Text='Share' />
                </div>
            </div>
        </div>
    )
}




export default Share

let ShareOption = ({ MediaIcon, Text, IconColor }) => {
    return (
        <div className="shareOption inline-flex ml-[15px] cursor-pointer items-center">
            <MediaIcon style={{ color: IconColor }} className="text-[18px] mr-[3px] shareIcon" />
            <span className="text-[14px] font-bold shareOptionText">{Text}</span>
        </div>
    )
}

