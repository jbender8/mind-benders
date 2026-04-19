import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation/Navigation'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import News from './pages/News/News'
import Gallery from './pages/Gallery/Gallery'
import './App.css'
import './components/Navigation/Navigation.css'

function App() {
  return (
    <Router>
      <>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </>
    </Router>
  )
}

export default App
