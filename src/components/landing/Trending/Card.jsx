import React from 'react'
import {BsStarFill,BsStarHalf,BsPatchCheckFill} from "react-icons/bs";

const Card = () => {
  return (
    <div className="card-trending-reviewbox">
      <div className="row-card-trending-reviewbox">
        <div className='column-row-card-trending-reviewbox'>
        <BsStarFill className='star-icon'/><BsStarFill className='star-icon'/><BsStarFill className='star-icon'/><BsStarFill className='star-icon'/><BsStarHalf className='star-icon'/>
        </div>
        <div className='column-row-card-trending-reviewbox' style={{textAlign:"right"}}><BsPatchCheckFill id="patchFill"/><span style={{margin:"0 5px",color:"#d1cece",fontSize:"14px",fontWeight:"900"}}>Verified</span></div>
      </div>
      <div className="card-trending-reviewbox-card-body">
        <h5 className="card-trending-reviewbox-card-body-card-title">I had a great experience with Dr.J....</h5>
        <p className="card-trending-reviewbox-card-body-card-text">I had a great experience with Dr.Troken Hirbod. She was very helpful when dehout my experience. Thanks</p>
        <p style={{textAlign:"right",color:"#d1cece",fontSize:"12px"}}><span style={{color:"#000",marginRight:"2px",fontSize:"14px"}}>Ali Rikaby</span>,1 Dec 2022</p>
      </div>
    </div>
  )
}

export default Card