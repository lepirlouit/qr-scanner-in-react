import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { createTheme, ThemeProvider } from '@mui/material/styles';
const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#eb002930"
    },
    secondary: {
      main: "#0000ff"
    }
  }
});

import './index.css'
import { Box } from '@mui/material';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <ThemeProvider theme={defaultTheme}>

      <Box sx={{ display: 'flex' }}>
        <App />
      </Box>
    </ThemeProvider>
  </React.StrictMode>,
)
