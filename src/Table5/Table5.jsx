import React from 'react'
import img6 from '../images/156.jpg'
import img7 from '../images/2151589536.jpg'
import img8 from '../images/glass.jpg'
import img9 from '../images/image-buildings-modern-high.jpg'
import img10 from '../images/5955_fullimage_5955_fullimage_image-pbm-airconditionerselectricfan_3840x3072_3605x4060_1024x819_1977x2227_progr.jpg'

export default function Table5() {
  return <>
      <div className="table5" id='table5'>
    <div className="container py-4">
        <h2>IoT sensor applications to support CRE and FM teams</h2>
        <p>There is a multitude of applications for IoT sensors that support CRE and FM teams:</p>
        <div className="row">
            <div className="col-md-6 my-4">
                <h4>Asset and equipment tracking for accurate inventory management</h4>
                <p>
                Strategically positioned IoT sensors, such as RFID readers, Bluetooth beacons, or GPS trackers, can enable real-time tracking of assets within a building. As assets equipped with tagged identifiers pass by these sensors,
                 their locations are automatically recorded and transmitted to a central management system.
                </p>
                <p>
                This enables accurate and efficient inventory management by providing a real-time inventory status
                 and reducing the risk of loss or misplacement.
                </p>
            </div>
            <div className="col-md-6 my-4">
              <img src={img6} className='w-100 h-100' alt="" />
            </div>

            <div className="col-md-6 my-4">
              <img src={img7} className='w-100 h-100' alt="" />
            </div>

            
            <div className="col-md-6 my-4">
                <h4>Condition monitoring for preventive maintenance</h4>
                <p>
                Temperature, humidity, vibration, pressure, current and voltage sensors can
                 be attached to equipment and infrastructure throughout a building. These data points can be used as specific indicators of asset health and transmitted to a central system or cloud-based platform for storage, processing, and analysis.
                </p>
                <p>
                Facility managers or maintenance personnel can access the real-time data and insights from a centralized dashboard or mobile application,
                 allowing them to monitor asset health and performance regardless of their physical location.
                </p>
            </div>
            
            <div className="col-md-12">
            <p>Through the analysis of collected sensor data, anomaly detection algorithms can identify deviations from typical operating conditions. Unusual trends, patterns, or breaches of thresholds can activate alerts or notifications, notifying relevant personnel of potential issues or equipment failures. This proactive approach enables scheduled maintenance to address potential problems before they lead to costly downtime or breakdowns. This proactive approach enables scheduled maintenance to address potential problems before they lead to costly downtime or breakdowns.</p>
            <p>IoT sensors can integrate with existing asset management systems, enabling seamless data exchange and incorporating condition monitoring data into asset maintenance records. Facility managers can make data-driven decisions, prioritize maintenance tasks, and allocate resources more effectively, ultimately leading to increased operational efficiency and cost savings.</p>
            
            </div>

            <div className="col-md-6 my-4">
                <h4>Water quality assurance for health and safety compliance</h4>
                <p>pH sensors, conductivity sensors, turbidity sensors, and temperature sensors, deployed at key points in a building’s water
                   supply system, can be used to continuously monitor the water quality.</p>
                <p>The collected water quality data can be analyzed using algorithms and machine learning techniques. Deviations from normal levels or predefined thresholds can trigger alerts or notifications, enabling prompt response to potential water quality 
                  issues or Legionella contamination.</p>
                <p>By utilizing IoT sensors for water quality monitoring, CRE and FM professionals can proactively identify and address potential water treatment quality issues, including the detection of Legionella bacteria. Real-time data collection, analysis, and remote monitoring capabilities enable prompt response, preventive maintenance, and efficient water management,
                   ensuring the health and safety of occupants and compliance with regulatory standards.</p>
            </div>
            <div className="col-md-6 my-4">
              <img src={img8} className='w-100 h-100' alt="" />
            </div>

            <div className="col-md-6 my-4">
              <img src={img9} className='w-100 h-100' alt="" />
            </div>
            <div className="col-md-6 my-4">
                <h4>Space planning for better real estate portfolio management</h4>
                <p>
                Occupancy sensors, people counters and people flow sensors can collect data over time to provide valuable insights into space utilization patterns. Analytics derived from occupancy data can help organizations identify underutilized or overbooked rooms, optimize space allocation
                , and make informed decisions on room sizes, amenities, and resource allocation.
                </p>
                <p>
                For example, tracking the flow of people can enable CRE owners to analyze occupant behavior and space usage patterns, while acknowledging privacy limitations.
                </p>
                <p>
                This information may help them identify excess capacity and develop action plans for peak hours, ultimately resulting in more efficient portfolio management.
                </p>
            </div>

            <div className="col-md-6 my-4">
                <h4>Indoor Air Quality (IAQ) monitoring for wellbeing and productivity</h4>
                <p>
                The quality of the air we breathe indoors directly affects our health, comfort, and productivity. Poor IAQ can lead to a range of adverse effects, including respiratory issues,
                 allergies, fatigue, and decreased cognitive function.
                </p>
                <p>
                By utilizing sensors capable of measuring CO2 levels, humidity, particulate matter, and volatile organic compounds, facility managers can proactively monitor IAQ. This proactive approach enables the identification of potential issues at an early stage, allowing for timely interventions, adjustments, and improvements to maintain optimal air quality. Ensuring a healthier and more comfortable indoor environment promotes the well-being
                 and productivity of building occupants.
                </p>
            </div>
            <div className="col-md-6 my-4">
              <img src={img10} className='w-100 h-100' alt="" />
            </div>

        </div>
    </div>
  </div>
  </>
}
