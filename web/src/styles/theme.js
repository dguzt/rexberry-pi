import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#D81B60',
      mainLight: '#FF5C8D',
      mainDark: '#A00037',
    },
    secondary: {
      main: '#263238',
      mainLight: '#4F5B62',
      mainDark: '#000A12',
    },
    error: {
      main: '#B00020',
    },
    background: {
      default: '#263238',
      paper: '#263238',
    }
  },
});

export default theme;
