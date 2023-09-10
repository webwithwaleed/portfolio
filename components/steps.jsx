import React from 'react'
import { motion } from 'framer-motion'

function steps(props) {
  return (
    <motion.div
    initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4  }}
    className='service video steps'>
            <img className='logo' width="60px" style={{marginBottom:"10px"}} src={props.img} />
            <p style={{marginBottom:"20px", fontSize: "20px"}}><b>{props.title}</b></p>
            <p>{props.desc}</p>
    </motion.div>
  )
}

export default steps