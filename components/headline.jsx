import React from 'react'
import { motion } from 'framer-motion'

function headline() {
  return (
    <div id='home' className="headline">
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
      </div>
  )
}

export default headline