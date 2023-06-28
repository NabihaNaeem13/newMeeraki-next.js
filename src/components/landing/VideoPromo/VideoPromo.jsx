import React from 'react'
import { useState } from 'react';

export const VideoPromo = () => {
  return (
    <section className='latest-news'>
    <div className='wrapper'>
    <video style={{width:"100%"}} className='HomeVideo' autoPlay muted loop  controls src="/assets/img/VID-20230331-WA0018.mp4" type="video/mp4" alt="apple"/>
    </div>
    </section>
  )
}
