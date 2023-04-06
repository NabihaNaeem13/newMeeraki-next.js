import React from 'react'
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const SubForm = () => {
  return (
    <form className='form-container'>
    <div id="form-control-row">
    <div className='form-control'>
    <input type="text" name="fullname" placeholder='Enter Your Name'/>
    </div>
    <div className='form-control'>
    <input type="email" name="email" placeholder='Enter Your Email'/>
    </div>
    </div>
    <div id="form-check-row">
    <Box sx={{ flexGrow: 1 }} id="form-check-row-box">
    <p id="form-control-p">Which area of treatments are you interested in ?</p>
      <Grid container spacing={3}>
        <Grid item xs={6}>
        <FormGroup>
      <FormControlLabel control={<Checkbox  />} label="Label" />
      <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
    </FormGroup>
        </Grid>
        <Grid item xs={6}>
        <FormGroup>
      <FormControlLabel control={<Checkbox  />} label="Label" />
      <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
    </FormGroup>
        </Grid>
      </Grid>
    </Box>
</div>

    </form>
  )
}

export default SubForm