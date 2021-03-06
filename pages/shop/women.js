import React from 'react'
import Head from 'next/head'
import Label from '@components/label/label'
import Nav from '@components/nav/nav'
import ServiceLabel from '@components/serviceLabel/serviceLabel'

export default function Women() {
  return(
    <div>
      <div>
        <Head>
          <title>Shop | Women</title>
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
      </div>
    </div>
  )
}