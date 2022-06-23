import React, { useEffect } from 'react'
import Head from 'next/head'
import Nav from '../components/nav/nav'
import Label from '../components/label/label'
import ServiceLabel from '@components/serviceLabel/serviceLabel'
import Carousel from '@components/carousel/caeousel'
import ShopLinks from '@components/shoplinks/shoplinks'

export default function Home() {
  return (
    <div className='bg-white'>
      <Head>
        <title>Home Page</title>
      </Head>

      <div>
        <Label />
      </div>
      
      <div>
        <Nav />
      </div>
      
      <div>
        <ServiceLabel />
      </div>
      
      <div>
        <Carousel />
      </div>

      <div>
        <ShopLinks />
      </div>
    </div>
  )
}