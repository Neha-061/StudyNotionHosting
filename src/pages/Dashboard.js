import React from 'react'
import  Banner from "../assets/banner.mp4";
const Dashboard = () => {
  return (
    <div className='flex justify-center items-center
    text-white text-3xl h-full'>
    
      Welcome to StudyNotion
              {/* Video */}
        <div className="mx-3 my-6 shadow-[10px_-5px_50px_-5px] shadow-blue-200">
          <video
            className="shadow-[20px_20px_rgba(255,255,255)]"
            muted
            loop
            autoPlay>
            <source src={Banner} type="video/mp4" />
          </video>
        </div>
    </div>
  )
}

export default Dashboard
