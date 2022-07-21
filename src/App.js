import './App.css';

import { Box, ThemeProvider } from '@mui/material';

import theme from './themes/theme';
import Register from './containers/Register';
import Login from './containers/Login';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';
import MovieList from './containers/MovieList';

const App = () => {
  return (
    <Box>
      <Navbar/>
      <Outlet/>
    </Box>
  );
}

export default App;
