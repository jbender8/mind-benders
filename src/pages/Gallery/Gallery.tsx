import logo from '../../images/logo.png'
import joelAmy from '../../images/joel_amy.jpeg'
import storefront from '../../images/storefront.jpeg'
import easter from '../../images/easter.jpeg'
import puzzles from '../../images/mind-benders-puzzles.jpg'
import './Gallery.css'

const images = [
  { src: storefront, alt: 'Mind Benders storefront' },
  { src: puzzles, alt: 'Mind Benders puzzles and games' },
  { src: joelAmy, alt: 'Joel and Amy' },
  { src: easter, alt: 'Easter at Mind Benders' },
  { src: logo, alt: 'Mind Benders logo' },
]

export default function Gallery() {
  return (
    <main className="main-content page-content">
      <section className="page-section">
        <h1>Gallery</h1>
        <div className="gallery-grid">
          {images.map((img, index) => (
            <div key={index} className="gallery-item">
              <img src={img.src} alt={img.alt} />
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
