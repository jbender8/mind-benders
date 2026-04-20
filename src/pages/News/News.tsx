import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Paper from '@mui/material/Paper'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'

// Hero
import xmasFull from '../../images/store-front/xmas-full.jpg'

// Highlight photos
import award10year from '../../images/awards-ack/award10year.jpg'
import perogiFest from '../../images/holidays-events/perogi-fest-puzzle.jpg'
import toyShow from '../../images/holidays-events/toy-show1.jpg'
import easterBunny from '../../images/holidays-events/easterbunny.jpg'
import halloween1 from '../../images/holidays-events/halloween1.jpg'

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
import evtLemonade24 from '../../images/events/event-lemonaid24.jpg'
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
  },
  {
    img: perogiFest,
    alt: 'Mind Benders at Pierogi Fest',
    label: 'Community Event',
    title: 'Pierogi Fest',
    desc: 'Mind Benders loves being part of the Whiting community. We always bring puzzles and games to the annual Pierogi Fest!',
  },
  {
    img: toyShow,
    alt: 'Mind Benders at the Toy Show',
    label: 'Event',
    title: 'Toy Show',
    desc: 'We show off our amazing selection at local toy shows — always a great place to discover something new and exciting.',
  },
  {
    img: easterBunny,
    alt: 'Easter fun at Mind Benders',
    label: 'Seasonal',
    title: 'Easter at the Store',
    desc: 'Spring is always fun at Mind Benders! We love celebrating the seasons with our customers and the community.',
  },
  {
    img: halloween1,
    alt: 'Halloween at Mind Benders',
    label: 'Seasonal',
    title: 'Halloween Fun',
    desc: 'Things get spooky at Mind Benders every October! Come in for some Halloween-themed games and treats.',
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
  { src: evtLemonade24, alt: 'Lemonade Stand 2024' },
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
                <CardMedia component="img" image={h.img} alt={h.alt} sx={{ height: 220, objectFit: 'cover' }} />
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
                <img
                  src={evt.src}
                  alt={evt.alt}
                  loading="lazy"
                  style={{ display: 'block', width: '100%', transition: 'transform 0.3s ease' }}
                />
              </ImageListItem>
            ))}
          </ImageList>
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
