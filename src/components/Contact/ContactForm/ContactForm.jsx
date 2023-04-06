import { useState } from "react";
import SelectedOption from "./SelectedOption";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { InputLabel } from "@material-ui/core";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export const ContactFrom = () => {
  const [country, setCountry] = useState(" ");
  const handleChangeCountry = (event) => {
      setCountry(event.target.value);
    };

  return (
    <>
      {/* <!-- BEGIN DISCOUNT --> */}
      <div
        className='discount discount-contacts js-img'
      >
      <div className='wrapper'>
      <div className="discount-info">
             <span className='main-text'>contact us</span>
             <p>
              First Floor, 100 Alpha House, Borough High Street, London SE1 1LB United Kingdom 
            </p>
            <p>
              We are a 5-minute walk from both London Bridge and Borough tube station.
            </p>
            <p>
             Monday to Friday 6pm-8pm & WEEKENDS ONLY
            </p>
            <p>
            NOTE:
             Please use the side entrance on union street. When you reach the metal gate, please call 0207 509 6415 to let us know you've arrived, and we'll come to get you.  
            </p>
            <ul>
              <li className="mt-2 mb-2"><img src="/DermaestheticsAssests/1 Homepage/Footer/phone.svg" style={{width:"2rem",height:"2rem"}}/><a className="mx-4" style={{color:"#999999",fontSize:"1rem"}}>0207 509 6415</a></li>
              <li className="mt-2 mb-2"><img src="/DermaestheticsAssests/1 Homepage/Footer/email.svg" style={{width:"2rem",height:"2rem"}}/><a className="mx-4" style={{color:"#999999",fontSize:"1rem"}}>info@dermaesthetics.uk</a></li>
              <li className="mt-2 mb-2"><img src="/DermaestheticsAssests/1 Homepage/Footer/email.svg" style={{width:"2rem",height:"2rem"}}/><a className="mx-4" style={{color:"#999999",fontSize:"1rem"}}>bookingse1@dermaesthetics.uk</a></li>
            </ul>
           </div>
      </div>
        <div className='wrapper' style={{backgroundColor:"#efcccc"}}>
          <div className='discount-info'>
            <span className='main-text mt-4' style={{textAlign:"center"}}>leave a message</span>
            <p style={{textAlign:"center"}}>
              Your email address will not be published.
            </p>
            <form>
              <div className='box-field'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='First Name'
                />
                <input
                  type='text'
                  className='form-control'
                  placeholder='Last Name'
                />
              </div>
              <div className='box-field'>
              <FormControl fullWidth className='form-control'>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={country}
          label="Select Country"
          onChange={handleChangeCountry}
        >
          <MenuItem value={"Germany"}>Germany</MenuItem>
          <MenuItem value={"Pakistan"}>Pakistan</MenuItem>
          <MenuItem value={"Norway"}>Norway</MenuItem>
          <MenuItem value={"United Kingdom"}>United Kingdom</MenuItem>
          <MenuItem value={"Norway"}>Norway</MenuItem>
          <MenuItem value={"New Zealand"}>New Zealand</MenuItem>
          <MenuItem value={"United Kingdom"}>United Kingdom</MenuItem>
          <MenuItem value={"United Kingdom"}>United Kingdom</MenuItem>
          <MenuItem value={"United Kingdom"}>United Kingdom</MenuItem>
        </Select>
      </FormControl>
                <input
                  type='date'
                  className='form-control'
                />
              </div>
              <div className='box-field'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Phone'
                />
                <input
                  type='email'
                  className='form-control'
                  placeholder='Email'
                />
              </div>
              <div className='box-field box-field__textarea'>
                <textarea
                  className='form-control'
                  placeholder='Enter your message'
                ></textarea>
              </div>
              <div className='box-field'>
              <FormControlLabel control={<Checkbox  />} label="I agree terms & condition" />
              </div>
              <button type='submit' className='btn mb-5'>
                send
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* <!-- DISCOUNT EOF   --> */}
    </>
  );
};
