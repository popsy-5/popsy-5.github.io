import { Box, Fab } from '@mui/material'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { useEffect, useState } from 'react'

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <Box
      onClick={scrollToTop}
      role="presentation"
      sx={{
        position: 'fixed',
        bottom: 32,
        right: 32,
        zIndex: 1000,
        opacity: showButton ? 1 : 0,
        visibility: showButton ? 'visible' : 'hidden',
        transition: 'all 0.3s ease-in-out'
      }}
    >
      <Fab
        size="medium"
        aria-label="scroll back to top"
        sx={{
          background: 'linear-gradient(45deg, rgba(229, 178, 202, 0.9), rgba(184, 169, 201, 0.9))',
          '&:hover': {
            background: 'linear-gradient(45deg, rgba(229, 178, 202, 1), rgba(184, 169, 201, 1))'
          },
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          color: 'white'
        }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Box>
  )
}

export default ScrollToTop