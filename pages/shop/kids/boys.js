import React from 'react'
import Head from 'next/head'
import Label from '@components/label/label'
import Nav from '@components/nav/nav'
import ServiceLabel from '@components/serviceLabel/serviceLabel'

export default function Boys() {
  return(
    <div>
      <div>
        <Head>
          <title>Kids | Boys</title>
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

        <div className="text-3xl text-[#4A5568] text-center p-10 font-bold">KIDS-BOYS PAGE</div>
      </div>
    </div>
  )
}