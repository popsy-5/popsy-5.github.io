import { useEffect } from 'react'
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

interface PressArticle {
  id: number
  title: string
  summary: string
  image: string
  url: string
}

const pressArticles: PressArticle[] = [
  {
    id: 1,
    title: '自由時報｜總統盃街舞中區複賽 POPSY 排舞奪冠',
    summary: '自由時報對 POPSY 在總統盃街舞中區複賽的報導，芭比女力主題奪下排舞冠軍。',
    image: '/president-trophy.jpg',
    url: 'https://sports.ltn.com.tw/news/breakingnews/5223711'
  },
  {
    id: 2,
    title: 'Yahoo 運動｜總統盃街舞中區複賽 逾百組熱戰 POPSY 排舞奪冠',
    summary: 'Yahoo Sports 報導 POPSY 在總統盃街舞中區複賽的亮眼表現與奪冠消息。',
    image: '/president02.jpg',
    url: 'https://tw.sports.yahoo.com/news/%E8%A1%97%E8%88%9E-%E7%B8%BD%E7%B5%B1%E7%9B%83%E4%B8%AD%E5%8D%80%E8%A4%87%E8%B3%BD%E9%80%BE%E7%99%BE%E7%B5%84%E7%86%B1%E6%88%B0-%E8%8A%AD%E6%AF%94%E5%A5%B3%E5%8A%9Bpopsy%E6%8E%92%E8%88%9E%E5%A5%AA%E5%86%A0-134136931.html'
  },
  {
    id: 3,
    title: '體育署新聞｜總統盃街舞大賽相關資訊',
    summary: '教育部體育署釋出總統盃街舞大賽新聞資訊與賽事亮點，POPSY 亦參與本屆賽事。',
    image: '/president01.jpg',
    url: 'https://www.sa.gov.tw/News_Content/362/19650'
  },
  {
    id: 4,
    title: 'Yahoo 運動｜總統盃街舞大賽決賽登場 參賽者造型吸睛',
    summary: 'Yahoo Sports 報導總統盃街舞大賽決賽盛況，POPSY 登場展現舞台魅力。',
    image: '/president.png',
    url: 'https://tw.sports.yahoo.com/news/%E7%B8%BD%E7%B5%B1%E7%9B%83%E8%A1%97%E8%88%9E%E5%A4%A7%E8%B3%BD%E6%B1%BA%E8%B3%BD%E7%99%BB%E5%A0%B4-%E5%8F%83%E8%B3%BD%E8%80%85%E9%80%A0%E5%9E%8B%E5%90%B8%E7%9D%9B-1-%E5%9C%96-120141965.html'
  }
]

const Press = () => {
  // 基本 SEO：title / description / canonical
  useEffect(() => {
    const title = '舞團相關報導 | POPSY'
    const description = 'POPSY 舞團相關報導頁面：收錄各大媒體對 POPSY 的報導、專訪與活動紀錄，歡迎聯繫合作。'
    const canonicalHref = `${window.location.origin}${import.meta.env.BASE_URL}#/press`

    document.title = title

    let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null
    if (!metaDesc) {
      metaDesc = document.createElement('meta')
      metaDesc.setAttribute('name', 'description')
      document.head.appendChild(metaDesc)
    }
    if (metaDesc) metaDesc.setAttribute('content', description)

    let linkCanon = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    if (!linkCanon) {
      linkCanon = document.createElement('link') as HTMLLinkElement
      linkCanon.setAttribute('rel', 'canonical')
      document.head.appendChild(linkCanon)
    }
    if (linkCanon) linkCanon.setAttribute('href', canonicalHref)
  }, [])

  return (
    <Box>
      {/* Hero 區塊 */}
      <Box sx={{
        py: { xs: 8, md: 12 },
        textAlign: 'center',
        background: 'linear-gradient(135deg, rgba(229,178,202,0.15) 0%, rgba(184,169,201,0.15) 100%)'
      }}>
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
            關於我們的舞團報導
          </Typography>
          <Typography variant="h5" color="text.secondary">
            收錄各大媒體的採訪、專題與活動報導，帶你更認識 POPSY 的舞台故事
          </Typography>
        </Container>
      </Box>

     

      {/* 報導卡片列表：三欄式 RWD */}
      <Container maxWidth="lg" sx={{ mb: 10 }}>
        <Grid container spacing={4}>
          {pressArticles.map((article) => (
            <Grid item key={article.id} xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 3 }}>
                <CardMedia
                  component="img"
                  height="180"
                  image={article.image}
                  alt={article.title}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" gutterBottom>
                    {article.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {article.summary}
                  </Typography>
                </CardContent>
                <Box sx={{ px: 2, pb: 2 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    fullWidth
                  >
                    閱讀報導
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA 區塊：媒體聯繫合作 */}
      <Box sx={{
        py: { xs: 8, md: 10 },
        background: 'linear-gradient(135deg, rgba(230,88,154,0.12) 0%, rgba(173,129,225,0.12) 100%)'
      }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
            歡迎聯繫合作
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            我們提供專訪、活動合作與表演企劃，如需進一步資訊，歡迎與我們聯繫。
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            component={RouterLink}
            to="/contact"
          >
            聯絡我們
          </Button>
        </Container>
      </Box>
    </Box>
  )
}

export default Press