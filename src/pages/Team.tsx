import { Box, Container, Typography, Grid, Paper } from '@mui/material'
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab'
import { styled } from '@mui/material/styles'

// 自定義紙張組件樣式：用於展示內容的卡片
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  borderRadius: theme.shape.borderRadius * 2  // 加大圓角效果
}))

// 團隊介紹頁面組件
const Team = () => {
  // 定義團隊發展歷程數據
  const milestones = [
    {
      year: '2023',
      title: '團隊成立',
      description: '在共同的理念下，我們組建了Popsy表演團隊。'
    },
    {
      year: '2024',
      title: '大甲盃冠軍',
      description: '以電影《玩具總動員》作為發想而產生的作品。'
    },
    {
      year: '2024',
      title: 'Hero4who決賽',
      description: 'Popsy參加中區初賽並成功晉級決賽。'
    },
    {
      year: '2024',
      title: '第30屆臺大盃決賽',
      description: '北上參加臺大盃排舞比賽成功晉級決賽。'
    },
    {
      year: '2025',
      title: '第31屆臺大盃初賽',
      description: '再次挑戰臺大盃排舞比賽。'
    }
  ]

  return (
    <Container>
      {/* 頁面標題區塊 */}
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Popsy
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          來自台中，全女生的POPPING舞團
        </Typography>
      </Box>

      {/* 內容網格布局 */}
      <Grid container spacing={4}>
        {/* 團隊理念區塊 */}
        <Grid item xs={12} md={6}>
          <StyledPaper elevation={3}>
            <Typography variant="h4" gutterBottom>
              關於我們
            </Typography>
            <Typography paragraph sx={{ whiteSpace: 'pre-line', mb: 2 }}>
              你們相信生活中總會有不期而遇的美好嗎？
            </Typography>
            <Typography paragraph sx={{ whiteSpace: 'pre-line', mb: 2 }}>
              我們的團名「𝑷𝑶𝑷𝑺𝒀」
              源於ᴘᴏᴘᴘɪɴɢ+sᴇʀᴇɪɴᴅɪᴘɪᴛʏ(奇緣)
              又指小女孩、小美人。
            </Typography>
            <Typography paragraph sx={{ whiteSpace: 'pre-line' }}>
              Popping是使我們奇遇的起點，
              而我們希望能成為大家生命中的一個美好奇遇。
            </Typography>
          </StyledPaper>
        </Grid>

        {/* 未來願景區塊 */}
        <Grid item xs={12} md={6}>
          <StyledPaper elevation={3}>
            <Typography variant="h4" gutterBottom>
              未來願景
            </Typography>
            <Typography paragraph>
              我們期望成為最具影響力的表演團體之一，通過不斷創新和突破，在表演藝術領域樹立新的標準。
            </Typography>
            <Typography paragraph>
              未來目標：
            </Typography>
            <Typography component="ul" sx={{ pl: 2 }}>
              <li>擴大演出規模和範圍</li>
              <li>建立專業培訓體系</li>
              <li>開發創新表演形式</li>
              <li>推動國際文化交流</li>
            </Typography>
          </StyledPaper>
        </Grid>

        {/* 發展歷程時間軸 */}
        <Grid item xs={12}>
          <StyledPaper elevation={3}>
            <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
              發展歷程
            </Typography>
            <Timeline position="alternate">
              {milestones.map((milestone, index) => (
                <TimelineItem key={index}>
                  <TimelineSeparator>
                    <TimelineDot color="primary" />
                    {index < milestones.length - 1 && <TimelineConnector />}
                  </TimelineSeparator>
                  <TimelineContent>
                    <Typography variant="h6" component="span">
                      {milestone.year}
                    </Typography>
                    <Typography color="primary">{milestone.title}</Typography>
                    <Typography>{milestone.description}</Typography>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </StyledPaper>
        </Grid>


      </Grid>
    </Container>
  )
}

export default Team