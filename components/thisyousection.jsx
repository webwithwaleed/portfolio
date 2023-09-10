import React from 'react'
import { motion } from 'framer-motion'

function thisyousection() {
  return (
    <div className='isthisyou' id='thisyou'>
    <motion.h3
    
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >Is This <span className='highlight'>You?</span></motion.h3>
        <ul className='ul'>
          <motion.li initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          data-icon="❌">
          <p>Unsure of how to<span className='highlight'><i><b> leverage short videos </b></i></span>to skyrocket your social media presence?</p>
          </motion.li>
          <motion.li initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          data-icon="❌">
          <p>Want to <span className='highlight'><i><b>stand out with videos</b></i></span>, but tech hurdles holding you back?</p>
          </motion.li>
          <motion.li initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          data-icon="❌">
          <p>Are you frustrated by the endless hours spent editing, leaving you with<span className="highlight"><i><b> less time to focus </b></i></span>on what truly drives your business forward?</p>
          </motion.li>
          <motion.li initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          data-icon="❌">
          <p>Do you want to be seen as the <span className="highlight"><i><b>#1 authority </b></i></span>in your niche?</p>
          </motion.li>
          {/* <motion.li initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          data-icon="❌">
          <p>Want to take advantage of the incredible opportunity offered by video marketing, but lack the know-how or the time to do so?</p>
          </motion.li> */}
        </ul>
        </div>
  )
}

export default thisyousection