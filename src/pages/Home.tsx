import { Box, Container, Typography, Paper, Dialog, IconButton } from '@mui/material'
import { styled } from '@mui/material/styles'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
// 需要先安装 swiper 包: npm install swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// 英雄區塊樣式組件：全屏高度的背景圖片區域
// 移除 HeroSection 中的 &::before 部分，修改標題樣式
const HeroSection = styled(Box)(() => ({
  height: '100vh',
  width: '100%',
  position: 'relative',
  backgroundImage: 'url("/hero-image.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  transition: 'transform 0.3s ease-out',
  '&:hover': {
    transform: 'scale(1.02)'
  }
}))

// 卡片樣式組件：用於展示內容的紙張元素
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: theme.shape.borderRadius * 2,
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'translateY(-8px) scale(1.02)',
    boxShadow: '0 12px 20px rgba(0, 0, 0, 0.1)'
  }
}))

// 動畫容器組件：用於包裝需要添加動畫效果的內容
const MotionContainer = styled(motion.div)({
  width: '100%'
})

// 首頁組件
// 輪播圖數據
const carouselData = [
  {
    id: 1,
    image: '/galleryimages/台大盃1.jpg',
    title: '2024 臺大盃',
    description: '臺大盃排舞比賽成功晉級決賽'
  },
  {
    id: 2,
    image: '/galleryimages/Hero 4 who1.jpg',
    title: '2024 Hero4who',
    description: 'Popsy參加中區初賽並成功晉級決賽'
  },
  {
    id: 3,
    image: '/galleryimages/台大盃3.jpg',
    title: '2024 臺大盃',
    description: '獨特的蘿莉塔風格'
  },
  {
    id: 4,
    image: '/galleryimages/Hero 4 who2.jpg',
    title: '2024 Hero4who',
    description: '在舞台上發光發熱'
  },
  {
    id: 5,
    image: '/galleryimages/Hero 4 who3.jpg',
    title: '2024 Hero4who',
    description: '每一場演出都盡力詮釋舞蹈'
  },
  {
    id: 6,
    image: '/galleryimages/台大盃2.jpg',
    title: '2024 臺大盃',
    description: '展現魅力'
  },
  {
    id: 7,
    image: '/galleryimages/台大盃4.jpg',
    title: '2024 臺大盃',
    description: '持續進步的Popsy'
  }
]

// 成就數據
const achievements = [
  {
    title: '大甲盃排舞比賽',
    award: '冠軍',
    year: '2024'
  },
  {
    title: '台大盃',
    award: '晉級決賽',
    year: '2024'
  },
  {
    title: 'Hero4who 中區',
    award: '四強',
    year: '2024'
  },
  {
    title: '雄爭舞鬥',
    award: '晉級決賽',
    year: '2024'
  }
]

// 成就數據接口
interface Achievement {
  title: string
  award: string
  year: string
}

