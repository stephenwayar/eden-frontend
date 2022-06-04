import React, { useEffect } from 'react'
import Head from 'next/head'
import Nav from '../components/nav/nav'

export default function Home() {

  return (
    <React.Fragment>
      <Head>
        <title>Eden | Home</title>
      </Head>
      <Nav />
    </React.Fragment>
  )
}