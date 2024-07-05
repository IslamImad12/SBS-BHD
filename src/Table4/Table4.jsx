import React from 'react'
import img from '../images/7403_fullimage_7403_fullimage_20210407-image-workspace-iadea-high-4500x3000_3840x2560_2227x1515_1024x682_1900x1292_progr.jpg'
import img2 from '../images/5596266_55817.jpg'
import img3 from '../images/park.jpg'
import img4 from '../images/virtual.jpg'
import img5 from '../images/9798378_4249716.jpg'
import img6 from '../images/8759318_3995247.jpg'


export default function Table4() {
  return <>
  <div className="table4" id='table4'>
    <div className="container py-4">
        <h2>IoT sensor applications to enhance workplace experience</h2>
        <p>A smart, IoT-enabled workplace enhances the workplace experience. It makes employees more mobile, safer, and better informed. It also supports CRE and FM teams in automating business processes, driving efficient interactions with stakeholders, and improving business insight. There are several applications for IoT sensors that directly support an improved workplace experience for building users:</p>
        <div className="row ">
                <div className="col-md-6 justify-content-center align-items-center">
                    <h3>Smart room and desk booking for improved space utilization and occupant experience</h3>
                    <p>IoT sensors, such as motion or occupancy sensors, can be installed in meeting rooms or office spaces to detect occupancy in real time. These sensors can identify whether a room or desk is currently in use or vacant. By integrating this data with a booking system, employees can easily identify and book available rooms and desks, reducing conflicts and optimizing utilization.
                    A smart meeting room using iot directly benefits office users.</p>
                    <p>Occupancy sensors can detect whether a reserved room is unoccupied during a scheduled booking time. If the sensors detect no activity or occupancy within a certain timeframe, the system can automatically release the room. This helps mitigate instances of unused rooms,
                        improving utilization efficiency and improving the employee experience.</p>  
                    <p>Occupancy sensors can detect whether a reserved room is unoccupied during a scheduled booking time. If the sensors detect no activity or occupancy within a certain timeframe, the system can automatically release the room. This helps mitigate instances of unused rooms,
                        improving utilization efficiency and improving the employee experience.</p> 
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <img src={img} className='w-75 h-75' alt="" />
                </div>
                {/*  */}
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <img src={img2} className='w-75 h-75' alt="" />
                </div>

                <div className="col-md-6 justify-content-center align-items-center">
                    <h3>IoT sensors for improved comfort and safety</h3>
                    <p>
                    IoT sensors offer a range of benefits for improved comfort and safety in the workplace. Proximity sensors, when integrated into lighting systems, play a crucial role in creating a convenient and energy-efficient environment. By detecting the presence or absence of people in a room, these sensors can automate the lighting control process. For instance, in areas such as restrooms, proximity sensors can trigger the lights to switch on automatically as soon as someone enters.
                     This eliminates the need for manual operation and ensures that individuals have immediate access to proper lighting, enhancing their comfort and convenience.
                    </p>
                    <p>
                    Furthermore, the use of gas sensors in the workplace can prevent dangerous circumstances from occurring. For instance, kitchens can be equipped with gas sensors to detect the presence of hazardous gases like carbon monoxide. These sensors continuously monitor the air quality and raise an alarm or trigger safety measures if dangerous gas levels are detected. By providing early detection and warning,
                     gas sensors help protect the well-being of employees and prevent potential accidents or health hazards.
                    </p>
                </div>
                {/*  */}
            
                <div className="col-md-6 justify-content-center align-items-center">
                    <h3>IoT sensors for Smart Parking</h3>
                    <p>
                    A vehicle detection sensor instantly detects the presence or absence of vehicles, offering real-time updates on parking space occupancy. Drivers can conveniently access this information via mobile apps or digital signage, allowing them to quickly locate available parking spaces. This efficient system minimizes the time spent searching for parking and helps reduce
                     traffic congestion within the parking lot.
                    </p>
                    <p>
                    By integrating this data with a booking system, the sensors can verify the availability of a reserved space
                     and guide the driver to their designated spot upon arrival.
                    </p>
                    <p>
                    The sensors also play a role in parking enforcement by monitoring parking session durations. They can detect instances of overstaying or unauthorized parking and generate notifications or alerts for parking attendants or enforcement personnel. Furthermore, IoT sensors enhance car park security by utilizing number plate recognition
                     systems to identify suspicious or unauthorized vehicles.             
                    </p>
                </div>

                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <img src={img3} className='w-75 h-75' alt="" />
                </div>


        </div>
        <section>
            <h3>Learn more about IoT in real estate and facility management</h3>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card">
                    <div class="card-header">
                        Virtual Events
                    </div>
                    <img src={img4} class="card-img-top" alt="..." />
                    <div class="card-body">
                       <p>How to benefit from IoT in 2023: discover the potential for your organization</p>
                       <p>Read more</p> 
                    </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card">
                    <div class="card-header">
                        Videos
                    </div>
                    <img src={img5} class="card-img-top" alt="..." />
                    <div class="card-body">
                       <p>Planon Workplace Insights</p>
                       <p>Read more</p> 
                    </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card">
                    <div class="card-header">
                        Brochures
                    </div>
                    <img src={img6} class="card-img-top" alt="..." />
                    <div class="card-body">
                       <p>Unlock the benefits of Planon IoT</p>
                       <p>Read more</p> 
                    </div>
                    </div>
                </div>

</div>
        </section>
    </div>
  </div>
  </>
}
