import * as React from 'react';
import { AppBar, Box, Container, Toolbar } from "@mui/material";
import Typography from '@mui/material/Typography';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import UserLog from '../components/UserLog';


const Navbar = () => {

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LiveTvIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Movie
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            { }
          </Box>

          <Box sx={{ display: 'block' }}>
            <UserLog />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;