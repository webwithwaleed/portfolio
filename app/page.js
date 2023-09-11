"use client";

import Image from 'next/image'
import styles from './page.module.css'
import Headline from '../components/headline'
import Thisyousection from '@/components/thisyousection';
import Services from '@/components/services';
import Recentwork from '@/components/recentwork'
import Howitworks from '@/components/howitworks'
import Pricing from '@/components/Pricing'


export default function Home() {



  return (
    <>
      <div className='headline'>
        <Headline />
      </div>
      <div className='headline'>
        <Thisyousection />
      </div>
      <div className="headline ser">
        <Services />
      </div>
      <div className="headline2">
        <Recentwork />
      </div>
      <div className=" headline2">
        <Howitworks />
      </div>
      <div className="headline2 price2">
        <Pricing />
      </div>
    </>
  )
}
