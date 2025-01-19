import React from 'react'
import Person1 from './../../../assets/Persons/Ahad.png'
import { IoNotifications, IoPerson, IoSearchCircleOutline } from 'react-icons/io5'
import { MdChat } from 'react-icons/md'
import Searchbar from './Searchbar'
import ToprightIcons from './ToprightIcons'

function Topbar() {
    return (
        //       Top bar Container    ///
        <div className="h-[4rem] w-full bg-blue-600 flex sticky top-0 items-center px-4">

            {/* //      Top Left     //// */}



            <div className="flex-[3]">
                <span className='font-bold ml-[20px] cursor-pointer text-white text-[24px]'>Friendly Chat</span>
            </div>


            {/* //      top center     /// */}



            <div className="flex-[5.5] justify-center items-center">
                <Searchbar/>
            </div>



            {/* //      Top Right     /// */}




            <div className="flex flex-[3.5] justify-center items-center">

                {/* ///             Links           ///// */}

                <div className="inline-flex justify-center items-center gap-[10px]">
                    <span className="text-[14px] text-white font-bold cursor-pointer mr-[10px]">HomePage</span>
                    <span className="text-[14px] text-white font-bold cursor-pointer mr-[10px]">Timeline</span>
                </div>


                {/* ///        icons      //// */}



                <ToprightIcons Text='1' IconBase= {<IoPerson/>} />
                <ToprightIcons Text='2' IconBase= {<MdChat/>} />
                <ToprightIcons Text='3' IconBase= {<IoNotifications/>} />

            </div>

            <img className='w-[32px] h-[32px] rounded-full' src={Person1} alt="" />
        </div>
    )
}

export default Topbar
