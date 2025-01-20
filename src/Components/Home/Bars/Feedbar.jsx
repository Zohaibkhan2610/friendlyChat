import React from 'react'
import Share from './Feed/Share'
import Post from './Feed/Post'
import DummyData from './Feed/DummyData'

function Feedbar() {
  
  return (
    <div className='feedbar flex-[6] p-2 m-2 h-cal-custom overflow-y-scroll scrollBeuti'>
      <div className="feedwrapper">
        <Share/>
        {DummyData.map((p) => (
          <Post key={p.Id} Postes={p}/>
        ))
        }
        
      </div>
    </div>
  )
}

export default Feedbar
