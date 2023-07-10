import React from 'react'
import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '70%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
};

const styleFram={
  left: '50%',
  top: '50%',
  position: 'absolute',
  transform: 'translate(-50%, -50%)',
}

export const SizeModel = ({category}) => {
    console.log("category",category);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const image=()=>{
        if(category==="New Arrivals"||category==="Unstitched"||category==="Sale"){
            return "/assets/img/meerakisizechart.jpg"
        }
        else if(category==="Formal Edit 22"||category==="Basics"||category==="Winter Wear"){
            return "/assets/img/newarrival-sizechart1.jpg"
        }
        else if(category==="Festive Pret"){
            return "/assets/img/SIZE CHART (MEERAKI) with Logo.pdf"
        }
    }
  return (
    <>
    <button className='btn btn-icon' onClick={handleOpen}>Size Chart</button>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{overflowY:"scroll"}}
      >
          {category==="New Arrivals"||category==="Unstitched"||category==="Sale"||category==="Formal Edit 22"||category==="Basics"||category==="Winter Wear"?<Box sx={style}><img src={image()} alt='category'/></Box>:<Box sx={styleFram}><iframe src={image()} width={500} height={600}></iframe></Box>}
          
      </Modal>
</>
  )
}
