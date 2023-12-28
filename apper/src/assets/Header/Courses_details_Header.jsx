// import { Grid } from '@mui/material'
// import React from 'react'
// import Header_Utils_Mappers from '../UTILS/Header_Utils_Mappers'
// const Items=[
//   {
//     id:1,
//     titles:"Courses"
//   },
//   {
//     id:2,
//     titles:"All Exams"
//   },
//   {
//     id:3,
//     titles:"Current-Affairs"
//   },
//   {
//     id:4,
//     titles:"Offline Admission"
//   },
//   {
//     id:5,
//     titles:"Contact Us"
//   },
// ];
// const Courses_details_Header = () => {
//   return (
//     <>
//     {console.log(typeof(Items))}
//    <Grid container >
//     <Header_Utils_Mappers props={Items} />
//     </Grid>
//     </>
//   )
// }

// export default Courses_details_Header
import { Grid } from '@mui/material';
import React from 'react';
import Header_Utils_Mappers from '../UTILS/Header_Utils_Mappers';

const Items = [
  {
    id: 1,
    titles: "Courses"
  },
  {
    id: 2,
    titles: "All Exams"
  },
  {
    id: 3,
    titles: "Current-Affairs"
  },
  {
    id: 4,
    titles: "Offline Admission"
  },
  {
    id: 5,
    titles: "Contact Us"
  },
];

const Courses_details_Header = () => {
  return (
    <>
      
        <Header_Utils_Mappers Items={Items} />
        
    
    </>
  );
}

export default Courses_details_Header;