import { useState } from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Dialog,
  IconButton,
  Tabs,
  Tab
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

// 定義照片數據接口
interface Photo {
  id: number
  title: string
  description: string
  category: string
  images: string[]
  tags: string[]
}

// 模擬照片數據
const photos: Photo[] = [
  {
    id: 1,
    title: '2024 臺大盃',
    description: '2024年度台大盃現場照片',
    category: '排舞比賽',
    images: ['/galleryimages/台大盃1.jpg',
      '/galleryimages/台大盃2.jpg',
      '/galleryimages/台大盃3.jpg',
      '/galleryimages/台大盃4.jpg'

    ],
    tags: ['比賽', '舞台', 'Popping']
  },
  {
    id: 2,
    title: '2024 Hero4who',
    description: '2024年度Hero4who照片',
    category: '排舞比賽',
    images: [
      '/galleryimages/Hero 4 who1.jpg',
      '/galleryimages/Hero 4 who2.jpg',
      '/galleryimages/Hero 4 who3.jpg'
    ],
    tags: ['排練', '練習', '團隊合作']
  },
  {
    id: 3,
    title: '工作坊',
    description: '舞蹈工作坊教學現場',
    category: '教學活動',
    images: ['https://source.unsplash.com/random/800x600/?workshop&3'],
    tags: ['教學', '工作坊', '互動']
  }
]

// 照片分類列表
const categories = ['全部', '演出活動', '排舞比賽']

/**
 * 照片展示頁面組件
 * 實現照片列表展示、分類篩選、照片預覽和輪播功能
 */
const Gallery = () => {
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
      <Box sx={{ textAlign: 'center', py: 4 }}>
        <Typography variant="body1" color="text.secondary">
          照片展示功能正在更新中...
        </Typography>
      </Box>
    </Container>
  )
}

export default Gallery