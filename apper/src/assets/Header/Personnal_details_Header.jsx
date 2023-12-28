import { Grid } from '@mui/material';
import React from 'react'
import Header_Utils_Mappers from '../UTILS/Header_Utils_Mappers';
const details=[
  {id:1,
  titles:"+91-9829213213|"},
  
  {id:2,
    titles:"+Go To^"},
    
  {id:3,
    titles:"ENGLISH|"},
];

const Personnal_details_Header = () => {
  return (
    <div>
      <Grid container >
        <Header_Utils_Mappers Items={details} />
        </Grid>
    </div>
  )
}

export default Personnal_details_Header

/*
+91-9829213213|
Go To 
|
ENGLISH 
*/