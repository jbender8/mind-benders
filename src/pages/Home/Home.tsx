import './Home.css'
import joelAmyImage from '../../images/joel_amy.jpeg'

export default function Home() {
  return (
    <main className="main-content">
      <section className="welcome-section">
        <div className="welcome-content">
          <div className="welcome-text">
            <h1>Welcome to Mind Benders!</h1>
            <p>Your one-stop shop for puzzles, brain teasers, and fun games for all ages. Explore our wide selection of products designed to challenge your mind and spark creativity.</p>
          </div>
          <div className="welcome-image">
            <img src={joelAmyImage} alt="Joel and Amy at Mind Benders" />
          </div>
        </div>
      </section>
      <section className="store-location">
        <h2>Our Location</h2>
        <div className="location-info">
          <p className="address">1442 119th Street</p>
          <p className="city">Whiting, IN 46394</p>
          <p className="phone">(219) 237-4FUN</p>
          <div className="hours">
            <p><strong>Store Hours</strong></p>
            <p>Tue & Wed: 10:30 AM - 5:00 PM</p>
            <p>Thurs & Fri: 10:30 AM - 6:30 PM</p>
            <p>Sat: 10:00 AM - 3:00 PM</p>
            <p>Closed Sun & Mon</p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2 className="about-title">The Smart Fun Store For All Ages</h2>

        <div className="available-items">
          <h3>Available In-Store</h3>
          <ul>
            <li>Logic Challenging games - Brain Games - Brain Teaser Puzzles</li>
            <li>Award Winning Family Fun & Board Games - Games Of Strategy</li>
            <li>New Jigsaw, Pixel, Crystal, Metal, 3D & Wood Crafted puzzles</li>
            <li>Learning Aides - Early Development Games - Science</li>
            <li>Engineering - Robotics - Coding - Magic - Arts & Craft Kits</li>
            <li>Fidget Items - Sensory - Cubes - Thinking Putty</li>
            <li>AND much more</li>
          </ul>
        </div>

        <div className="categories">
          <div className="category">
            <h3>Arts & Crafts</h3>
            <p>We have products that can expand the mind. Science, Art, and skill building games that will make you want to do more.</p>
          </div>

          <div className="category">
            <h3>Brain Teasers</h3>
            <p>Fun for brain teaser enthusiasts of all ages, our selection of brainteasers will keep you busy for hours</p>
          </div>

          <div className="category">
            <h3>Puzzles</h3>
            <p>From the simple puzzles to the advanced puzzle, we have a variety of them.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
