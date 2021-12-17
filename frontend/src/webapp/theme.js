import { createTheme } from '@mui/material/styles';

//TODO use this https://bareynol.github.io/mui-theme-creator/

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#75A478',
    },
    secondary: {
      main: '#75A478',
    },
    background: {
      default: '#f1f8e9',
    },
  },
  typography: {
    h3: {
      fontFamily: 'Roboto',
      fontWeight: 600,
      lineHeight: 1.29,
      letterSpacing: '0.05em',
    },
  },
});

export default theme;