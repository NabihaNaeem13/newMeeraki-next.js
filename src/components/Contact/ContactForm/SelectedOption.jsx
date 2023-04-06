import React from 'react'
import { useState } from 'react'

const SelectedOption = ({options,placeholder="",onChange,selectedKey,open,setOpen}) => {
    const [inputValue,setInputValue]=useState();

  return (
    <div className='dropdown-container'>
        <div className='input-form-container'>
            <input type="text" value={inputValue} placeholder={placeholder} onChange={(e)=>setInputValue(e.target.value)}/>
        </div>
        <div className='input-arrow-container'>
            <i className='input-arrow'></i>
        </div>
    </div>
  )
}

export default SelectedOption