import { useEffect } from 'react'
import { Box, Container, Typography, Grid, Card, CardContent, Button, Paper } from '@mui/material'

const Contact = () => {
  // 基本 SEO：title / description / canonical
  useEffect(() => {
    const title = '聯絡我們 | POPSY'
    const description = 'POPSY 聯絡頁面：歡迎透過電子郵件或社群平台與我們聯繫，洽詢演出合作、媒體採訪或其他相關事宜。'
    const canonicalHref = `${window.location.origin}${import.meta.env.BASE_URL}#/contact`

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
            聯絡我們
          </Typography>
          <Typography variant="h5" color="text.secondary">
            歡迎媒體、品牌與活動合作來信或私訊，我們將盡速回覆您
          </Typography>
        </Container>
      </Box>

      {/* 聯絡方式卡片 */}
      <Container maxWidth="lg" sx={{ my: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', borderRadius: 3 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  電子郵件
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                popsy0524@gmail.com
                </Typography>
                <Button variant="contained" color="primary" fullWidth href="mailto:popsy0524@gmail.com">
                  發送信件
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', borderRadius: 3 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Instagram
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                popsy_dancecrew
                </Typography>
                <Button variant="contained" color="primary" fullWidth href="https://www.instagram.com/popsy_dancecrew/?igsh=ZGo4eGR4MjJvbnR4#" target="_blank" rel="noopener noreferrer">
                  前往 Instagram
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', borderRadius: 3 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Threads
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                𝐏𝐎𝐏𝐒𝐘
                </Typography>
                <Button variant="contained" color="primary" fullWidth href="https://www.threads.com/@popsy_dancecrew?igshid=NTc4MTIwNjQ2YQ==" target="_blank" rel="noopener noreferrer">
                  前往 Threads
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* 說明區塊 */}
      <Container maxWidth="md" sx={{ mb: 10 }}>
        <Paper elevation={3} sx={{ p: { xs: 3, md: 4 }, borderRadius: 3 }}>
          <Typography variant="h5" gutterBottom>
            合作與洽詢
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ whiteSpace: 'pre-line' }}>
            {`我們提供演出、企劃、教學與活動合作，若您有任何想法或需求，歡迎與我們聯繫。\n請描述合作內容、預計時間與地點，我們會盡速與您聯繫。`}
          </Typography>
        </Paper>
      </Container>
    </Box>
  )
}

export default Contact