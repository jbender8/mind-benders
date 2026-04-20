import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#254117',
      light: '#4a7c35',
      dark: '#1a2d10',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#8B6F47',
      light: '#a07d52',
      dark: '#6d5636',
      contrastText: '#ffffff',
    },
    background: {
      default: '#ffffff',
      paper: '#fdf8f3',
    },
    text: {
      primary: '#1a1a1a',
      secondary: '#555555',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: { fontWeight: 900 },
    h2: { fontWeight: 800 },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 700,
          borderRadius: '50px',
        },
        sizeLarge: {
          padding: '14px 32px',
          fontSize: '1rem',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: { borderRadius: '16px' },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 700,
          borderRadius: '50px',
          fontSize: '0.72rem',
          letterSpacing: '0.04em',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        fullWidth: true,
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        'h1, h2, h3, h4, h5, h6, p': { margin: 0 },
        body: { scrollBehavior: 'smooth' },
      },
    },
  },
})
