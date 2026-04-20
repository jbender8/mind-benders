import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Navigation from './components/Navigation/Navigation'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import News from './pages/News/News'
import Gallery from './pages/Gallery/Gallery'
import { theme } from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
