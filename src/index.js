import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import "./index.css"
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { deepPurple, amber} from '@material-ui/core/colors'

const mainTheme = createTheme({
  palette: {
    primary: {
     main: amber[800],
    },
    secondary: {
      main: deepPurple[500],
    },
  },
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={mainTheme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)