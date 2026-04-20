import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Paper from '@mui/material/Paper'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import SafeImg from '../../components/SafeImg/SafeImg'

// Hero
import xmasFull from '../../images/store-front/xmas-full.jpg'

// Highlight photos
import award10year from '../../images/awards-ack/award10year.jpg'
import perogiFest from '../../images/holidays-events/perogi-fest-puzzle.jpg'
import easterBunny from '../../images/holidays-events/easterbunny.jpg'
import halloween1 from '../../images/holidays-events/halloween1.jpg'
import joelAmyPerade from '../../images/the-owners/joel-amy-perade.jpg'

// Past event flyers (events/)
import evt4thJuly from '../../images/events/event-4thjuly.jpg'
import evtBeerWine from '../../images/events/event-beer-and-wine.jpg'
import evtCocoCider from '../../images/events/event-coco-cider.jpg'
import evtDinoDays from '../../images/events/event-dino-days24.jpg'
import evtEaster24 from '../../images/events/event-easter-24.jpg'
import evtEaster26 from '../../images/events/event-easter26.jpg'
import evtGameNight from '../../images/events/event-game-night.jpg'
import evtGameNight26 from '../../images/events/event-game-night26.jpg'
import evtJuly4th from '../../images/events/event-july4th.jpg'
import evtKingDomino from '../../images/events/event-king-dominio-turny.jpg'
import evtLemonade25 from '../../images/events/event-lemonaid25.jpg'
import evtLoveLetter from '../../images/events/event-love-letter.jpg'
import evtMay425 from '../../images/events/event-may4-25.jpg'
import evtMay4th from '../../images/events/event-may4th.png'
import evtPerogiFest from '../../images/events/event-perogi-fest.jpg'
import evtPuzzleSwap from '../../images/events/event-puzzle-swap.jpg'
import evtScoobyClue from '../../images/events/event-scoobyclue.jpg'
import evtSmallBiz from '../../images/events/event-small-business-saturday.jpg'
import evtSuperMario from '../../images/events/event-super-mario-day.jpg'
import evtSweets from '../../images/events/event-sweets-and-treets.jpg'
import evtTicketRide from '../../images/events/event-ticket-to-ride-turny.jpg'
import evtVday from '../../images/events/event-vday.jpg'
import evtWineShop from '../../images/events/event-wine-shop.jpg'
import evtXmas from '../../images/events/event-xmas.jpg'

const highlights = [
  {
    img: award10year,
    alt: '10 Year Anniversary Award',
    label: 'Milestone',
    title: '10 Years of Mind Benders!',
    desc: 'We are proud to have served the Whiting community for over a decade. Thank you to every customer who has been part of our journey.',
    link: null,
    linkLabel: null,
  },
  {
    img: perogiFest,
    alt: 'Mind Benders at Pierogi Fest',
    label: 'Community Event',
    title: 'Pierogi Fest',
    desc: 'Every summer, Mind Benders heads to Whiting\'s famous Pierogi Fest — one of the largest food festivals in the Midwest! We set up right in the heart of the action, bringing puzzles and games for the whole community to enjoy. Come find us and play a round!',
    link: 'https://www.pierogifest.net/',
    linkLabel: 'Visit Pierogi Fest',
  },
  {
    img: easterBunny,
    alt: 'Easter fun at Mind Benders',
    label: 'Seasonal',
    title: 'Easter at the Store',
    desc: 'Spring is always fun at Mind Benders! We love celebrating the seasons with our customers and the community.',
    link: null,
    linkLabel: null,
  },
  {
    img: halloween1,
    alt: 'Halloween at Mind Benders',
    label: 'Seasonal',
    title: 'Halloween Fun',
    desc: 'Things get spooky at Mind Benders every October! We love participating in Trunk or Treat events around the community. We\'re also proud to be part of Wickedly Whiting — Whiting\'s own Halloween celebration filled with costumes, fun, and community spirit. Stop by our booth for games, candy, and Halloween surprises for the whole family!',
    link: 'https://www.wickedlywhiting.com/',
    linkLabel: 'Wickedly Whiting',
  },
  {
    img: joelAmyPerade,
    alt: 'Mind Benders at a community event',
    label: 'Community',
    title: 'Community Events',
    desc: 'Mind Benders loves being part of the Whiting community beyond our storefront! You\'ll find us participating in local events throughout the year — from parades and festivals to pop-ups and neighborhood celebrations. Check out what\'s happening in Whiting and come find us out there!',
    link: 'https://whitingevents.com/events/',
    linkLabel: 'Whiting Events Calendar',
  },
  {
    img: xmasFull,
    alt: 'Christmas at Mind Benders',
    label: 'Seasonal',
    title: 'Christmas at Mind Benders',
    desc: 'The store comes alive every holiday season! Stop in for festive finds, unique gift ideas, and a little holiday magic. Puzzles, games, and brain teasers make the perfect gift for everyone on your list.',
    link: null,
    linkLabel: null,
  },
]

