import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import BrokenImageIcon from '@mui/icons-material/BrokenImage'

interface SafeImgProps {
  src: string
  alt: string
  style?: React.CSSProperties
  loading?: 'lazy' | 'eager'
  height?: number | string
  objectFit?: 'cover' | 'contain' | 'fill'
}

export default function SafeImg({ src, alt, style, loading = 'lazy', height, objectFit = 'cover' }: SafeImgProps) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1,
          bgcolor: '#f0f0f0',
          color: 'text.disabled',
          width: '100%',
          height: height ?? 160,
          minHeight: 80,
        }}
      >
        <BrokenImageIcon sx={{ fontSize: '2rem', opacity: 0.4 }} />
        <Typography variant="caption" sx={{ textAlign: 'center', px: 1, fontSize: '0.7rem', opacity: 0.6 }}>
          {alt}
        </Typography>
      </Box>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      style={{ display: 'block', width: '100%', objectFit, ...style }}
      onError={() => setError(true)}
    />
  )
}
