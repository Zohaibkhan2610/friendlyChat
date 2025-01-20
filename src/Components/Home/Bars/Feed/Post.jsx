import React, { useState } from 'react';
import Person2 from './../../../../assets/Persons/Ahad.png';
import PostImg from './../../../../assets/Post/wildanimal.jpg';
import { CgMoreVertical } from 'react-icons/cg';
import { MdThumbUp } from 'react-icons/md';
import { IoMdHeart } from 'react-icons/io';

function Post({ Postes }) {
  const [likeCount, setLikeCount] = useState(Postes.like);
  const [liked, setLiked] = useState(false);

  const handleLikeToggle = () => {
    setLiked(!liked);
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
  };

  return (
    <div className='post'>
      <div className="postwrapper">
        <div className="postTop border rounded-lg shadow-lg p-4 inline-flex items-center w-full justify-between">
          <div className="postTopleft flex items-center m-[10px]">
            <img className='w-[32px] h-[32px] rounded-full object-cover' src={Person2} alt="internet problems" />
            <span className="font-[600] font-serif mx-[10px] text-[15px] ">{Postes.name}</span>
            <span className='text-[12px] font-[500] font-sans ml-[5px]'>{Postes.date}</span>
          </div>
          <div className="postTopright">
            <CgMoreVertical />
          </div>
        </div>

        <div className="postCenter mt-4">
          <span className="postText p-2 m-2 shadow-lg text-2xp font-bold">{Postes.desc} :</span>
          <img className='w-full object-cover p-2 m-1 max-h-[500px]' src={PostImg} alt="" />
        </div>

        <div className="postBottom inline-flex justify-between border w-full rounded-lg shadow-lg p-2 m-1 items-center">
          <div className="postbottomLeft inline-flex items-center gap-2">
            <IconicSet MediaIcon={MdThumbUp} IconColor='blue' onClick={handleLikeToggle} liked={liked} />
            <IconicSet onClick={handleLikeToggle} liked={liked} MediaIcon={IoMdHeart} IconColor='red' />
            <span>{likeCount} People like it</span>
          </div>
          <div className="postbottomRight">
            <span className='text-xl font-bold font-serif cursor-pointer border-b-[3px] border-dashed border-gray-400'>{Postes.comment} Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;

let IconicSet = ({ IconColor, MediaIcon, onClick, liked }) => {
  return (
    <MediaIcon
      onClick={onClick}
      style={{ background: IconColor, opacity: liked ? 0.7 : 1 }}
      className='text-3xl cursor-pointer text-white rounded-full p-1 m-2'
    />
  );
};
