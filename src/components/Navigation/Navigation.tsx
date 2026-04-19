import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'
import './Navigation.css'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <img src={logo} alt="Mind Benders Logo" className="nav-logo-img" />
          Mind Benders
        </Link>

        <div className="hamburger" onClick={toggleMenu}>
          <span className={isMenuOpen ? 'bar active' : 'bar'}></span>
          <span className={isMenuOpen ? 'bar active' : 'bar'}></span>
          <span className={isMenuOpen ? 'bar active' : 'bar'}></span>
        </div>

        <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={closeMenu}>
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/news" className="nav-link" onClick={closeMenu}>
              News
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/gallery" className="nav-link" onClick={closeMenu}>
              Gallery
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
