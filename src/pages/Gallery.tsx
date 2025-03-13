import {
  Box,
  Container,
  Typography
} from '@mui/material'

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