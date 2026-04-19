import ContactForm from '../../components/ContactForm/ContactForm'
import './About.css'

export default function About() {
  return (
    <main className="main-content page-content">
      <section className="page-section">
        {/* Hero Section */}
        <div className="about-hero">
          <h1>About Us</h1>
          <div className="about-intro">
            <p>
              Mind Benders puzzles and Games is a family fun store, for all ages, Specializing in logic games and brain teasers, this in store experience is not something that you can buy online. Play, laugh, think and discover. Mind Benders is all about unplugged play and fun for your brain. Many unique award winning games to choose
            </p>
          </div>
        </div>

        {/* About Content with Hours Box */}
        <div className="about-with-hours">
          {/* Location Section */}
          <div className="location-section">
            <h2>Location</h2>
            <div className="location-details">
              <div className="location-info-box">
                <h3>Mind Benders</h3>
                <p>1442 119th Street</p>
                <p>Whiting, IN 46394</p>
              </div>
            </div>
          </div>

          {/* Hours Box */}
          <div className="hours-box">
            <h3>Store Hours</h3>
            <p><strong>Phone:</strong> <br /> (219) 237-4FUN</p>
            <hr />
            <p><strong>Hours:</strong></p>
            <ul>
              <li>Tue & Wed: 10:30 AM - 5:00 PM</li>
              <li>Thurs & Fri: 10:30 AM - 6:30 PM</li>
              <li>Sat: 10:00 AM - 3:00 PM</li>
              <li>Closed Sun & Mon</li>
            </ul>
          </div>
        </div>

        {/* Map Section */}
        <div className="map-section">
          <h2>Find Us On The Map</h2>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2991.3686831844433!2d-87.47796!3d41.66089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880f85c1e7c1c1c1%3A0x1c1c1c1c1c1c1c1c!2s1442%20119th%20St%2C%20Whiting%2C%20IN%2046394!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: '10px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mind Benders Location"
            ></iframe>
          </div>
          <p className="map-note">Click on the map to get directions or view it in full screen</p>
        </div>

        {/* Social Media Section */}
        <div className="socials-section">
          <h2>Follow Us on Socials</h2>
          <div className="socials-links">
            <a
              href="https://www.facebook.com/MindBenderspuzzlesandgames"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link facebook"
            >
              <img src="https://cdn.simpleicons.org/facebook/1877F2" alt="Facebook" className="social-icon" />
              Facebook
            </a>
            <a
              href="https://www.instagram.com/mind_benders_puzzles_and_games/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link instagram"
            >
              <img src="https://cdn.simpleicons.org/instagram/E4405F" alt="Instagram" className="social-icon" />
              Instagram
            </a>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="contact-section">
          <ContactForm />
        </div>
      </section>
    </main>
  )
}
