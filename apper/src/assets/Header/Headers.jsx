import React from 'react'
import {Box,Button, Grid} from "@mui/material";
import Logo from './Logo.jsx';
import Courses_details_Header from './Courses_details_Header.jsx';
import Personnal_details_Header from './Personnal_details_Header.jsx';
const Headers = () => {
  return (
   <>
   <Box sx={{bgcolor:'#414141',color:'white'}}>
   <Grid container spacing={1}>
    <Grid item xs={1}> <Logo/></Grid>
    <Grid item xs={9}> <Courses_details_Header/></Grid>
    <Grid item xs={2}> <Personnal_details_Header/></Grid>
     
   </Grid>  
   </Box>
   </>
  )
}

export default Headers;
