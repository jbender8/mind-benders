import ContactForm from '../../components/ContactForm/ContactForm'
import easterImage from '../../images/easter.jpeg'
import storefrontImage from '../../images/storefront.jpeg'
import './About.css'

export default function About() {
  return (
    <main className="about-page">

      {/* HERO BANNER */}
      <section className="about-hero" style={{ backgroundImage: `url(${easterImage})` }}>
        <div className="about-hero-overlay">
          <div className="about-hero-content">
            <span className="about-eyebrow">Mind Benders Puzzles &amp; Games</span>
            <h1>About Us</h1>
            <p>Family owned. Community loved. Fun for all ages.</p>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="about-story">
        <div className="about-story-inner">
          <div className="about-story-image">
            <img src={storefrontImage} alt="Mind Benders storefront" />
          </div>
          <div className="about-story-text">
            <span className="ab-label">Our Story</span>
            <h2>More Than a Game Store</h2>
            <p>Mind Benders Puzzles and Games is a family fun store for all ages, specializing in logic games and brain teasers. This in-store experience is not something you can find online — play, laugh, think, and discover.</p>
            <p>We are all about unplugged play and fun for your brain. Many unique award-winning games to choose from. Come in and let us help you find your next favorite!</p>
            <div className="about-story-badges">
              <span className="ab-badge">Family Owned</span>
              <span className="ab-badge">Award-Winning Selection</span>
              <span className="ab-badge">All Ages Welcome</span>
            </div>
          </div>
        </div>
      </section>

      {/* INFO CARDS */}
      <section className="about-info-section">
        <div className="about-info-inner">
          <div className="about-location-card">
            <span className="ab-label light">Find Us</span>
            <h3>Visit the Store</h3>
            <address>
              <p>1442 119th Street</p>
              <p>Whiting, IN 46394</p>
            </address>
            <a href="tel:2192374386" className="about-phone">(219) 237-4FUN</a>
            <a
              href="https://maps.google.com/?q=1442+119th+Street+Whiting+IN+46394"
              target="_blank"
              rel="noopener noreferrer"
              className="about-directions-btn"
            >
              Get Directions
            </a>
          </div>

          <div className="about-hours-card">
            <span className="ab-label light">When We're Open</span>
            <h3>Store Hours</h3>
            <ul className="ab-hours-list">
              <li><span>Tue &amp; Wed</span><span>10:30 AM – 5:00 PM</span></li>
              <li><span>Thurs &amp; Fri</span><span>10:30 AM – 6:30 PM</span></li>
              <li><span>Saturday</span><span>10:00 AM – 3:00 PM</span></li>
              <li className="ab-closed"><span>Sun &amp; Mon</span><span>Closed</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="about-map-section">
        <div className="about-map-inner">
          <span className="ab-label">Our Location</span>
          <h2>Find Us On The Map</h2>
          <div className="about-map-frame">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2991.3686831844433!2d-87.47796!3d41.66089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880f85c1e7c1c1c1%3A0x1c1c1c1c1c1c1c1c!2s1442%20119th%20St%2C%20Whiting%2C%20IN%2046394!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="460"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mind Benders Location Map"
            />
          </div>
        </div>
      </section>

      {/* CONNECT */}
      <section className="about-connect-section">
        <div className="about-connect-inner">
          <div className="about-socials-col">
            <span className="ab-label">Stay Connected</span>
            <h2>Follow Our Journey</h2>
            <p>Keep up with the latest from Mind Benders — new products, in-store events, and more.</p>
            <div className="ab-social-links">
              <a
                href="https://www.facebook.com/MindBenderspuzzlesandgames"
                target="_blank"
                rel="noopener noreferrer"
                className="ab-social-btn fb"
              >
                <img src="https://cdn.simpleicons.org/facebook/ffffff" alt="Facebook" className="ab-social-icon" />
                Facebook
              </a>
              <a
                href="https://www.instagram.com/mind_benders_puzzles_and_games/"
                target="_blank"
                rel="noopener noreferrer"
                className="ab-social-btn ig"
              >
                <img src="https://cdn.simpleicons.org/instagram/ffffff" alt="Instagram" className="ab-social-icon" />
                Instagram
              </a>
            </div>
          </div>

          <div className="about-form-col">
            <ContactForm />
          </div>
        </div>
      </section>

    </main>
  )
}
