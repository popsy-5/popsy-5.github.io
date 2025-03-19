import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from './theme'

// 獲取 base 路徑，與 vite.config.ts 中的配置保持一致
const basename = import.meta.env.DEV ? '/' : '/popsy-5.github.io/'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router basename={basename}>
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>
)