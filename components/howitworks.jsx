import React from 'react'
import { motion } from 'framer-motion'
import Steps from '@/components/steps'
import One from '../pics/video-camera.png'
import Two from '../pics/video-files.png'
import Three from '../pics/coffee-cup.png'

function howitworks() {
  return (
    <>
    <div>
       <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >Here's <span className='highlight'>How It Works</span></motion.h3>
        <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4  }}
        className='title' >Simple 3-step process – it’s really that easy.</motion.p>
    </div>
    <div style={{marginTop:'90px'}} className="services" >
      <Steps img={One.src} title='Shoot Your Long Form Content' desc='You can get started with you smartphone and some good natural or indoor lightings, if you need help on how to we are just a text away!'/>
      <Steps img={Two.src} title='Share The Content With Us' desc='Simply upload the video content to Google Drive and drop a link to the folder so we can access it.'/>
      <Steps img={Three.src} title='Let Us Do The Rest' desc='Your job is done, so sit back, sip a coffee and watch us help make it better and publish with best industry practices.'/>
    </div>
    </>
  )
}

export default howitworks