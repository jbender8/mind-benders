import './News.css'

export default function News() {
  const facebookPageUrl = encodeURIComponent('https://www.facebook.com/MindBenderspuzzlesandgames')

  return (
    <main className="main-content page-content">
      <section className="page-section">
        <h1>Latest from Facebook</h1>

        <div className="facebook-feed-section">
          <div className="facebook-feed-wrapper">
            <iframe
              title="Facebook Page Feed"
              src={`https://www.facebook.com/plugins/page.php?href=${facebookPageUrl}&tabs=timeline&width=700&height=1000&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=`}
              width="100%"
              height="1000"
              scrolling="no"
              frameBorder={0}
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>
          <p className="facebook-note">Live updates from the Mind Benders Facebook page.</p>
        </div>
      </section>
    </main>
  )
}
