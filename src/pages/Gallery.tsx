import { useState } from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  Dialog,
  IconButton,
  Tabs,
  Tab
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

// 定義照片數據接口
interface Photo {
  id: number
  title: string
  category: string
  image: string
}

// 模擬照片數據
const photos: Photo[] = [
  {
    id: 1,
    title: '2024 臺大盃',
    category: '比賽照片',
    image: '/galleryimages/台大盃1.jpg'
  },
  {
    id: 2,
    title: '2024 Hero4who',
    category: '比賽照片',
    image: '/galleryimages/Hero 4 who1.jpg'
  },
  {
    id: 3,
    title: '2024 臺大盃',
    category: '比賽照片',
    image: '/galleryimages/台大盃3.jpg'
  },
  {
    id: 4,
    title: '2024 Hero4who',
    category: '比賽照片',
    image: '/galleryimages/Hero 4 who2.jpg'
  },
  {
    id: 5,
    title: '2024 Hero4who',
    category: '比賽照片',
    image: '/galleryimages/Hero 4 who3.jpg'
  },
  {
    id: 6,
    title: '2024 臺大盃',
    category: '比賽照片',
    image: '/galleryimages/台大盃2.jpg'
  },
  {
    id: 7,
    title: '2024 臺大盃',
    category: '比賽照片',
    image: '/galleryimages/台大盃4.jpg'
  }
]

// 照片分類列表
const categories = ['全部', '比賽照片', '練習照片', '活動照片']

/**
 * 照片展示頁面組件
 * 實現照片列表展示、分類篩選和照片預覽功能
 */
const Gallery = () => {
  // 狀態管理：當前選中的分類和照片
  const [selectedCategory, setSelectedCategory] = useState('全部')
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)

  // 根據選中的分類篩選照片
  const filteredPhotos = photos.filter(
    (photo) => selectedCategory === '全部' || photo.category === selectedCategory
  )

  // 處理照片點擊：打開照片預覽對話框
  const handlePhotoClick = (photo: Photo) => {
    setSelectedPhoto(photo)
  }

  // 處理關閉按鈕點擊：關閉照片預覽對話框
  const handleClose = () => {
    setSelectedPhoto(null)
  }

  return (
    <Container>
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          精彩瞬間
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          記錄每個難忘的表演時刻
        </Typography>
      </Box>

      <Box sx={{ mb: 4, borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={selectedCategory}
          onChange={(_, newValue) => setSelectedCategory(newValue)}
          variant="scrollable"
          scrollButtons="auto"
        >
          {categories.map((category) => (
            <Tab key={category} label={category} value={category} />
          ))}
        </Tabs>
      </Box>

      <Grid container spacing={3}>
        {filteredPhotos.map((photo) => (
          <Grid item key={photo.id} xs={12} sm={6} md={4} lg={3}>
            <Card
              sx={{
                height: '100%',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  transform: 'translateY(-8px) scale(1.02)',
                  boxShadow: '0 12px 20px rgba(0, 0, 0, 0.1)'
                }
              }}
              onClick={() => handlePhotoClick(photo)}
            >
              <CardMedia
                component="img"
                height="225"
                image={photo.image}
                alt={photo.title}
                sx={{
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog
        open={Boolean(selectedPhoto)}
        onClose={handleClose}
        maxWidth="lg"
        fullWidth
      >
        {selectedPhoto && (
          <Box sx={{ position: 'relative' }}>
            <IconButton
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: 'white',
                zIndex: 1,
                bgcolor: 'rgba(0, 0, 0, 0.5)',
                '&:hover': {
                  bgcolor: 'rgba(0, 0, 0, 0.7)'
                }
              }}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
            <Box
              sx={{
                width: '100%',
                height: { xs: '50vh', sm: '70vh', md: '80vh' },
                position: 'relative'
              }}
            >
              <CardMedia
                component="img"
                image={selectedPhoto.image}
                alt={selectedPhoto.title}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }}
              />
            </Box>
          </Box>
        )}
      </Dialog>
    </Container>
  )
}

export default Gallery