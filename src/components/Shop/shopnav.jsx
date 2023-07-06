import Link from 'next/dist/client/link'
import React from 'react'

const Shopnav = () => {
  return (
    <ul>
    <li>
        <Link href={`/shop`}><a>SALE</a><span>(37)</span></Link>
      </li>
    </ul>
  )
}

export default Shopnav