import React from 'react'
import img from '../images/2a2974cb-db78-4e30-91d3-228a183c1097-removebg-preview.png'

export default function Table3() {
  return <>
  <div className="table3" id='table3'>
    <div className="container py-4">
        <h2>IoT sensors to monitor energy consumption and increase efficiency</h2>
        <div className="row d-flex">
            <div className="col-md-6 justify-content-center align-content-center">
                <img src={img} className='w-100 h-100' alt="" />
            </div>
            <div className="col-md-6 justify-content-center align-content-center">
                <p>The CRE and FM industry is increasingly recognizing the need to combat climate change and implement sustainable practices such as energy conservation. In this context, the use of IoT has emerged as a game-changing technology for energy monitoring and efficiency.</p>
                <p>IoT sensors can be embedded in devices and systems, providing valuable insights into energy usage, performance, and areas for improvement. Organizations can leverage IoT-enabled energy monitoring to make informed decisions and take targeted actions to optimize energy consumption. This will reduce their environmental footprint and energy costs.</p>
                <p>By adopting IoT-enabled energy monitoring, companies can meet regulatory requirements and demonstrate their commitment to mitigating climate change.</p>
            </div>
            <p>IoT sensors for energy monitoring are commonly integrated into HVAC and lighting systems, electrical panels, meters and submeters. Current sensors monitor the current drawn by specific equipment or areas within a building, providing insights into energy consumption patterns. Voltage sensors monitor voltage fluctuations, identify irregularities, and optimize energy efficiency. Voltage sensors can also provide data on power quality, helping detect issues such as voltage sags or surges.</p>

            <p className='card bg-warning py-3'>A recent study found that annual energy consumption from smart buildings was reduced by over 38% with smart HVAC and smart lights.</p>

            <p>Other types of sensors can help with energy efficiency. For example, data from occupancy sensors can trigger energy-saving measures such as adjusting lighting or HVAC settings when a space is unoccupied. Pressure sensors can be integrated to monitor air pressure within different zones of a building. By continuously monitoring and analyzing the data, facility managers can optimize the HVAC system's performance, ensuring consistent air circulation, temperature control, and energy efficiency.</p>
        </div>
    </div>
  </div>
  </>
}
