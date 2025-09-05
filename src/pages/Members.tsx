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
    name: '黑花 Hewa',
    role: '團長/編舞\n#INTJ #編舞擔當 #POPSY大隊長',
    bio: 'POPSY的靈魂人物，\n同時也是我們的創團元老 黑花🖤\n\n她獨特的舞蹈風格，\n總能給人源源不斷的驚喜，\n勇於突破與創新，\n每支排舞都像一場奇幻魔術秀。\n\n平時黑花看似嚴謹，\n實際內心蘊藏著溫柔，\n總是充滿鼓勵與關心，\n是團裡溫暖的大姊姊，\n也是最具行動力之人🔥\n\n一起走進黑花的魔法世界🪄\n讓她用舞蹈治癒我們吧🌻✨',
    skills: ['Popping', '編舞', '教學', '創作'],
    image: '/member/精修8-POPSY-1279.jpg'
  },
  {
    id: 2,
    name: '小鈴 Zingpop',
    role: '舞者\n#ISFP #舞感擔當 #男友力爆棚',
    bio: '本團超新星小忙內 —— 小鈴🎀✨\n\n雖然她人長得嬌小可愛，\n但震點卻大到能把人震飛💥\n平時的她看起來呆呆傻傻的，\n但每當她起開車、寫起程式，\n男友力瞬間爆棚💪🏼\n集結眾多反差感於一身😻\n\n此外她也是團內最強小公關，\n人緣&酒量都是LV.MAX，\n身材也是一級棒💯\n\n一出場就自帶閃光特效：\n「小鈴～請妳嫁給我吧！！💍👌🏼」',
    skills: ['Popping', '程式設計', '公關'],
    image: '/member/精修5-POPSY-956.jpg'
  },
  {
    id: 3,
    name: '家茹 Ruby',
    role: '舞者\n#INFP #創意擔當 #可愛香菇妹',
    bio: '可別被她呆萌的外表 甜甜的嗓音給騙了，\n當她打起震點來可是能震攝四方，\n可愛又帥氣 反差感極強，\n她就是我們的香菇妹～家茹！🍄💗\n\n平時的她個性隨和，\n但做起事來卻一點都不馬虎 🔍\n對於美感很有自己的一套見解跟追求，\n總能將天馬行空的想法具象化，\n鬼點子多到像開外掛🛸👾\n是POPSY最有美感的藝術總監✨\n\n百變香菇的魅力 誰能抵擋得住😻💕',
    skills: ['Popping', '藝術設計', '創意發想'],
    image: '/member/POPSY-852.jpg'
  },
  {
    id: 4,
    name: '麗棻 Fanny',
    role: '舞者\n#ISFP #溫柔擔當 #Kpop小公主',
    bio: '身體素質卓越的Fanny能駕馭各種舞風，\n舞姿剛柔並濟且表情控管一流，\n可鹽可甜可謂是Fanny的代名詞。\n\n她個性溫柔穩重，\n是團隊中的定心丸，\n也是最堅強的後盾。\n\n平時喜愛拍照的Fanny，\n喜歡用鏡頭捕捉人生中每一個美麗的瞬間，\n這麼漂亮又閃閃發亮的存在，誰能不愛呢✨',
    skills: ['Popping', 'K-pop', '攝影'],
    image: '/member/POPSY-754.jpg'
  },
  {
    id: 5,
    name: '子綾 Laurel',
    role: '舞者\n#ENFP #搞笑擔當 #公園練舞狂人',
    bio: '本團的快樂原子彈──Laurel！\n擅長Tutting+Finger 🖖🏼\n邏輯切換速度快到像在轉台，\n讓人目瞪口呆，\n一上比賽場氣場爆棚，\n令對手感到壓力山大 ⛰️\n\n只要她出現，無聊會自動退散，\n是個社交小炸彈💣💥\n她平常不是在公園練舞，\n就是在去公園練舞的路上，\n腦袋裡塞滿天馬行空的創意。\n\n她ㄎㄧㄤ歸ㄎㄧㄤ，\n卻也是個溫暖貼心的存在，\n情緒價值直接拉滿。\n\n想體驗什麼叫做「有她在就像在冒險」？\n快來一起走進她的奇妙歷險記🧚‍♀️✨',
    skills: ['Popping', 'Tutting', 'Finger Tutting'],
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
                <Typography variant="subtitle1" color="primary" gutterBottom 
                  sx={{ whiteSpace: 'pre-line' }}>  {/* 添加這行 */}
                  {member.role}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  專長：{member.skills.join('、')}
                </Typography>
                <Typography variant="body2" sx={{ whiteSpace: 'pre-line' }}>  {/* 添加這行 */}
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