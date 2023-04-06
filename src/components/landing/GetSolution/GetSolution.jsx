import React from 'react'
import SubForm from './form/SubForm';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const GetSolution = () => {
  return (
    <div className='container-fluid mt-4' id="SolutionContainer">
       <div className='row text-center SolutionContainer-title'>
         <h1>Get your special offers</h1>
         <p className='mb-5'>Get our latest special offers and news by email</p>
       </div>
       <div class="container px-5 subformcontainer">
  <div class="row gx-5">
    <div class="col">
        <input type="text" className='SolutionContainer-title-input' placeholder='Enter Your Name'/>
    </div>
    <div class="col">
    <input type="email" className='SolutionContainer-title-input' placeholder='Enter Your Email'/>
    </div>
  </div>
  <div className="row gx-5">
    <h5 className='m-5 text-center' style={{fontSize: "1.6rem", color: "#414141",fontWeight: "800"}}>Which area of treatments are you interested in ?</h5>
    <div className="col offset-3"> 
    <FormGroup>
      <FormControlLabel control={<Checkbox/>} label="Laser Hair Removal" />
      <FormControlLabel control={<Checkbox/>} label="Hair Rejuvenation" />
      <FormControlLabel control={<Checkbox/>} label="Fat Reduction" />
    </FormGroup>
    </div>
    <div className="col">
    <FormGroup>
      <FormControlLabel control={<Checkbox/>} label="Facial Treatments"/>
      <FormControlLabel control={<Checkbox/>} label="Body Treatments" />
      <FormControlLabel control={<Checkbox/>} label="Injectables" />
    </FormGroup>
    </div>
  </div>
  <div className="row gx-5">
  <div className='col text-center mt-3'>
  <a id="iHave"><FormControlLabel control={<Checkbox/>}/>I have read and agree to the terms & conditions*</a>
  </div>
  </div>
  <div className="row m-5">
  <p className='text-center'><button className='btn'>Submit</button></p>
  </div>
</div>
      
    </div>
  )
}

export default GetSolution