import React from 'react'
import img from '../images/modern-business-building-scenery-touching-sky.jpg'
export default function Intro() {
  return (
    <>
    <div className="container py-5">
        <div className="row">
            <div className="col-md-6">
                <h5>IoT Sensors for Real Estate and Facility Management – Top Benefits and Use Cases</h5>
                <p>IoT sensors are revolutionizing real estate and facilities management with data-driven
                    insights and smart applications to improve the user experience. Discover the top use cases and benefits for the built environment.</p>
                <p>IoT sensors have become a game-changer in the real estate and facility management industry. With their ability to capture data from various assets and equipment and provide real-time insights, these sensors are revolutionizing the way buildings are managed. In this article, we will explore the benefits and use cases of IoT sensors in corporate real estate (CRE) and facility management (FM) 
                    and understand how they are transforming the industry.</p>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
                <img src={img} className='w-50 h-100 ' alt="" />
            </div>
        </div>
   </div>
    </>
  )
}
