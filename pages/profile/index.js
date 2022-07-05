import React from 'react'
import Head from 'next/head'
import Label from '@components/label/label'
import Nav from '@components/nav/nav'
import ServiceLabel from '@components/serviceLabel/serviceLabel'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

export default function Profile() {
  return(
    <div>
      <Head>
        <title>My Eden Account</title>
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

      <div className="w-[90%] max-w-[85rem] 2xl:max-w-[90rem] mx-auto mt-5">
        <Tabs className="border rounded-2xl shadow-md border-[#EFEFEF]">
          <TabList className="border-b border-[#EFEFEF] flex text-[#4A5568]">
            <Tab className="w-1/2 rounded-tl-2xl cursor-pointer hover:bg-[#F5F5F7] border-[#EFEFEF] text-center border-r font-semibold focus:bg-[#F5F5F7] active:bg-[#F5F5F7] py-2 xl:py-3 xl:text-lg">
              My Account
            </Tab>

            <Tab className="w-1/2 cursor-pointer font-semibold focus:bg-[#F5F5F7] active:bg-[#F5F5F7] py-2 xl:py-3 xl:text-lg rounded-tr-2xl hover:bg-[#F5F5F7] text-center">
              Orders
            </Tab>
          </TabList>

          <TabPanel>
            {/*  */}
          </TabPanel>

          <TabPanel>
            {/*  */}
          </TabPanel>
        </Tabs>
      </div>
    </div>
  )
}