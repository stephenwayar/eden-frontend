import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav/nav'
import Label from '../components/label/label'
import ServiceLabel from '@components/serviceLabel/serviceLabel'
import Carousel from '@components/carousel/caeousel'
import ShopLinks from '@components/shoplinks/shoplinks'
import PowerUps from '@components/powerUps/powerUps'
import Footer from '@components/footer/footer'

export default function Home() {
  return (
    <div className='bg-white'>
      <Head>
        <title>Home Page</title>
        <link rel="shortcut icon" href="/assets/images/favicon.png" />
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

      <di>
        <PowerUps />
      </di>

      <di>
        <Footer />
      </di>
    </div>
  )
}