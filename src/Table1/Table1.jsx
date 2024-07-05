import React from 'react'
import img2 from '../images/838.jpg'
export default function () {
  return ( <>
  <div className="table1" id='table1'>
    <div className="container">
       <div className="row">
        <div className="col-md-6 py-3">
            <h2>What are IoT sensors?</h2>
            <p>
            IoT sensors, short for Internet of Things sensors, are devices designed to capture data from various assets and equipment, and make that data available in real time through the internet. These smart devices are incredibly versatile and can measure multiple signals such as temperature, pressure, light, movement, gas concentrations, and more.
            </p>
            <p>
            Once the data is collected, it is transmitted over the internet to a central information system. In this system, the data undergoes normalization, processing, or enhancement. Once these steps are completed, the data is transformed into valuable information that can be used to track trends or gain insights. Users can access this data conveniently through a cloud platform, usually offered as a Software-as-a-Service offering, allowing convenient access from anywhere and at any time.
            </p>
            <p>
            To enhance user convenience and reduce maintenance costs, IoT sensors employ different techniques.
            </p>
            <p>
            Firstly, they utilize wireless technologies like cellular, Wi-Fi, Bluetooth, or LPWAN to connect to the cloud. This shift away from wired Ethernet connections has made it easier for numerous companies to embrace IoT technology.
            </p>
            <p>
            Secondly, certain IoT sensors are battery-powered, allowing them to operate autonomously for up to 10 years without human intervention. This significantly reduces maintenance expenses.
            </p>
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img src={img2} className='w-75 h-75' alt="" />
        </div>
       </div>
    </div>
  </div>
  </>
  )
}
