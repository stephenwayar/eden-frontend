import React from 'react'
import Head from 'next/head'
import Label from '@components/label/label'
import Nav from '@components/nav/nav'
import ServiceLabel from '@components/serviceLabel/serviceLabel'
import CategoryLinks from '@components/categoryLinks/categoryLinks'
import Footer from '@components/footer/footer'

export default function Shop() {
  return(
    <div>
      <div>
        <Head>
          <title>Shop</title>
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
          <CategoryLinks />
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </div>
  )
}