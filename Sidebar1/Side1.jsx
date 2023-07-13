import React from 'react'
import './Side.css'
import Sideimg from '../../Asacts/images/side1.png'
import Side2 from '../../Asacts/images/side2.png'

function Side1(Props) {
  return (
    <>
    <div className="smain" >
    <div className="sside">
      <div onClick={()=>{Props.setFirst(!Props.first)}}>|||</div>
        <img src={Sideimg} alt="" />
        <img src={Side2} alt="" />
    </div>

    </div>
    
    </>
  )
}

export default Side1;