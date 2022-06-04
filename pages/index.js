import React, { useEffect } from 'react'
import Head from 'next/head'
import Nav from '../components/nav/nav'
import Label from '../components/label/label'

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Home Page</title>
      </Head>

      <Label />

      <Nav />
    </React.Fragment>
  )
}