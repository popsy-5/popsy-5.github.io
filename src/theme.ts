import { createTheme } from '@mui/material/styles'

// 創建自定義主題
const theme = createTheme({
  // 調色板配置
  palette: {
    // 主要顏色
    primary: {
      main: '#e5b2ca',     // 主色調：柔和粉紅色
      light: '#ffd1ff',    // 淺色變體：淡紫粉
      dark: '#DB4D6D'      // 深色變體：深玫瑰紅
    },
    // 次要顏色
    secondary: {
      main: '#b8a9c9',     // 主色調：淡紫色
      light: '#d4cadd',    // 淺色變體：薰衣草紫
      dark: '#967bb6'      // 深色變體：深紫色
    },
    // 背景顏色
    background: {
      default: '#ffd1ff',  // 默認背景：淡紫粉
      paper: '#ffffff'     // 紙張元素背景：純白色
    },
    // 文字顏色
    text: {
      primary: '#333333',   // 主要文字顏色：深灰色
      secondary: '#666666'  // 次要文字顏色：中灰色
    }
  },
  // 排版設置
  typography: {
    fontFamily: '"Kosugi Maru", "M PLUS Rounded 1c", "Varela Round", "Noto Sans TC", sans-serif',
    h1: {
      fontWeight: 700,
      letterSpacing: '0.02em',
      fontFamily: '"Kosugi Maru", "M PLUS Rounded 1c", sans-serif'
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '0.01em',
      fontFamily: '"Kosugi Maru", "M PLUS Rounded 1c", sans-serif'
    },
    h3: {
      fontWeight: 600,
      letterSpacing: '0.01em',
      fontFamily: '"Kosugi Maru", "M PLUS Rounded 1c", sans-serif'
    },
    h4: {
      fontWeight: 600,
      letterSpacing: '0.01em',
      fontFamily: '"Kosugi Maru", "M PLUS Rounded 1c", sans-serif'
    },
    h5: {
      fontWeight: 600,
      letterSpacing: '0.01em',
      fontFamily: '"Kosugi Maru", "M PLUS Rounded 1c", sans-serif'
    },
    h6: {
      fontWeight: 600,
      letterSpacing: '0.01em',
      fontFamily: '"Kosugi Maru", "M PLUS Rounded 1c", sans-serif'
    },
    button: {
      fontFamily: '"M PLUS Rounded 1c", "Kosugi Maru", sans-serif',
      fontWeight: 600,
      letterSpacing: '0.02em'
    },
    body1: {
      fontFamily: '"M PLUS Rounded 1c", "Kosugi Maru", sans-serif',
      fontWeight: 500,
      letterSpacing: '0.01em'
    },
    body2: {
      fontFamily: '"M PLUS Rounded 1c", "Kosugi Maru", sans-serif',
      fontWeight: 500,
      letterSpacing: '0.01em'
    }
  },
  // 組件樣式覆蓋
  components: {
    // 全局基礎樣式
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: 'url("./background.jpg")',  // 修改圖片路徑
          // 或者使用絕對路徑
          // background: 'url("http://localhost:3000/background.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          minHeight: '100vh',
          position: 'relative'
        }
      }
    },
    // 按鈕組件樣式
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          padding: '12px 28px',
          fontSize: '1rem',
          textTransform: 'none',
          background: 'linear-gradient(45deg, rgba(229,178,202,0.9) 30%, rgba(184,169,201,0.9) 90%)',
          backdropFilter: 'blur(8px)',
          color: '#ffffff',
          border: '1px solid rgba(255,255,255,0.3)',
          boxShadow: '0 4px 20px rgba(229,178,202,0.4)',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-3px)',
            background: 'linear-gradient(45deg, rgba(255,209,255,0.9) 30%, rgba(212,202,221,0.9) 90%)',
            boxShadow: '0 8px 25px rgba(229,178,202,0.6)'
          }
        }
      }
    },
    // 紙張組件樣式
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          background: 'rgba(255,255,255,0.7)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255,255,255,0.5)',
          boxShadow: '0 8px 32px rgba(229,178,202,0.2)',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            background: 'rgba(255,255,255,0.8)',
            boxShadow: '0 12px 40px rgba(229,178,202,0.3)'
          }
        }
      }
    },
    // 卡片組件樣式
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          background: 'rgba(255,255,255,0.7)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255,255,255,0.5)',
          boxShadow: '0 8px 32px rgba(229,178,202,0.2)',
          overflow: 'hidden',
          transition: 'all 0.4s ease-in-out',
          '&:hover': {
            transform: 'translateY(-8px) scale(1.02)',
            boxShadow: '0 12px 45px rgba(229,178,202,0.3)'
          }
        }
      }
    },
    // 側邊欄樣式
    MuiDrawer: {
      styleOverrides: {
        root: {
          '& .MuiListItemText-primary': {
            color: '#333333'  // 設置主要文字顏色
          },
          '& .MuiListItemText-secondary': {
            color: '#666666'  // 設置次要文字顏色
          },
          '& .MuiListItemIcon-root': {
            color: '#333333'  // 設置圖標顏色
          }
        }
      }
    }
  }
})

export default theme