import { Box, Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material'

// 定義成員數據接口
interface Member {
  id: number
  name: string
  role: string
  bio: string
  skills: string[]
  image: string
}

// 模擬成員數據
const members: Member[] = [
  {
    id: 1,
    name: '徐于涵',
    role: '團長/編舞',
    bio: '專業舞者，擁有豐富的舞蹈經驗，致力於推廣街舞文化。',
    skills: ['Popping', '編舞', '教學'],
    image: '/member/精修8-POPSY-1279.jpg'
  },
  {
    id: 2,
    name: '陳紫鈴',
    role: '舞者',
    bio: '熱愛舞蹈的表演者，擅長結合不同風格創造獨特的舞蹈表現。',
    skills: [ 'Popping'],
    image: '/member/精修5-POPSY-956.jpg'
  },
  {
    id: 3,
    name: '陳家茹',
    role: '舞者',
    bio: '專注於舞蹈教育，希望通過舞蹈傳遞正能量。',
    skills: ['Popping'],
    image: '/member/POPSY-852.jpg'
  },
  {
    id: 4,
    name: '高麗棻',
    role: '舞者',
    bio: '充滿活力的表演者，專注於舞蹈技巧的精進與創新。',
    skills: ['Popping'],
    image: '/member/POPSY-754.jpg'
  },
  {
    id: 5,
    name: '江子綾',
    role: '舞者',
    bio: '熱情洋溢的舞者，致力於將舞蹈藝術融入生活。',
    skills: ['Popping'],
    image: '/member/POPSY-702.jpg'
  }
]

// 成員介紹頁面組件
const Members = () => {
  return (
    <Container>
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          團隊成員
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          認識我們優秀的表演者
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {members.map((member) => (
          <Grid item key={member.id} xs={12} sm={6} md={4}>
            <Card sx={{ 
              height: '100%',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-8px)'
              }
            }}>
              <CardMedia
                component="img"
                height="500"
                image={member.image}
                alt={member.name}
                sx={{ 
                  objectFit: 'cover',
                  objectPosition: 'center top'
                }}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {member.name}
                </Typography>
                <Typography variant="subtitle1" color="primary" gutterBottom>
                  {member.role}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  專長：{member.skills.join('、')}
                </Typography>
                <Typography variant="body2">
                  {member.bio}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Members