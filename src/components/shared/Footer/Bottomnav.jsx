import React, { useContext } from 'react'
import { FaList, FaHeart, FaHome, FaUserCircle } from 'react-icons/fa';
import Link from 'next/link';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import { CartContext } from 'pages/_app';
import { RiLogoutCircleRLine } from 'react-icons/ri';



export const Bottomnav = () => {
  const { cart,wishlist,user,Logout} = useContext(CartContext);
  return (
      <div className='bottom_navmobile'>
      <ul className='bottom_navmobile_ul'>
        <li><Link href="/"><FaHome className='icon'/></Link></li>
        <li><Link href="/subcategory/Ready to Wear"><FaList className='icon'/></Link></li>
        <li><Link href="/wishlist">
        <Stack spacing={4} direction="row" sx={{ color: 'action.active' }}>
        {wishlist && wishlist.length===0?<FaHeart className='icon'/>:<Badge color="secondary" badgeContent={wishlist.length} showZero>
        <FaHeart className='icon'/>
      </Badge>}
      </Stack>
      </Link></li>
      <li><Link href="/cart">
        <Stack spacing={4} direction="row" sx={{ color: 'action.active' }}>
        {cart && cart.length===0?<i className='icon-cart icon'></i>:<Badge color="secondary" badgeContent={cart.length} showZero>
        <i className='icon-cart icon'></i>
      </Badge>}
      </Stack>
      </Link></li>
      <li>{!user.value?<Link href="/login"><FaUserCircle className='icon'/></Link>:<Link href="/profile"><FaUserCircle className='icon'/></Link>}</li>
      </ul>
    </div>
  )
}

/*{!user.value?<Link href="/login"><FaUserCircle className='icon'/></Link>:<Link href="/login"><RiLogoutCircleRLine className='icon'/></Link>} */