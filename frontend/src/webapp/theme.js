import { createTheme } from '@mui/material/styles';

//TODO use this https://bareynol.github.io/mui-theme-creator/

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#75A478',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#f1f8e9',
    },
  },
});

export default theme;