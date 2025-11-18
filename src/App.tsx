// 導入必要的依賴
import { Routes, Route } from 'react-router-dom' // 路由相關組件
import { Box, Container } from '@mui/material' // MUI 佈局組件
import Navbar from './components/Navbar' // 導航欄組件
import Footer from './components/Footer' // 頁腳組件
import ScrollToTop from './components/ScrollToTop' // 回到頂部組件
import Press from './pages/Press' // 舞團相關報導頁
import Contact from './pages/Contact' // 聯絡我們頁

// 導入頁面組件
import Home from './pages/Home' // 首頁
import Team from './pages/Team' // 團隊介紹頁
import Members from './pages/Members' // 成員介紹頁
import Gallery from './pages/Gallery' // 照片展示頁
import Videos from './pages/Videos' // 視頻展示頁

/**
 * 應用程序主組件
 * 負責整體佈局和路由配置
 */
const App = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
      }}
    >
      <Navbar />
      <Container component="main" sx={{ flex: 1, py: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />          {/* 首頁路由 */}
          <Route path="/team" element={<Team />} />      {/* 團隊介紹頁路由 */}
          <Route path="/members" element={<Members />} /> {/* 成員介紹頁路由 */}
          <Route path="/gallery" element={<Gallery />} /> {/* 照片展示頁路由 */}
          <Route path="/videos" element={<Videos />} />   {/* 視頻展示頁路由 */}
          <Route path="/press" element={<Press />} />     {/* 舞團相關報導頁路由 */}
          <Route path="/contact" element={<Contact />} /> {/* 聯絡我們頁路由 */}
        </Routes>
      </Container>
      <ScrollToTop />
      <Footer />
    </Box>
  )
}

export default App