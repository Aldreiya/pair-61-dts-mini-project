import './App.css';

import { Box, ThemeProvider } from '@mui/material';

import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';

const App = () => {
  return (
    <Box>
      <Navbar />
      <Outlet />
      <Footer />
    </Box>
  );
}

export default App;
