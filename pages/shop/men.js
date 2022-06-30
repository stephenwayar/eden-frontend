import React from 'react'
import Head from 'next/head'
import Label from '@components/label/label'
import Nav from '@components/nav/nav'
import ServiceLabel from '@components/serviceLabel/serviceLabel'
import MenNav from '@components/menNav/menNav'
import MenClothing from '@components/menClothing/menClothing'

export default function Men() {
  return(
    <div>
      <div>
        <Head>
          <title>Shop | Men</title>
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
          <MenNav />
        </div>

        <div>
          <MenClothing />
        </div>
      </div>
    </div>
  )
}