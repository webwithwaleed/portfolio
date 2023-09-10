import React from 'react'
import { motion } from 'framer-motion'

function Pricing() {
  return (
   <>
   <div id='pricing'>
       <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >Simple And Transparent <span className="highlight">Pricing</span> 😇</motion.h3>
        <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4  }}
        className='title' >We have three options for you depending on your video needs</motion.p>
    </div>
    <div className="tables">
        <div className="table">
            <p className='package_name'>Getting Started</p>
            <p className='price'>$399/mo</p>
            <p>Up to 15 videos per month</p>
            {/* <p className='tag'>Ideal for social media content</p> */}
            <ul>
                <li className='features' data-icon='✅'>
                15 videos under 90 seconds​
                </li>
                <li className='features' data-icon='✅'>
                Trendy caption styles
                </li>
                <li className='features' data-icon='✅'>
                Unlimited revisions
                </li>
                <li className='features' data-icon='✅'>
                Pause or cancel anytime
                </li>
                <li className='features' data-icon='✅'>
                24-48 hour delivery
                </li>
            </ul>
            <a className='contact' href='https://api.whatsapp.com/send?phone=923438981286&text=Hey%20Waleed%20%F0%9F%91%8B%2C%20I%27m%20interested%20in%20your%20starter%20package.%20Could%20you%20please%20guide%20me%20through%20the%20next%20steps%3F' style={{width:'100%', textAlign:"center", marginTop:"10px"}}>Get Started</a>
        </div>
        <div className="table recommended">
            <p className='package_name'>Pro Package</p>
            <p className='price'>$499/mo</p>
            <p>Up to 30 videos per month</p>
            {/* <p className='tag'>Ideal for various social medias</p> */}
            <ul>
            <li className='features' data-icon='✅'>
                30 videos under 90 seconds​
                </li>
                <li className='features' data-icon='✅'>
                Trendy caption styles
                </li>
                <li className='features' data-icon='✅'>
                Two request at a time
                </li>
                <li className='features' data-icon='✅'>
                Eye-catching animations
                </li>
                <li className='features' data-icon='✅'>
                Unlimited revisions
                </li>
                <li className='features' data-icon='✅'>
                Pause or cancel anytime
                </li>
                <li className='features' data-icon='✅'>
                24-48 hour delivery
                </li>
            </ul>
            <a className='contact' href='https://api.whatsapp.com/send?phone=923438981286&text=Hey%20Waleed%20%F0%9F%91%8B%2C%20I%27m%20interested%20in%20your%20pro%20package.%20Could%20you%20please%20guide%20me%20through%20the%20next%20steps%3F' style={{width:'100%', textAlign:"center", marginTop:"10px"}}>Get Started</a>
        </div>
        <div className="table">
            <p className='package_name'>Custom Package</p>
            <p className='price'>$???/mo</p>
            <p>Schedule a call with us, and together, we can explore your needs and determine if we are the right fit to work together. </p>
            {/* <p className='tag'>1 Hi-Fi & 2 Low-Fi Videos</p> */}
            <ul>
                <li className='features' data-icon='👉'>
                30 mins free zoom call​
                </li>
                {/* <li className='features' data-icon=''>
                Elite editor + animator
                </li> */}
            </ul>
            <a className='contact' href='https://api.whatsapp.com/send?phone=923438981286&text=Hey%20Waleed%20%F0%9F%91%8B%20Are%20you%20available%20for%20a%20quick%20call%3F' style={{width:'100%', textAlign:"center", marginTop:"10px"}}>Book A Call</a>
        </div>
    </div>
   </>
  )
}

export default Pricing