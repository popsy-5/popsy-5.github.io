// 導入必要的依賴
import { useState } from 'react'
import {
  Box, // 佈局容器
  Container, // 內容限寬容器
  Typography, // 文字排版
  Grid, // 網格佈局
  Card, // 卡片容器
  CardContent, // 卡片內容
  CardMedia, // 卡片媒體
  Dialog, // 對話框
  IconButton, // 圖標按鈕
  Tabs, // 標籤頁
  Tab, // 標籤
  List, // 列表容器
  ListItem, // 列表項
  ListItemText // 列表項文字
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close' // 關閉圖標

// 定義視頻數據接口
interface Video {
  id: number
  title: string
  description: string
  category: string
  thumbnail: string
  videoUrl: string
  platform: 'youtube' | 'instagram' | 'other'
  tags: string[]
}

// 解析視頻URL的工具函數
const getVideoEmbedUrl = (url: string, platform: Video['platform']): string => {
  if (platform === 'youtube') {
    // 處理YouTube URL
    const youtubeRegex = /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/
    const match = url.match(youtubeRegex)
    return match ? `https://www.youtube.com/embed/${match[1]}` : url
  } else if (platform === 'instagram') {
    // 處理Instagram URL
    const instagramRegex = /instagram\.com\/(?:p|reel)\/([\w-]+)/
    const match = url.match(instagramRegex)
    return match ? `https://www.instagram.com/p/${match[1]}/embed` : url
  }
  return url
}

// 模擬視頻數據
const videos: Video[] = [
  {
    id: 13,
    title: '2025 POPSY | 第20屆捷運盃街舞大賽｜排舞 ADULT 組 (初賽)',
    description: 'POPSY第20屆捷運盃街舞大賽｜排舞 ADULT 組 (初賽)',
    category: '比賽紀錄',
    thumbnail: 'https://img.youtube.com/vi/M-SN-XtHvzI/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/M-SN-XtHvzI?si=gmyhWkuzHAoKCipu',
    platform: 'youtube',
    tags: ['比賽', '舞蹈', '精彩片段','街舞']
  },
  {
    id: 11,
    title: '2025 第22屆新光盃熱門街舞大賽 | UN組初賽 | POPSY',
    description: '第22屆新光盃熱門街舞大賽 UN組初賽',
    category: '比賽紀錄',
    thumbnail: './images/videos/shinkong.jpg',
    videoUrl: 'https://www.instagram.com/reel/DMValLszJs9/?igsh=MWl1aG8zcHV4Z3cxeg==',
    platform: 'instagram',
    tags: ['新光盃', '比賽', '街舞']
  },
  {
    id: 12,
    title: '2025 第22屆新光盃熱門街舞大賽 | UN組決賽 | POPSY',
    description: '第22屆新光盃熱門街舞大賽 UN組決賽',
    category: '比賽紀錄',
    thumbnail: 'https://img.youtube.com/vi/44B1rKnsgs0/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/44B1rKnsgs0?si=N4Gf22SJH0CtFBci',
    platform: 'youtube',
    tags: ['新光盃', '比賽', '街舞']
  },
  {
    id: 10,
    title: '2025 第31屆臺大盃 | 初賽 | POPSY',
    description: '2025臺大盃舞蹈比賽 初賽',
    category: '比賽紀錄',
    thumbnail: 'https://img.youtube.com/vi/F_6yW4F4Ugg/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/F_6yW4F4Ugg',
    platform: 'youtube',
    tags: ['臺大盃', '比賽', '街舞']
  },
  {
    id: 9,
    title: '2024 大甲盃排舞比賽 | 冠軍 | POPSY',
    description: 'Popsy首次奪得冠軍的比賽！感謝每一位成員的付出與努力，讓我們一起創造更多精彩時刻！',
    category: '比賽紀錄',
    thumbnail: './images/videos/dajia-cup-champion.jpg',
    videoUrl: 'https://www.instagram.com/reel/C4vB5dsSLMR/?igsh=MXY3cjZxOG5wcDhzYQ==',
    platform: 'instagram',
    tags: ['大甲盃', '比賽', '冠軍', '街舞']
  },
  {
    id: 1,
    title: '2024 第30屆臺大盃 | 初賽 | POPSY',
    description: '2024臺大盃舞蹈比賽 初賽',
    category: '比賽紀錄',
    thumbnail: 'https://img.youtube.com/vi/UqQKU31xScY/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/UqQKU31xScY',
    platform: 'youtube',
    tags: ['臺大盃', '比賽', '街舞']
  },
  {
    id: 2,
    title: '2024 第30屆臺大盃 | 決賽 | POPSY',
    description: '2024臺大盃舞蹈比賽 決賽',
    category: '比賽紀錄',
    thumbnail: 'https://img.youtube.com/vi/Y90Re98KTdE/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/Y90Re98KTdE',
    platform: 'youtube',
    tags: ['臺大盃', '比賽', '街舞', '決賽']
  },
  {
    id: 3,
    title: '2024 HERO 4 WHO國際舞蹈大賽 | 全國總決賽 | POPSY',
    description: '2024臺大盃舞蹈比賽街舞 | 排舞社會組',
    category: '比賽紀錄',
    thumbnail: 'https://img.youtube.com/vi/CSOsSYXFfh0/maxresdefault.jpg',
    videoUrl: 'https://youtu.be/CSOsSYXFfh0',
    platform: 'youtube',
    tags: ['臺大盃', '比賽', '街舞']
  },
  {
    id: 4,
    title: '2024 第30屆臺大盃 | 前導片 | 芭比娃娃的奇幻故事',
    description: '有一天，小女孩聽到敲門聲，打開門看到地上有個禮物盒，上面寫著Popsy，小女孩很困惑的把禮物拿回房間，拆開後看到好多漂亮的芭比娃娃，玩著玩著小女孩睡著了…小女孩與娃娃們的奇幻故事即將開始…',
    category: '其他',
    thumbnail: './images/videos/barbie-story.jpg',
    videoUrl: 'https://www.instagram.com/reel/C6x6huGy0SO/?igsh=MW9ocmtpNmZtZjJ6ZA==',
    platform: 'instagram',
    tags: ['幕後', '創意', '舞蹈']
  },
  {
    id: 5,
    title: '颶風極限藝術工廠 | Showcase | POPSY',
    description: '颶風極限藝術工廠的Showcase',
    category: '演出紀錄',
    thumbnail: './images/videos/hurricane-showcase.jpg',
    videoUrl: 'https://www.instagram.com/reel/C5kr7BFyizL/?igsh=MTlrNHRqcnBjMzg5Yw==',
    platform: 'instagram',
    tags: ['表演', '舞蹈', 'Showcase']
  },
  {
    id: 6,
    title: 'Popsy | ILLIT - Magnetic Cover',
    description: 'Popsy蘿莉塔小姐姐們Cover ILLIT-Magnetic啦～～',
    category: '其他',
    thumbnail: './images/videos/illit-cover.jpg',
    videoUrl: 'https://www.instagram.com/reel/C56e352STT8/?igsh=MXZsbXpqejYwdHFxaw==',
    platform: 'instagram',
    tags: ['舞蹈', 'Cover', '蘿莉塔']
  },
  {
    id: 7,
    title: 'showcase | 太邱派對',
    description: '太邱派對',
    category: '演出紀錄',
    thumbnail: './images/videos/taichiu-party.jpg',
    videoUrl: 'https://www.instagram.com/reel/DAqdfTKSKbi/?igsh=MTkxbjlvOHk4YWdwcw==',
    platform: 'instagram',
    tags: ['表演', '舞蹈', 'Showcase', '派對']
  },
  {
    id: 8,
    title: 'showcase | Especial Unity Party',
    description: 'Especial Unity Party',
    category: '演出紀錄',
    thumbnail: './images/videos/especial-unity-party.jpg',
    videoUrl: 'https://www.instagram.com/reel/C8tqqldycZy/?igsh=NHBhdTUxaWRteW4=',
    platform: 'instagram',
    tags: ['表演', '舞蹈', 'Showcase', '派對']
  }
]

// 視頻分類列表
const categories = ['全部', '比賽紀錄', '演出紀錄', '其他']

/**
 * 視頻展示頁面組件
 * 實現視頻列表展示、分類篩選、視頻播放和相關視頻推薦功能
 */
const Videos = () => {
  // 狀態管理：當前選中的分類和視頻
  const [selectedCategory, setSelectedCategory] = useState('全部')
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null)

  // 根據選中的分類篩選視頻
  const filteredVideos = videos.filter(
    (video) => selectedCategory === '全部' || video.category === selectedCategory
  )

  // 獲取相關視頻：根據標籤匹配，最多顯示3個
  const relatedVideos = selectedVideo
    ? videos
        .filter((video) => 
          video.id !== selectedVideo.id &&
          video.tags.some((tag) => selectedVideo.tags.includes(tag))
        )
        .slice(0, 3)
    : []

  // 處理視頻點擊：打開視頻播放對話框
  const handleVideoClick = (video: Video) => {
    setSelectedVideo(video)
  }

  // 處理關閉按鈕點擊：關閉視頻播放對話框
  const handleClose = () => {
    setSelectedVideo(null)
  }

  return (
    <Container>
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          影片展示
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          觀賞精彩的表演影片
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
        {filteredVideos.map((video) => (
          <Grid item key={video.id} xs={12} sm={6} md={4}>
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
              onClick={() => handleVideoClick(video)}
            >
              <CardMedia
                component="img"
                height="225"
                image={video.thumbnail}
                alt={video.title}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {video.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {video.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog
        open={Boolean(selectedVideo)}
        onClose={handleClose}
        maxWidth="lg"
        fullWidth
      >
        {selectedVideo && (
          <Box sx={{ position: 'relative' }}>
            <IconButton
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: 'white',
                zIndex: 1
              }}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
            <Grid container spacing={2} sx={{ p: { xs: 1, sm: 2 } }}>
              <Grid item xs={12} lg={8}>
                <Box sx={{ position: 'relative', paddingTop: { xs: '75%', sm: '56.25%' } }}>
                  <iframe
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      border: 0
                    }}
                    src={getVideoEmbedUrl(selectedVideo.videoUrl, selectedVideo.platform)}
                    title={selectedVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </Box>
                <Box sx={{ mt: 2 }}>
                  <Typography variant="h5" gutterBottom sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem' } }}>
                    {selectedVideo.title}
                  </Typography>
                  <Typography paragraph sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                    {selectedVideo.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.8rem', sm: '0.875rem' } }}>
                    標籤：{selectedVideo.tags.join('、')}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} lg={4}>
                <Typography variant="h6" gutterBottom sx={{ fontSize: { xs: '1.1rem', sm: '1.25rem' } }}>
                  相關影片
                </Typography>
                <List sx={{ display: { xs: 'flex', lg: 'block' }, overflowX: { xs: 'auto', lg: 'visible' }, pb: 1 }}>
                  {relatedVideos.map((video) => (
                    <ListItem
                      key={video.id}
                      button
                      onClick={() => handleVideoClick(video)}
                      sx={{
                        flex: { xs: '0 0 300px', lg: '1 1 auto' },
                        mr: { xs: 2, lg: 0 },
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          backgroundColor: 'rgba(229, 178, 202, 0.1)',
                          transform: { xs: 'translateY(-4px)', lg: 'translateX(8px)' }
                        }
                      }}
                    >
                      <Box sx={{ width: '100%' }}>
                        <CardMedia
                          component="img"
                          height="120"
                          image={video.thumbnail}
                          alt={video.title}
                          sx={{ 
                            borderRadius: 1, 
                            mb: 1,
                            objectFit: 'cover'
                          }}
                        />
                        <ListItemText
                          primary={<Typography noWrap sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>{video.title}</Typography>}
                          secondary={<Typography noWrap sx={{ fontSize: { xs: '0.8rem', sm: '0.875rem' } }}>{video.description}</Typography>}
                        />
                      </Box>
                    </ListItem>
                  ))}
                </List>
              </Grid>
            </Grid>
          </Box>
        )}
      </Dialog>
    </Container>
  )
}

export default Videos