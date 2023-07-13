import React, {useState} from 'react'
import './Side2.css'

function Side2(Props) {

  // const[first, setfirst] = useState(false);
  return (
    <>
    {/* {first? "s2main" : "s2main2"} */}
    <div className={Props.first ? "s2main" : "s2main2"}>
     <div>Meetings <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M12.75 11.25V6H11.25V11.25H6V12.75H11.25V18H12.75V12.75H18V11.25H12.75Z" fill="#F24822"/>
<rect x="0.5" y="0.5" width="23" height="23" rx="7.5" stroke="black" stroke-opacity="0.05"/>
</svg></div>
<div>
<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
<path d="M12.5625 12.5625L15.9375 15.9375" stroke="#A8A8A8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.34375 13.6875C11.295 13.6875 13.6875 11.295 13.6875 8.34375C13.6875 5.39248 11.295 3 8.34375 3C5.39248 3 3 5.39248 3 8.34375C3 11.295 5.39248 13.6875 8.34375 13.6875Z" stroke="#A8A8A8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    <input type="text" placeholder='Search'/></div>
<div className='up all'>Upcoming</div>
<div className='all'>Previous</div>
<div className='all'>Personal Room</div>
<div className='all'>Meeting Tamplates</div>

    </div>
    </>
  )
}

export default Side2;