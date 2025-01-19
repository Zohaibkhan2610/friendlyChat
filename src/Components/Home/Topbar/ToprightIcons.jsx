import React from 'react';

function ToprightIcons({ IconBase, Text }) {
  return (
    <div className="inline-flex items-center cursor-pointer mr-[15px] relative text-white">
      <span>{IconBase}</span>
      <span className="h-[15px] bg-red-500 border-transparent rounded-full right-[-5px] top-[-7px] w-[15px] flex items-center justify-center absolute">{Text}</span>
    </div>
  );
}

export default ToprightIcons;
