import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import ContactForm from '../../components/ContactForm/ContactForm'
import easterImage from '../../images/holidays-events/easter.jpeg'
import storefrontImage from '../../images/store-front/storefront.jpeg'

export default function About() {
  return (
    <Box component="main">

      {/* ── HERO ── */}
      <Box sx={{ position: 'relative', minHeight: '55vh', backgroundImage: `url(${easterImage})`, backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'center' }}>
        <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(37,65,23,0.88) 0%, rgba(37,65,23,0.6) 55%, rgba(0,0,0,0.3) 100%)' }} />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, py: 8 }}>
          <Box sx={{ maxWidth: 600, color: 'white' }}>
            <Typography variant="overline" sx={{ color: '#c8e6b0', fontWeight: 700, letterSpacing: '0.2em', display: 'block', mb: 2 }}>
              Mind Benders Puzzles &amp; Games
            </Typography>
            <Typography variant="h1" sx={{ fontSize: { xs: '2.8rem', md: '4.5rem' }, lineHeight: 1.05, mb: 2, textShadow: '0 2px 10px rgba(0,0,0,0.4)' }}>
              About Us
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 300, opacity: 0.9, fontSize: { xs: '1rem', md: '1.2rem' } }}>
              Family owned. Community loved. Fun for all ages.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* ── OUR STORY ── */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Grid container spacing={{ xs: 4, md: 8 }} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box component="img" src={storefrontImage} alt="Mind Benders storefront" sx={{ width: '100%', height: { xs: 280, md: 460 }, objectFit: 'cover', borderRadius: 4, boxShadow: '0 24px 64px rgba(0,0,0,0.14)' }} />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: '0.18em', display: 'block', mb: 1.5 }}>
              Our Story
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.8rem', md: '2.6rem' }, mb: 2.5 }}>
              More Than a Game Store
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.85, mb: 2 }}>
              Mind Benders Puzzles and Games is a family fun store for all ages, specializing in logic games and brain teasers. This in-store experience is not something you can find online — play, laugh, think, and discover.
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.85, mb: 3.5 }}>
              We are all about unplugged play and fun for your brain. Many unique award-winning games to choose from. Come in and let us help you find your next favorite!
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              {['Family Owned', 'Award-Winning Selection', 'All Ages Welcome'].map((label) => (
                <Chip key={label} label={label} size="small" sx={{ bgcolor: '#f0f7ec', color: 'primary.main', border: '1px solid #c8e6b0', textTransform: 'uppercase', fontSize: '0.72rem', letterSpacing: '0.04em' }} />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* ── INFO CARDS ── */}
      <Box sx={{ bgcolor: 'background.paper', py: { xs: 8, md: 10 } }}>
        <Container maxWidth="md">
          <Grid container spacing={3}>
            {/* Location */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card sx={{ bgcolor: 'primary.main', color: 'white', borderRadius: 4, boxShadow: '0 8px 32px rgba(37,65,23,0.25)', height: '100%' }}>
                <CardContent sx={{ p: { xs: 4, md: 5 } }}>
                  <Typography variant="overline" sx={{ color: '#c8e6b0', fontWeight: 700, letterSpacing: '0.2em', display: 'block', mb: 2 }}>
                    Find Us
                  </Typography>
                  <Typography variant="h5" sx={{ color: 'white', fontWeight: 800, mb: 2.5 }}>
                    Visit the Store
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, mb: 1.5 }}>
                    1442 119th Street<br />Whiting, IN 46394
                  </Typography>
                  <Typography component="a" href="tel:2192374386" variant="h6" sx={{ color: '#c8e6b0', textDecoration: 'none', fontWeight: 700, display: 'block', mb: 3, '&:hover': { opacity: 0.8 } }}>
                    (219) 237-4FUN
                  </Typography>
                  <Button variant="contained" color="secondary" href="https://maps.google.com/?q=1442+119th+Street+Whiting+IN+46394" target="_blank" rel="noopener noreferrer" sx={{ borderRadius: 50 }}>
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            {/* Hours */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Card sx={{ bgcolor: 'primary.main', color: 'white', borderRadius: 4, boxShadow: '0 8px 32px rgba(37,65,23,0.25)', height: '100%' }}>
                <CardContent sx={{ p: { xs: 4, md: 5 } }}>
                  <Typography variant="overline" sx={{ color: '#c8e6b0', fontWeight: 700, letterSpacing: '0.2em', display: 'block', mb: 2 }}>
                    When We're Open
                  </Typography>
                  <Typography variant="h5" sx={{ color: 'white', fontWeight: 800, mb: 3 }}>
                    Store Hours
                  </Typography>
                  {[
                    { day: 'Tue & Wed', hours: '10:30 AM – 5:00 PM' },
                    { day: 'Thurs & Fri', hours: '10:30 AM – 6:30 PM' },
                    { day: 'Saturday', hours: '10:00 AM – 3:00 PM' },
                    { day: 'Sun & Mon', hours: 'Closed', closed: true },
                  ].map(({ day, hours, closed }) => (
                    <Box key={day}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 1.5, opacity: closed ? 0.38 : 1 }}>
                        <Typography variant="body2" sx={{ color: 'white' }}>{day}</Typography>
                        <Typography variant="body2" sx={{ color: 'white', fontWeight: closed ? 400 : 600 }}>{hours}</Typography>
                      </Box>
                      <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />
                    </Box>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ── MAP ── */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
        <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: '0.18em', display: 'block', mb: 1.5, textAlign: 'center' }}>
          Our Location
        </Typography>
        <Typography variant="h2" sx={{ fontSize: { xs: '1.6rem', md: '2.2rem' }, textAlign: 'center', mb: 4 }}>
          Find Us On The Map
        </Typography>
        <Box sx={{ borderRadius: 4, overflow: 'hidden', boxShadow: '0 8px 40px rgba(0,0,0,0.1)' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2991.3686831844433!2d-87.47796!3d41.66089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880f85c1e7c1c1c1%3A0x1c1c1c1c1c1c1c1c!2s1442%20119th%20St%2C%20Whiting%2C%20IN%2046394!5e0!3m2!1sen!2sus!4v1234567890"
            width="100%"
            height="460"
            style={{ border: 0, display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mind Benders Location Map"
          />
        </Box>
      </Container>

      {/* ── CONNECT ── */}
      <Box sx={{ bgcolor: 'background.paper', borderTop: '3px solid', borderColor: 'secondary.main', py: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 6, md: 10 }} sx={{ alignItems: 'flex-start' }}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: '0.18em', display: 'block', mb: 1.5 }}>
                Stay Connected
              </Typography>
              <Typography variant="h2" sx={{ fontSize: { xs: '1.6rem', md: '2.2rem' }, mb: 2 }}>
                Follow Our Journey
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 4 }}>
                Keep up with the latest from Mind Benders — new products, in-store events, and more.
              </Typography>
              <Stack spacing={2}>
                <Button variant="contained" size="large" startIcon={<Box component="img" src="https://cdn.simpleicons.org/facebook/ffffff" alt="" sx={{ width: 20, height: 20 }} />} href="https://www.facebook.com/MindBenderspuzzlesandgames" target="_blank" rel="noopener noreferrer" sx={{ bgcolor: '#1877F2', borderRadius: 2, justifyContent: 'flex-start', px: 3, '&:hover': { bgcolor: '#1565c0' } }}>
                  Follow on Facebook
                </Button>
                <Button variant="contained" size="large" startIcon={<Box component="img" src="https://cdn.simpleicons.org/instagram/ffffff" alt="" sx={{ width: 20, height: 20 }} />} href="https://www.instagram.com/mind_benders_puzzles_and_games/" target="_blank" rel="noopener noreferrer" sx={{ background: 'linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)', borderRadius: 2, justifyContent: 'flex-start', px: 3, '&:hover': { opacity: 0.88 } }}>
                  Follow on Instagram
                </Button>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Card sx={{ borderRadius: 4, boxShadow: '0 4px 24px rgba(0,0,0,0.07)', border: '1px solid', borderColor: 'divider' }}>
                <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                  <ContactForm />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

    </Box>
  )
}
