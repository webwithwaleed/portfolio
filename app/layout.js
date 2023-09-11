"use client";

import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { useEffect, useState } from 'react'
import { delay, motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi'


const metadata = {
  title: 'Webwithwaleed',
  description: 'We turn your long form videos into viral short fomr content',
}

export default function RootLayout({ children }) {

  const [mousePosition, setmousePosition] = useState({
    x: 0,
    y: 0
  })

  const [mouse, setmouse] = useState("default")

  useEffect(() => {
    const mouseMove = (e) => {
      setmousePosition({
        x: e.clientX,
        y: e.clientY
      })

      const element = document.elementFromPoint(e.clientX, e.clientY);

      if (element) {
        if (element.tagName.toLowerCase() === 'html' || element.tagName.toLowerCase() === 'body' || element.tagName.toLowerCase() === 'div' || element.tagName.toLowerCase() === 'ul') {
          setmouse("default")
        } else if (element.tagName.toLowerCase() === 'a') {
          setmouse("link")
        } else {
          setmouse("big")
        }
      } else {
        setmouse("default")
      }

    }





    window.addEventListener("mousemove", mouseMove)

    return () => {
      window.removeEventListener("mousemove", mouseMove)
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 12,
      y: mousePosition.y - 12
    },
    big: {
      x: mousePosition.x - 35,
      y: mousePosition.y - 35,
      width: "70px",
      height: "70px",
      mixBlendMode: "difference"
    },
    link: {
      x: mousePosition.x - 35,
      y: mousePosition.y - 35,
      width: "70px",
      height: "70px"
    },
    cursor2: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20
    }
  }

  return (
    <html lang="en">
      <body>
        <div className="nav"><Header /></div>
        

        {children}

        <Footer />
        <motion.div
          variants={variants}
          animate={mouse}
          transition={{
            type: "spring",
      damping: 4,
      stiffness: 50,
      restDelta: 0.001,
      bounce: 0,
      mass: 0.2
          }}
          className='cursor'>
          <FiArrowUpRight className='link-btn' style={{ opacity: mouse == "link" ? 1 : 0, fontSize: mouse == "link" ? '35px' : "0px" }} />

        </motion.div>

        <motion.div
  variants={variants}
  animate={{
    ...variants.cursor2,
    transition: {
      type: "spring",
      damping: 4,
      stiffness: 50,
      restDelta: 0.001,
      bounce: 0,
      mass: 0.2
    }
  }}
  className='cursor cursor_2'
/>
        
      </body>
    </html>
  )
}