const Home = () => {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null)
  const { scrollY } = useScroll()
  
  // 視差滾動效果
  useTransform(scrollY, [0, 500], [0, 150])

  // 定義容器動畫變體
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },          // 初始狀態：隱藏且向下偏移
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,                      // 動畫持續時間
        staggerChildren: 0.2                 // 子元素動畫延遲時間
      }
    }
  }

  return (
    <Box>
      {/* 英雄區塊：全屏展示區 */}
      <HeroSection>
        <Container maxWidth="lg" sx={{ 
          position: 'relative', 
          zIndex: 1,
          display: 'flex',
          alignItems: 'flex-end',  // 改為底部對齊
          height: '100%',
          pb: 8  // 添加底部間距
        }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ width: '100%' }}  // 確保標題容器寬度為100%
          >
            <Typography
              variant="h1"
              component="h1"
              sx={{
                color: 'white',
                fontWeight: 700,
                textAlign: 'center',
                mb: 3,
                fontSize: { xs: '2.5rem', md: '4rem' },
                textShadow: `
                  -1px -1px 0 #FFB6C1,
                  1px -1px 0 #FFC0CB,
                  -1px 1px 0 #FFE4E1,
                  1px 1px 0 #FFC0CB,
                  2px 2px 4px rgba(255, 182, 193, 0.4),
                  4px 4px 8px rgba(255, 192, 203, 0.3),
                  0 0 10px rgba(255, 192, 203, 0.6),
                  0 0 20px rgba(255, 182, 193, 0.4),
                  0 0 30px rgba(255, 228, 225, 0.3)
                `,
                background: 'linear-gradient(45deg, #FFC0CB, #FFE4E1, #FFB6C1)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3)) brightness(1.1)'
              }}
            >
              Popsy
            </Typography>
            {/* 副標題 */}
            <Typography
              variant="h4"
              sx={{
                color: 'white',
                textAlign: 'center',
                mb: 4,
                fontSize: { xs: '1.5rem', md: '2rem' },
                letterSpacing: '0.2em',  // 添加文字間距
                textShadow: `
                  -0.5px -0.5px 0 #FFB6C1,
                  0.5px -0.5px 0 #FFC0CB,
                  -0.5px 0.5px 0 #FFE4E1,
                  0.5px 0.5px 0 #FFC0CB,
                  1px 1px 3px rgba(255, 182, 193, 0.4),
                  2px 2px 4px rgba(255, 192, 203, 0.3),
                  0 0 8px rgba(255, 192, 203, 0.5),
                  0 0 15px rgba(255, 182, 193, 0.3)
                `,
                background: 'linear-gradient(45deg, #FFC0CB, #FFE4E1, #FFB6C1)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(1px 1px 3px rgba(0,0,0,0.3)) brightness(1.1)'
              }}
            >
              用舞蹈傳遞熱情與美好
            </Typography>
          </motion.div>
        </Container>
      </HeroSection>

      {/* 輪播圖區塊 */}
      <Box sx={{ width: '100%', height: '70vh', position: 'relative' }}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop
          style={{ width: '100%', height: '100%' }}
        >
          {carouselData.map((item) => (
            <SwiperSlide key={item.id}>
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0,0,0,0.4)',
                    zIndex: 1
                  }
                }}
              >
                <Box
                  component="img"
                  src={item.image}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: '20%',
                    left: '10%',
                    color: 'white',
                    zIndex: 2
                  }}
                >
                  <Typography variant="h3" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="h5">
                    {item.description}
                  </Typography>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>



      {/* 成就展示區塊 */}
      <Box sx={{ py: 8, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <MotionContainer
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
              團隊成就
            </Typography>
            <Box sx={{ position: 'relative' }}>
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop
                slidesPerView={1}
                spaceBetween={30}
                breakpoints={{
                  640: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 }
                }}
                style={{ padding: '20px 10px' }}
              >
                {achievements.map((achievement, index) => (
                  <SwiperSlide key={index}>
                    <StyledPaper
                      elevation={3}
                      onClick={() => setSelectedAchievement(achievement)}
                      sx={{
                        cursor: 'pointer',
                        textAlign: 'center',
                        p: 3,
                        border: '2px solid #FFB6C1',
                        borderRadius: 2,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.05)',
                          boxShadow: '0 8px 16px rgba(255,182,193,0.2)'
                        }
                      }}
                    >
                      <Typography variant="h6" gutterBottom>
                        {achievement.title}
                      </Typography>
                      <Typography variant="h5" color="primary" gutterBottom>
                        {achievement.award}
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary">
                        {achievement.year}
                      </Typography>
                    </StyledPaper>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>
          </MotionContainer>
        </Container>
      </Box>

      {/* 成就詳細資訊對話框 */}
      <Dialog
        open={Boolean(selectedAchievement)}
        onClose={() => setSelectedAchievement(null)}
        maxWidth="sm"
        fullWidth
        sx={{
          '& .MuiDialog-paper': {
            margin: 2
          }
        }}
      >
        {selectedAchievement && (
          <>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between', 
              p: 2,
              bgcolor: 'background.paper'
            }}>
              <Typography variant="h6">{selectedAchievement.title}</Typography>
              <IconButton
                edge="end"
                color="inherit"
                onClick={() => setSelectedAchievement(null)}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
            </Box>
            <Box sx={{ p: 3, bgcolor: 'background.paper' }}>
              <Typography variant="h5" color="primary" gutterBottom>
                {selectedAchievement.award}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {selectedAchievement.year}
              </Typography>
            </Box>
          </>
        )}
      </Dialog>


    </Box>
  )
}

export default Home