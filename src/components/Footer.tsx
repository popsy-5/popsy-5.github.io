import { Box, Container, Typography, Link } from '@mui/material'
import { styled } from '@mui/material/styles'
import InstagramIcon from '@mui/icons-material/Instagram'
import EmailIcon from '@mui/icons-material/Email'
// 自定義頁腳容器樣式
const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.85)',
  backdropFilter: 'blur(8px)',
  borderTop: '1px solid rgba(229, 178, 202, 0.3)',
  padding: theme.spacing(2, 0),  // 縮短上下間距
  marginTop: 'auto',
  '& .contact-info': {
    padding: theme.spacing(1),  // 縮短內部間距
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      transform: 'translateY(-2px)'
    }
  }
}))

// 頁腳組件
const Footer = () => {
  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center'
        }}>
          {/* 聯絡資訊 */}
          <Box sx={{ 
            mb: { xs: 1, md: 0 },
            p: 1,
            borderRadius: 1,
          }} className="contact-info">
            <Typography variant="h6" sx={{
              background: 'linear-gradient(45deg,rgb(232, 71, 157),rgb(143, 90, 217),rgb(226, 151, 232))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 1,
              fontWeight: 600,
              textAlign: 'center'
            }}>
              聯絡我們
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'center',
              gap: { xs: 1, sm: 2 }
            }}>
              {/* Instagram 聯絡方式 */}
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                transition: 'all 0.3s ease-in-out',
                p: 1.5,
                borderRadius: 1,
                '&:hover': {
                  transform: 'translateX(8px)',
                  color: 'primary.main',
                  background: 'rgba(229, 178, 202, 0.1)'
                }
              }}>
                <InstagramIcon sx={{ 
                  fontSize: 24,
                  color: 'rgb(232, 71, 157)'
                }} />
                <Link
                  href="https://www.instagram.com/popsy_dancecrew?igsh=ZGo4eGR4MjJvbnR4"
                  target="_blank"
                  sx={{
                    textDecoration: 'none',
                    color: 'inherit',
                    fontWeight: 500,
                    '&:hover': {
                      color: 'primary.main'
                    }
                  }}
                >
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    popsy_dancecrew
                  </Typography>
                </Link>
              </Box>
              
              {/* Gmail 聯絡方式 */}
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                transition: 'all 0.3s ease-in-out',
                p: 1.5,
                borderRadius: 1,
                '&:hover': {
                  transform: 'translateX(8px)',
                  color: 'primary.main',
                  background: 'rgba(229, 178, 202, 0.1)'
                }
              }}>
                <EmailIcon sx={{ 
                  fontSize: 24,
                  color: 'rgb(232, 71, 157)'
                }} />
                <Link
                  href="mailto:popsy0524@gmail.com"
                  sx={{
                    textDecoration: 'none',
                    color: 'inherit',
                    fontWeight: 500,
                    '&:hover': {
                      color: 'primary.main'
                    }
                  }}
                >
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    popsy0524@gmail.com
                  </Typography>
                </Link>
              </Box>
            </Box>
          </Box>

          {/* 移除社交媒體連結區塊 */}
        </Box>

        {/* 版權資訊 */}
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ mt: 1 }}  // 縮短與上方的間距
        >
          © {new Date().getFullYear()} POPSY Dance. All rights reserved.
        </Typography>
      </Container>
    </FooterContainer>
  )
}

export default Footer