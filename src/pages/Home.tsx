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
// 修改 HeroSection 樣式
const HeroSection = styled(Box)(() => ({
  width: '100%',
  position: 'relative',
  margin: 0,
  padding: 0,
  backgroundImage: `url("${import.meta.env.BASE_URL}hero-image.jpg")`,
  backgroundSize: 'contain',  // 改為 contain 確保圖片完整顯示
  backgroundPosition: 'center',
  backgroundColor: 'transparent',
  backgroundRepeat: 'no-repeat',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '90vh',  // 改用 minHeight
  maxHeight: '90vh',  // 限制最大高度
  overflow: 'visible',  // 允許內容溢出
  '@media (max-width: 960px)': {
    minHeight: '70vh',
    backgroundSize: 'contain'
  },
  '@media (max-width: 600px)': {
    minHeight: '50vh',
    backgroundSize: 'contain'
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
    image: './galleryimages/台大盃1.jpg',
    title: '2024 臺大盃',
    description: '臺大盃排舞比賽成功晉級決賽'
  },
  {
    id: 2,
    image: './galleryimages/Hero 4 who1.jpg',
    title: '2024 Hero4who',
    description: 'POPSY參加中區初賽並成功晉級決賽'
  },
  {
    id: 3,
    image: './galleryimages/台大盃3.jpg',
    title: '2024 臺大盃',
    description: '獨特的蘿莉塔風格'
  },
  {
    id: 4,
    image: './galleryimages/Hero 4 who2.jpg',
    title: '2024 Hero4who',
    description: '在舞台上發光發熱'
  },
  {
    id: 5,
    image: './galleryimages/Hero 4 who3.jpg',
    title: '2024 Hero4who',
    description: '每一場演出都盡力詮釋舞蹈'
  },
  {
    id: 6,
    image: './galleryimages/台大盃2.jpg',
    title: '2024 臺大盃',
    description: '展現魅力'
  },
  {
    id: 7,
    image: './galleryimages/台大盃4.jpg',
    title: '2024 臺大盃',
    description: '持續進步的POPSY'
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
          </motion.div>
        </Container>
      </HeroSection>
      {/* 輪播圖區塊 */}
      <Box sx={{ width: '100%', height: '70vh', position: 'relative', margin: 0, padding: 0 }}>
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
                  alt={`${item.title} - ${item.description}`}
                  sx={{
                    width: '100%',
                    height: 'auto',  // 改為自動高度
                    maxHeight: '90vh',  // 限制最大高度
                    objectFit: 'contain',  // 改為 contain
                    objectPosition: 'center'
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
      <Box sx={{ py: 8, bgcolor: 'background.default', margin: 0 }}>
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