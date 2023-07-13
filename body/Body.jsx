import React from 'react'
import './Body.css'
import Line from './Line'

function Body() {
    return (
        <>
            <div className="bmain">

                <div className="bnav">
                    <div className="bleft">
                        Upcoming Meeting
                    </div>
                    <div className="bright">
                        <div><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 19 19" fill="none">
                            <g clip-path="url(#clip0_156_680)">
                                <path d="M14.2499 3.16666H4.74992C3.00102 3.16666 1.58325 4.58442 1.58325 6.33332V14.25C1.58325 15.9989 3.00102 17.4167 4.74992 17.4167H14.2499C15.9988 17.4167 17.4166 15.9989 17.4166 14.25V6.33332C17.4166 4.58442 15.9988 3.16666 14.2499 3.16666Z" stroke="#F24822" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M1.58325 7.91666H17.4166M6.33325 1.58333V4.74999V1.58333ZM12.6666 1.58333V4.74999V1.58333Z" stroke="#F24822" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_156_680">
                                    <rect width="19" height="19" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                            <span>FROM</span>
                        </div>

                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 19 19" fill="none">
                                <g clip-path="url(#clip0_156_680)">
                                    <path d="M14.2499 3.16666H4.74992C3.00102 3.16666 1.58325 4.58442 1.58325 6.33332V14.25C1.58325 15.9989 3.00102 17.4167 4.74992 17.4167H14.2499C15.9988 17.4167 17.4166 15.9989 17.4166 14.25V6.33332C17.4166 4.58442 15.9988 3.16666 14.2499 3.16666Z" stroke="#F24822" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M1.58325 7.91666H17.4166M6.33325 1.58333V4.74999V1.58333ZM12.6666 1.58333V4.74999V1.58333Z" stroke="#F24822" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_156_680">
                                        <rect width="19" height="19" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <span>TO</span>
                        </div>

                        <div>FILTER <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 25 25" fill="none">
                                <path d="M7.5 10.5L12.5 15.5L17.5 10.5H7.5Z" fill="black" />
                            </svg>
                        </div>

                        <div>START MEETING
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 25 25" fill="none">
                                <path d="M7.5 10.5L12.5 15.5L17.5 10.5H7.5Z" fill="black" />
                            </svg>
                        </div>
                    </div>
                </div>

<div className="bline">
<Line start="5:00 AM" end="7:00 AM" discuss="project discussion" mid="011010001"/>
<Line start="5:00 AM" end="7:00 AM" discuss="project discussion" mid="011010001"/>
<Line start="5:00 AM" end="7:00 AM" discuss="project discussion" mid="011010001"/>
<Line start="5:00 AM" end="7:00 AM" discuss="project discussion" mid="011010001"/>
<Line start="5:00 AM" end="7:00 AM" discuss="project discussion" mid="011010001"/>
<Line start="5:00 AM" end="7:00 AM" discuss="project discussion" mid="011010001"/>
<Line start="5:00 AM" end="7:00 AM" discuss="project discussion" mid="011010001"/>
<Line start="5:00 AM" end="7:00 AM" discuss="project discussion" mid="011010001"/>
</div>



            </div>
        </>
    )
}

export default Body