const pastEvents = [
  { src: evtGameNight26, alt: 'Game Night 2026' },
  { src: evtEaster26, alt: 'Easter 2026' },
  { src: evtMay425, alt: 'May the 4th Be With You 2025' },
  { src: evtLemonade25, alt: 'Lemonade Stand 2025' },
  { src: evtGameNight, alt: 'Game Night' },
  { src: evtSmallBiz, alt: 'Small Business Saturday' },
  { src: evtXmas, alt: 'Christmas Event' },
  { src: evtTicketRide, alt: 'Ticket to Ride Tournament' },
  { src: evtKingDomino, alt: 'King Domino Tournament' },
  { src: evtPerogiFest, alt: 'Pierogi Fest' },
  { src: evtDinoDays, alt: 'Dino Days 2024' },
  { src: evtEaster24, alt: 'Easter 2024' },
  { src: evtMay4th, alt: 'May the 4th Be With You' },
  { src: evtPuzzleSwap, alt: 'Puzzle Swap' },
  { src: evtSuperMario, alt: 'Super Mario Day' },
  { src: evtScoobyClue, alt: 'Scooby Clue Event' },
  { src: evtLoveLetter, alt: 'Love Letter Event' },
  { src: evtSweets, alt: 'Sweets & Treats' },
  { src: evtVday, alt: "Valentine's Day Event" },
  { src: evtBeerWine, alt: 'Beer & Wine Event' },
  { src: evtCocoCider, alt: 'Cocoa & Cider Event' },
  { src: evtWineShop, alt: 'Wine & Shop Event' },
  { src: evt4thJuly, alt: '4th of July' },
  { src: evtJuly4th, alt: '4th of July Celebration' },
]

