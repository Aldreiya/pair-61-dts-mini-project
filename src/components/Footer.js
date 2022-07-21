import * as React from 'react';
import { Box } from "@mui/material";
import Typography from '@mui/material/Typography';


const Footer = () => {

  return (
    <Box sx={{
        bottom: 0,
        bgcolor: '#434343',
        height: 50,
        color: 'white',
        textAlign: 'center',
        mt:5,
        p:4
    }}>
        <Typography>Copyright &copy; Aldrei 2022</Typography>
    </Box>
  );
}

export default Footer;