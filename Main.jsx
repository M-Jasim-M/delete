import React, {useState} from 'react'
import './Main.css'
import Navbar from '../Navbar/Navbar'
import Side1 from '../Sidebar1/Side1'
import Side2 from '../Sidebar2/Side2'
import Right from '../right/Right'
import Body from '../body/Body'

export default function Main() {

  const[first, setFirst] = useState(true);
  return (
    <>
    <div className="top">
    <Navbar/>
    </div>
<div className="disp">
<Side1 setFirst={setFirst} first={first}/>
<Side2 first={first}/>
<Body/>
<Right/>
</div>
    
    </>
  )
}