export default function News() {
  const facebookPageUrl = encodeURIComponent('https://www.facebook.com/MindBenderspuzzlesandgames')
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const isMedium = useMediaQuery(theme.breakpoints.down('md'))
  const cols = isMobile ? 2 : isMedium ? 3 : 4

  return (
    <Box component="main">

      {/* ── HERO ── */}
      <Box sx={{ position: 'relative', minHeight: '50vh', backgroundImage: `url(${xmasFull})`, backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'center' }}>
        <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(37,65,23,0.88) 0%, rgba(37,65,23,0.6) 55%, rgba(0,0,0,0.3) 100%)' }} />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, py: 8 }}>
          <Box sx={{ maxWidth: 600, color: 'white' }}>
            <Typography variant="overline" sx={{ color: '#c8e6b0', fontWeight: 700, letterSpacing: '0.2em', display: 'block', mb: 2 }}>
              Mind Benders Puzzles &amp; Games
            </Typography>
            <Typography variant="h1" sx={{ fontSize: { xs: '2.8rem', md: '4.5rem' }, lineHeight: 1.05, mb: 2, textShadow: '0 2px 10px rgba(0,0,0,0.4)' }}>
              What's New
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 300, opacity: 0.9, fontSize: { xs: '1rem', md: '1.2rem' } }}>
              Events, milestones, and updates from the store.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* ── STORE HIGHLIGHTS ── */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
        <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: '0.18em', display: 'block', mb: 1.5 }}>
          Store Highlights
        </Typography>
        <Typography variant="h2" sx={{ fontSize: { xs: '1.6rem', md: '2.2rem' }, mb: 5 }}>
          Events &amp; Milestones
        </Typography>
        <Grid container spacing={3}>
          {highlights.map((h) => (
            <Grid key={h.title} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 3, boxShadow: '0 2px 16px rgba(0,0,0,0.07)', transition: 'transform 0.25s, box-shadow 0.25s', '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 8px 32px rgba(0,0,0,0.13)' } }}>
                <SafeImg src={h.img} alt={h.alt} height={220} objectFit="cover" />
                <CardContent sx={{ p: 3, flexGrow: 1 }}>
                  <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: '0.15em', display: 'block', mb: 0.5 }}>
                    {h.label}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                    {h.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.75 }}>
                    {h.desc}
                  </Typography>
                </CardContent>
                {h.link && (
                  <CardActions sx={{ px: 3, pb: 3 }}>
                    <Button variant="outlined" size="small" href={h.link} target="_blank" rel="noopener noreferrer" sx={{ borderRadius: 2 }}>
                      {h.linkLabel}
                    </Button>
                  </CardActions>
                )}
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* ── PAST EVENTS ── */}
      <Box sx={{ bgcolor: 'background.paper', borderTop: '3px solid', borderColor: 'secondary.main', py: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: '0.18em', display: 'block', mb: 1.5 }}>
            Look Back
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.6rem', md: '2.2rem' }, mb: 1.5 }}>
            Past Events
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 5 }}>
            From game nights to seasonal celebrations — we love hosting events for our community.
          </Typography>
          <ImageList cols={cols} gap={12} variant="masonry">
            {pastEvents.map((evt) => (
              <ImageListItem
                key={evt.src}
                sx={{
                  overflow: 'hidden',
                  borderRadius: 2,
                  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                  '&:hover img': { transform: 'scale(1.03)' },
                }}
              >
                <SafeImg src={evt.src} alt={evt.alt} style={{ transition: 'transform 0.3s ease' }} />
              </ImageListItem>
            ))}
          </ImageList>
          <Box sx={{ mt: 6, p: { xs: 3, md: 4 }, bgcolor: 'primary.main', borderRadius: 3, textAlign: 'center' }}>
            <Typography variant="h6" sx={{ color: 'white', fontWeight: 700, mb: 1 }}>
              Want to know what's coming up next?
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', mb: 3 }}>
              Follow us on Facebook and Instagram for upcoming events, new arrivals, and store news.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button variant="contained" href="https://www.facebook.com/MindBenderspuzzlesandgames" target="_blank" rel="noopener noreferrer" sx={{ bgcolor: '#1877F2', borderRadius: 2, '&:hover': { bgcolor: '#1565c0' } }}>
                Follow on Facebook
              </Button>
              <Button variant="contained" href="https://www.instagram.com/mind_benders_puzzles_and_games/" target="_blank" rel="noopener noreferrer" sx={{ background: 'linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)', borderRadius: 2, '&:hover': { opacity: 0.88 } }}>
                Follow on Instagram
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── FACEBOOK FEED ── */}
      <Box sx={{ bgcolor: 'white', borderTop: '3px solid', borderColor: 'secondary.main', py: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: '0.18em', display: 'block', mb: 1.5, textAlign: 'center' }}>
            Stay Up To Date
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.6rem', md: '2.2rem' }, textAlign: 'center', mb: 1 }}>
            Latest from Facebook
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', textAlign: 'center', mb: 5 }}>
            Follow us for daily updates, new arrivals, and upcoming events.
          </Typography>
          <Box sx={{ maxWidth: 750, mx: 'auto' }}>
            <Paper elevation={0} sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 3, overflow: 'hidden' }}>
              <iframe
                title="Facebook Page Feed"
                src={`https://www.facebook.com/plugins/page.php?href=${facebookPageUrl}&tabs=timeline&width=750&height=1000&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=`}
                width="100%"
                height="1000"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                style={{ display: 'block', border: 'none' }}
              />
            </Paper>
          </Box>
          <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'center', mt: 2, fontStyle: 'italic' }}>
            Live updates from the Mind Benders Facebook page.
          </Typography>
        </Container>
      </Box>

    </Box>
  )
}
