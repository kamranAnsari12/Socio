// import { Grid } from '@mui/material';
// import React from 'react';


// const Header_Utils_Mappers = (Items) => {
//   //  const temp=Items;
//   return (
    
//     <>
//     <div>
   
//     {Items.map(data=>(<Grid key={data.id}>{data.titles}</Grid>))}
//     </div>
    
//     </>
//   );
// };

// export default Header_Utils_Mappers;
import { Grid } from '@mui/material';
import React from 'react';

const Header_Utils_Mappers = ({Items}) => {
  return (
    <>
      <div>
        {Items.map(data => (
          <Grid key={data.id}>{data.titles}</Grid>
        ))}
      </div>
    </>
  );
};

export default Header_Utils_Mappers;