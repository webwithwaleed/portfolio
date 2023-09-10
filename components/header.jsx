"use client";

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from "framer-motion"
import { usePathname } from 'next/navigation'


function header() {
        const pathname = usePathname()

        return (
                <header>
                        {/* <div className='header'>
                                <motion.h3
                                        initial={{ opacity: 0, y: -20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                >Hey <span id='hi'>👋</span> ! Welcome To <span className='highlight'>My Portfolio</span></motion.h3>
                        </div> */}
                        <div className='menu'>
                                <ul>
                                        <motion.li
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.5 }}
                                        ><Link className={pathname == "/" ? "active" : ''} href={"#home"}>Home</Link></motion.li>
                                        <motion.li
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.5}}
                                        ><Link className={pathname == "/mywork" ? "active" : ''} href={"#work"}>My Work</Link></motion.li>
                                        <motion.li
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.5}}
                                        ><Link className={pathname == "/about" ? "active" : ''} href={"#pricing"}>Pricing</Link></motion.li>
                                        <motion.li
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.5}}
                                        ><Link className={`${pathname == "/contact" ? "active" : ''} contact`} href={"https://api.whatsapp.com/send?phone=923438981286&text=Hey%20Waleed%20%F0%9F%91%8B%20Are%20you%20available%20for%20a%20quick%20chat%3F"}>Contact</Link></motion.li>
                                </ul>
                        </div>
                </header>
        )
}

export default header