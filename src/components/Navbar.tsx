// 導入必要的依賴
import { useState } from 'react' // React Hooks 用於狀態管理
import { Link as RouterLink } from 'react-router-dom' // 路由鏈接組件，用於頁面導航
import {
  AppBar, // Material-UI 頂部應用欄組件
  Box, // 基礎佈局容器
  Toolbar, // 工具欄容器
  IconButton, // 圖標按鈕組件
  Typography, // 文字排版組件
  Menu, // 下拉菜單組件
  Container, // 內容限寬容器
  Button, // 按鈕組件
  MenuItem // 菜單項組件
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu' // 漢堡菜單圖標

// 定義導航項配置：包含頁面標題和對應的路由路徑
const pages = [
  { title: '首頁', path: '/' },
  { title: '團隊介紹', path: '/team' },
  { title: '成員介紹', path: '/members' },
  { title: '影片展示', path: '/videos' }
]

/**
 * 導航欄組件
 * 功能：
 * 1. 實現響應式設計，在移動端顯示漢堡菜單
 * 2. 提供頁面導航功能
 * 3. 支持品牌標誌展示
 * 4. 自定義樣式和動畫效果
 */
const Navbar = () => {
  // 狀態管理：控制移動端菜單的顯示狀態
  // null 表示菜單關閉，HTMLElement 表示菜單打開並錨定到該元素
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)

  // 處理移動端菜單打開事件
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget) // 將菜單錨定到點擊的元素
  }

  // 處理移動端菜單關閉事件
  const handleCloseNavMenu = () => {
    setAnchorElNav(null) // 清除菜單錨點，關閉菜單
  }

  return (
    // AppBar：頂部導航欄容器，使用毛玻璃效果和柔和陰影
    <AppBar position="sticky" sx={{ 
      background: 'rgba(255, 255, 255, 0.8)', // 半透明背景
      backdropFilter: 'blur(10px)', // 背景模糊效果
      boxShadow: '0 4px 30px rgba(229, 178, 202, 0.1)' // 柔和陰影
    }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* 桌面端品牌標誌 */}
          <Typography
            variant="h6"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' }, // 在移動端隱藏
              fontWeight: 700,
              background: 'linear-gradient(45deg,rgb(230, 88, 154) 30%,rgb(173, 129, 225) 90%)', // 漸變文字效果
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textDecoration: 'none'
            }}
          >
            Popsy
          </Typography>

          {/* 移動端菜單區域 */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            {/* 漢堡菜單按鈕 */}
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{
                color: '#e5b2ca',
                '&:hover': {
                  background: 'rgba(229, 178, 202, 0.1)'
                }
              }}
            >
              <MenuIcon />
            </IconButton>
            {/* 移動端下拉菜單 */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              {/* 移動端菜單項 */}
              {pages.map((page) => (
                <MenuItem
                  key={page.path}
                  onClick={handleCloseNavMenu}
                  component={RouterLink}
                  to={page.path}
                >
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* 移動端品牌標誌 */}
          <Typography
            variant="h5"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' }, // 在桌面端隱藏
              flexGrow: 1,
              fontWeight: 700,
              background: 'linear-gradient(45deg, #e5b2ca 30%, #b8a9c9 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textDecoration: 'none'
            }}
          >
            POPSY
          </Typography>

          {/* 桌面端導航菜單 */}
          <Box sx={{ 
            flexGrow: 1, 
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'flex-end'  // 將導航項目靠右對齊
          }}>
            {/* 桌面端導航按鈕 */}
            {pages.map((page) => (
              <Button
                key={page.path}
                component={RouterLink}
                to={page.path}
                sx={{ 
                  my: 2, 
                  color: 'purple', 
                  display: 'block',
                  mx: 1,
                  position: 'relative',
                  // 下劃線動畫效果
                  '&:after': {
                    content: '""',
                    position: 'absolute',
                    width: '0',
                    height: '2px',
                    bottom: 0,
                    left: '50%',
                    background: 'linear-gradient(45deg, #e5b2ca 30%, #b8a9c9 90%)',
                    transition: 'all 0.3s ease-in-out',
                    transform: 'translateX(-50%)'
                  },
                  '&:hover': {
                    color: '#333333',
                    '&:after': {
                      width: '100%' // 懸停時顯示下劃線
                    }
                  }
                }}
              >
                {page.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar