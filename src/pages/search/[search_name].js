import axios from 'axios';
import { SearchProductDetails } from 'components/Product/ProductDetails/SearchProductDetails';
import { Layout } from 'layout/Layout';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const Search_name = () => {


  return (
    <>
      <Layout>
      <div style={{marginTop:"5rem"}}>
      <SearchProductDetails/>
      </div>
      </Layout>
    </>
  )
}

export default Search_name