import { Deals } from 'components/Deals/Deals'
import GetSolution from 'components/landing/GetSolution/GetSolution'
import { ContactGrid } from 'components/landing/contactGrid/ContactGrid'
import { Layout } from 'layout/Layout'
import React from 'react'

const deal = () => {
  return (
    <Layout>
        <Deals/>
        <ContactGrid/>
        <GetSolution/>
    </Layout>
  )
}

export default deal