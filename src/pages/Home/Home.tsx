import './Home.css'
import joelAmyImage from '../../images/joel_amy.jpeg'
import storefrontImage from '../../images/storefront.jpeg'
import puzzlesImage from '../../images/mind-benders-puzzles.jpg'

export default function Home() {
  return (
    <main className="home">

      {/* HERO */}
      <section className="hero" style={{ backgroundImage: `url(${storefrontImage})` }}>
        <div className="hero-overlay">
          <div className="hero-content">
            <p className="hero-eyebrow">Whiting, Indiana's Premier Game Store</p>
            <h1>The Smart Fun Store<br />For All Ages</h1>
            <p className="hero-sub">Puzzles · Brain Teasers · Board Games · Arts &amp; Crafts · and More</p>
            {/* <div className="hero-actions">
              <a href="tel:2192374386" className="btn btn-primary">Call Us Today</a>
              <a
                href="https://www.facebook.com/MindBenderspuzzlesandgames"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Follow on Facebook
              </a>
            </div> */}
          </div>
        </div>
      </section>

      {/* MEET THE OWNERS */}
      <section className="owners-section">
        <div className="owners-inner">
          <div className="owners-image">
            <img src={joelAmyImage} alt="Joel and Amy, owners of Mind Benders" />
          </div>
          <div className="owners-text">
            <span className="section-label">Our Story</span>
            <h2>Welcome to Mind Benders!</h2>
            <p>Mind Benders Puzzles and Games is a family fun store for all ages, specializing in logic games and brain teasers. This in-store experience is something you simply can't find online — play, laugh, think, and discover.</p>
            <p>We're all about unplugged play and fun for your brain. Come explore our wide selection of award-winning games, puzzles, and kits designed to challenge your mind and spark creativity.</p>
            <div className="owners-badges">
              <span className="badge">Family Owned</span>
              <span className="badge">Award-Winning Products</span>
              <span className="badge">All Ages Welcome</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S IN STORE */}
      <section className="products-section">
        <div className="products-inner">
          <span className="section-label light">What We Carry</span>
          <h2>Something For Everyone</h2>
          <div className="product-grid">
            <div className="product-card">
              <div className="product-card-icon">🧩</div>
              <h3>Puzzles</h3>
              <p>Jigsaw, Pixel, Crystal, Metal, 3D &amp; Wood Crafted puzzles for all skill levels.</p>
            </div>
            <div className="product-card">
              <div className="product-card-icon">🎲</div>
              <h3>Board &amp; Strategy Games</h3>
              <p>Award-winning family fun and strategy games that bring people together.</p>
            </div>
            <div className="product-card">
              <div className="product-card-icon">🧠</div>
              <h3>Brain Teasers</h3>
              <p>Logic-challenging games and brain teasers that keep you busy for hours.</p>
            </div>
            <div className="product-card">
              <div className="product-card-icon">🎨</div>
              <h3>Arts &amp; Crafts</h3>
              <p>Science, art, and skill-building kits that expand the mind for all ages.</p>
            </div>
            <div className="product-card">
              <div className="product-card-icon">🤖</div>
              <h3>STEM &amp; Robotics</h3>
              <p>Engineering, robotics, coding, and science kits to inspire young minds.</p>
            </div>
            <div className="product-card">
              <div className="product-card-icon">🌀</div>
              <h3>Fidgets &amp; Sensory</h3>
              <p>Fidget items, sensory toys, cubes, and thinking putty for every need.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FULL-WIDTH QUOTE BANNER */}
      <section className="image-banner">
        <img src={puzzlesImage} alt="Mind Benders puzzles and games selection" />
        <div className="image-banner-overlay">
          <p>"Unplugged play and fun for your brain."</p>
        </div>
      </section>

      {/* VISIT US */}
      <section className="visit-section">
        <div className="visit-inner">
          <div className="visit-text">
            <span className="section-label">Come See Us</span>
            <h2>Visit the Store</h2>
            <p className="visit-address">
              1442 119th Street<br />Whiting, IN 46394
            </p>
            <a href="tel:2192374386" className="visit-phone">(219) 237-4FUN</a>
            <div className="visit-socials">
              <a
                href="https://www.facebook.com/MindBenderspuzzlesandgames"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn fb"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/mind_benders_puzzles_and_games/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn ig"
              >
                Instagram
              </a>
            </div>
          </div>
          <div className="hours-card">
            <h3>Store Hours</h3>
            <ul className="hours-list">
              <li><span>Tue &amp; Wed</span><span>10:30 AM – 5:00 PM</span></li>
              <li><span>Thurs &amp; Fri</span><span>10:30 AM – 6:30 PM</span></li>
              <li><span>Saturday</span><span>10:00 AM – 3:00 PM</span></li>
              <li className="closed"><span>Sun &amp; Mon</span><span>Closed</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="reviews-section">
        <h2 className="reviews-title">Reviews &amp; Rewards</h2>
        <p className="reviews-subtitle">See what our customers are saying!</p>

        <div className="reviews-columns">
          <div className="reviews-platform">
            <div className="platform-header google-header">
              <span className="platform-icon">G</span>
              <h3>Google Reviews</h3>
              <div className="platform-rating">
                <span className="stars">★★★★★</span>
                <span className="rating-num">5.0</span>
              </div>
            </div>
            <div className="review-cards">
              <div className="review-card">
                <div className="reviewer-info">
                  <span className="reviewer-name">Marci B.</span>
                  <span className="review-stars">★★★★★</span>
                </div>
                <p className="review-text">"Amazing little gem of a store! Joel and Amy are so knowledgeable and helped us find the perfect puzzle for our family game night. We'll definitely be back!"</p>
              </div>
              <div className="review-card">
                <div className="reviewer-info">
                  <span className="reviewer-name">Tom R.</span>
                  <span className="review-stars">★★★★★</span>
                </div>
                <p className="review-text">"Best puzzle and game store around. Incredible selection and the staff really knows their stuff. Highly recommend to anyone who loves brain teasers!"</p>
              </div>
              <div className="review-card">
                <div className="reviewer-info">
                  <span className="reviewer-name">Sarah K.</span>
                  <span className="review-stars">★★★★★</span>
                </div>
                <p className="review-text">"Love this store! They have games I've never seen anywhere else. Great place to find unique gifts for all ages."</p>
              </div>
            </div>
            <a
              className="review-cta"
              href="https://maps.google.com/?q=Mind+Benders+Puzzles+and+Games+Whiting+IN"
              target="_blank"
              rel="noopener noreferrer"
            >
              Leave a Google Review
            </a>
          </div>

          <div className="reviews-platform">
            <div className="platform-header facebook-header">
              <span className="platform-icon">f</span>
              <h3>Facebook Reviews</h3>
              <div className="platform-rating">
                <span className="stars">★★★★★</span>
                <span className="rating-num">5.0</span>
              </div>
            </div>
            <div className="review-cards">
              <div className="review-card">
                <div className="reviewer-info">
                  <span className="reviewer-name">Lisa M.</span>
                  <span className="review-stars">★★★★★</span>
                </div>
                <p className="review-text">"This store is absolutely wonderful. The owners are warm and welcoming and have put together a fantastic collection. A true community treasure!"</p>
              </div>
              <div className="review-card">
                <div className="reviewer-info">
                  <span className="reviewer-name">Dave P.</span>
                  <span className="review-stars">★★★★★</span>
                </div>
                <p className="review-text">"Came in looking for a gift and left with five things for myself too! Amazing variety and very friendly service."</p>
              </div>
              <div className="review-card">
                <div className="reviewer-info">
                  <span className="reviewer-name">Jen W.</span>
                  <span className="review-stars">★★★★★</span>
                </div>
                <p className="review-text">"My kids absolutely love this store. Every visit we discover something new. The staff always have great recommendations for different age groups."</p>
              </div>
            </div>
            <a
              className="review-cta facebook-cta"
              href="https://www.facebook.com/MindBenderspuzzlesandgames"
              target="_blank"
              rel="noopener noreferrer"
            >
              Leave a Facebook Review
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}
