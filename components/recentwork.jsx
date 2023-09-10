import React from 'react'
import { motion } from 'framer-motion'

function recentwork() {
  return (
    <>
    <div id='work'>
    <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >Our <span className='highlight'>Recent Work</span></motion.h3>
        <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4  }}
        className='title' >Exclusively delivering top-tier editing and animations.</motion.p>
    </div>
    <div className='worklist'>
        <motion.div
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4  }}
        className="video2">
        <iframe className='frame' width="100%" height="100%" src="https://www.youtube.com/embed/2k7cAp5fegM"></iframe>
        </motion.div>
    </div>
    </>
  )
}

export default recentwork