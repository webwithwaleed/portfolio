import React from 'react'
import { motion } from 'framer-motion'
import Img1 from '../pics/feedback/File 1.png'
import Img2 from '../pics/feedback/File 7.png'
import Img3 from '../pics/feedback/File 8.png'

function headline() {
  return (
    <div id='home' className="box">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        ><span className='highlight'>We Turn Your Long Form Videos</span> Into Viral Short Form Content 🔥</motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5}}
        >Our team will elevate your brand with our custom animations and storytelling approach.</motion.p>
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5}}
          href="#thisyou" className='contact' style={{ margin: '20px 0px' }}>Get Started</motion.a>

          <motion.img
          initial={{ opacity: 0, y: 20, rotate: -15 }}
          whileInView={{ opacity: 1, y: 0, rotate: -15}}
          transition={{ duration: 0.8, delay: 0.5}}
          src={Img3.src} className='float floatleft' alt="" />

<motion.img
          initial={{ opacity: 0, y: 20, rotate: 15 }}
          whileInView={{ opacity: 1, y: 0, rotate: 15}}
          transition={{ duration: 0.8, delay: 0.4}}
          src={Img2.src} className='float floatright' alt="" />
      
      <motion.img
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0}}
          transition={{ duration: 0.8, delay: 0.3}}
          src={Img1.src}  className='float' alt="" />

      
      
      
      </div>

      
  )
}

export default headline