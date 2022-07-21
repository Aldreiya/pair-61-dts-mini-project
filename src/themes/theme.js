import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#7ec8e3',
    },
    secondary: {
      main: '#808080',
    },
    background: {
      default: '#252323',
      paper: '#141414'
    },
    text: {
      primary: '#fff',
      secondary: '#141414',
    },
    
  input: {
    color: "#2EFF22"
  }
  },
});

export default theme;
