import './News.css'

export default function News() {
  const newsItems = [
    {
      id: 1,
      title: "New Summer Collection Arrives",
      date: "April 15, 2026",
      content: "Check out our exciting new summer collection of outdoor puzzles and brain games! Perfect for keeping your mind sharp during those sunny days."
    },
    {
      id: 2,
      title: "Grand Reopening Special",
      date: "April 10, 2026",
      content: "Join us for our grand reopening celebration with special discounts on selected items. We've refreshed our store layout and added new sections!"
    },
    {
      id: 3,
      title: "New Robot Building Kits In Stock",
      date: "April 5, 2026",
      content: "We're excited to announce the arrival of our newest robot building kits. Great for kids and adults interested in STEM learning!"
    },
    {
      id: 4,
      title: "Weekly Brain Teaser Challenge",
      date: "March 28, 2026",
      content: "Join our weekly brain teaser challenge! Visit the store to pick up this week's puzzle and test your skills. Winners get a special prize!"
    },
    {
      id: 5,
      title: "Spring Sale Happening Now",
      date: "March 20, 2026",
      content: "Don't miss our spring sale with discounts up to 30% off select puzzles and games. Stock up on your favorites while supplies last!"
    }
  ]

  return (
    <main className="main-content page-content">
      <section className="page-section">
        <h1>News & Updates</h1>
        
        <div className="news-container">
          {newsItems.map((item) => (
            <article key={item.id} className="news-item">
              <div className="news-header">
                <h2>{item.title}</h2>
                <p className="news-date">{item.date}</p>
              </div>
              <p className="news-content">{item.content}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
