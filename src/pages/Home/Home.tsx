import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import Rating from '@mui/material/Rating'
import Divider from '@mui/material/Divider'
import Avatar from '@mui/material/Avatar'
import joelAmyImage from '../../images/awards-ack/joel_amy.jpeg'
import storefrontImage from '../../images/store-front/xmas-full.jpg'
import puzzlesImage from '../../images/store-front/spring-store.jpg'

const productCategories = [
  { icon: '🧩', title: 'Puzzles', desc: 'Jigsaw, Pixel, Crystal, Metal, 3D & Wood Crafted puzzles for all skill levels.' },
  { icon: '🎲', title: 'Board & Strategy Games', desc: 'Award-winning family fun and strategy games that bring people together.' },
  { icon: '🧠', title: 'Brain Teasers', desc: 'Logic-challenging games and brain teasers that keep you busy for hours.' },
  { icon: '🎨', title: 'Arts & Crafts', desc: 'Science, art, and skill-building kits that expand the mind for all ages.' },
  { icon: '🤖', title: 'STEM & Robotics', desc: 'Engineering, robotics, coding, and science kits to inspire young minds.' },
  { icon: '🌀', title: 'Fidgets & Sensory', desc: 'Fidget items, sensory toys, cubes, and thinking putty for every need.' },
]

const googleReviews = [
  { name: 'Marci B.', text: '"Amazing little gem of a store! Joel and Amy are so knowledgeable and helped us find the perfect puzzle for our family game night. We\'ll definitely be back!"' },
  { name: 'Tom R.', text: '"Best puzzle and game store around. Incredible selection and the staff really knows their stuff. Highly recommend to anyone who loves brain teasers!"' },
  { name: 'Sarah K.', text: '"Love this store! They have games I\'ve never seen anywhere else. Great place to find unique gifts for all ages."' },
]

const facebookReviews = [
  { name: 'Lisa M.', text: '"This store is absolutely wonderful. The owners are warm and welcoming and have put together a fantastic collection. A true community treasure!"' },
  { name: 'Dave P.', text: '"Came in looking for a gift and left with five things for myself too! Amazing variety and very friendly service."' },
  { name: 'Jen W.', text: '"My kids absolutely love this store. Every visit we discover something new. The staff always have great recommendations for different age groups."' },
]

function ReviewCard({ name, text }: { name: string; text: string }) {
  return (
    <Box sx={{ p: 2, borderLeft: '3px solid', borderColor: 'secondary.main', borderRadius: '0 8px 8px 0', bgcolor: 'white', boxShadow: '0 1px 6px rgba(0,0,0,0.05)' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
        <Typography variant="body2" sx={{ fontWeight: 700 }}>{name}</Typography>
        <Rating value={5} readOnly size="small" />
      </Box>
      <Typography variant="body2" sx={{ color: 'text.secondary', fontStyle: 'italic', lineHeight: 1.7 }}>
        {text}
      </Typography>
    </Box>
  )
}

export default function Home() {
  return (
    <Box component="main">

      {/* ── HERO ── */}
      <Box sx={{ position: 'relative', minHeight: '90vh', backgroundImage: `url(${storefrontImage})`, backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'center' }}>
        <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(37,65,23,0.9) 0%, rgba(37,65,23,0.6) 55%, rgba(0,0,0,0.25) 100%)' }} />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, py: 8 }}>
          <Box sx={{ maxWidth: 680, color: 'white' }}>
            <Typography variant="overline" sx={{ color: '#c8e6b0', letterSpacing: '0.18em', fontWeight: 700, display: 'block', mb: 2 }}>
              Whiting, Indiana's Premier Game Store
            </Typography>
            <Typography variant="h1" sx={{ fontSize: { xs: '2.6rem', sm: '3.5rem', md: '4.5rem' }, lineHeight: 1.05, mb: 2.5, textShadow: '0 2px 10px rgba(0,0,0,0.4)' }}>
              Mind Benders Puzzles &amp; Games
            </Typography>
            <Typography variant="body1" sx={{ fontSize: { xs: '1rem', md: '1.2rem' }, opacity: 0.9, fontWeight: 300, lineHeight: 1.7 }}>
              Puzzles · Brain Teasers · Board Games · Arts &amp; Crafts · and More
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* ── MEET THE OWNERS ── */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Grid container spacing={{ xs: 4, md: 8 }} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box component="img" src={joelAmyImage} alt="Joel and Amy, owners of Mind Benders" sx={{ width: '100%', height: { xs: 300, md: 480 }, objectFit: 'cover', borderRadius: 4, boxShadow: '0 24px 64px rgba(0,0,0,0.14)' }} />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: '0.18em', display: 'block', mb: 1.5 }}>
              Our Story
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.8rem', md: '2.6rem' }, mb: 2.5 }}>
              Welcome to Mind Benders!
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.85, mb: 2 }}>
              Mind Benders Puzzles and Games is a family fun store for all ages, specializing in logic games and brain teasers. This in-store experience is something you simply can't find online — play, laugh, think, and discover.
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.85, mb: 3.5 }}>
              We're all about unplugged play and fun for your brain. Come explore our wide selection of award-winning games, puzzles, and kits designed to challenge your mind and spark creativity.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              {['Family Owned', 'Award-Winning Products', 'All Ages Welcome'].map((label) => (
                <Chip key={label} label={label} size="small" sx={{ bgcolor: '#f0f7ec', color: 'primary.main', border: '1px solid #c8e6b0', textTransform: 'uppercase', fontSize: '0.72rem', letterSpacing: '0.04em' }} />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* ── WHAT WE CARRY ── */}
      <Box sx={{ bgcolor: 'primary.main', py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Typography variant="overline" sx={{ color: '#c8e6b0', fontWeight: 700, letterSpacing: '0.18em', display: 'block', mb: 1.5 }}>
            What We Carry
          </Typography>
          <Typography variant="h2" sx={{ color: 'white', fontSize: { xs: '1.8rem', md: '2.6rem' }, mb: 6 }}>
            Something For Everyone
          </Typography>
          <Grid container spacing={3}>
            {productCategories.map((cat) => (
              <Grid key={cat.title} size={{ xs: 12, sm: 6, md: 4 }}>
                <Card sx={{ height: '100%', borderBottom: '3px solid transparent', transition: 'transform 0.25s, box-shadow 0.25s, border-color 0.25s', '&:hover': { transform: 'translateY(-6px)', boxShadow: '0 12px 40px rgba(0,0,0,0.18)', borderBottomColor: 'secondary.main' } }}>
                  <CardContent sx={{ p: 3.5 }}>
                    <Typography sx={{ fontSize: '2.2rem', mb: 1.5, display: 'block' }}>{cat.icon}</Typography>
                    <Typography variant="h6" sx={{ mb: 1 }}>{cat.title}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.75 }}>{cat.desc}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ── QUOTE BANNER ── */}
      <Box sx={{ position: 'relative', height: { xs: 260, md: 380 }, overflow: 'hidden' }}>
        <Box component="img" src={puzzlesImage} alt="Mind Benders puzzles and games selection" sx={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 60%' }} />
        <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(37,65,23,0.85) 0%, rgba(37,65,23,0.45) 60%, transparent 100%)', display: 'flex', alignItems: 'center', px: { xs: 3, md: '8vw' } }}>
          <Typography variant="h3" sx={{ color: 'white', fontWeight: 300, fontStyle: 'italic', fontSize: { xs: '1.4rem', md: '2.4rem' }, maxWidth: 560, lineHeight: 1.45, textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            "Unplugged play and fun for your brain."
          </Typography>
        </Box>
      </Box>

      {/* ── VISIT US ── */}
      <Container maxWidth="md" sx={{ py: { xs: 8, md: 12 } }}>
        <Grid container spacing={{ xs: 4, md: 6 }} sx={{ alignItems: 'flex-start' }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: '0.18em', display: 'block', mb: 1.5 }}>
              Come See Us
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.8rem', md: '2.4rem' }, mb: 2.5 }}>
              Visit the Store
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 1.5 }}>
              1442 119th Street<br />Whiting, IN 46394
            </Typography>
            <Typography component="a" href="tel:2192374386" variant="h6" sx={{ color: 'secondary.main', textDecoration: 'none', fontWeight: 700, display: 'block', mb: 3, '&:hover': { color: 'secondary.light' } }}>
              (219) 237-4FUN
            </Typography>
            <Stack direction="row" spacing={1.5}>
              <Button variant="contained" href="https://www.facebook.com/MindBenderspuzzlesandgames" target="_blank" rel="noopener noreferrer" sx={{ bgcolor: '#1877F2', borderRadius: 2, '&:hover': { bgcolor: '#1565c0' } }}>
                Facebook
              </Button>
              <Button variant="contained" href="https://www.instagram.com/mind_benders_puzzles_and_games/" target="_blank" rel="noopener noreferrer" sx={{ background: 'linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)', borderRadius: 2, '&:hover': { opacity: 0.88 } }}>
                Instagram
              </Button>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card sx={{ bgcolor: 'primary.main', color: 'white', borderRadius: 4, boxShadow: '0 8px 32px rgba(37,65,23,0.25)' }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="overline" sx={{ color: '#c8e6b0', fontWeight: 700, letterSpacing: '0.2em', display: 'block', mb: 3 }}>
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

      {/* ── REVIEWS ── */}
      <Box sx={{ bgcolor: 'background.paper', borderTop: '3px solid', borderColor: 'secondary.main', py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ textAlign: 'center', fontSize: { xs: '1.6rem', md: '2.2rem' }, mb: 1 }}>
            Reviews &amp; Rewards
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', textAlign: 'center', mb: 6 }}>
            See what our customers are saying!
          </Typography>
          <Grid container spacing={4}>
            {[
              { platform: 'Google', color: '#4285F4', reviews: googleReviews, link: 'https://maps.google.com/?q=Mind+Benders+Puzzles+and+Games+Whiting+IN' },
              { platform: 'Facebook', color: '#1877F2', reviews: facebookReviews, link: 'https://www.facebook.com/MindBenderspuzzlesandgames' },
            ].map(({ platform, color, reviews, link }) => (
              <Grid key={platform} size={{ xs: 12, md: 6 }}>
                <Card variant="outlined" sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 3 }}>
                  <CardContent sx={{ p: 3, flexGrow: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2, pb: 2, borderBottom: '1px solid', borderColor: 'divider' }}>
                      <Avatar sx={{ bgcolor: color, width: 38, height: 38, fontWeight: 900, fontSize: '1rem' }}>
                        {platform[0]}
                      </Avatar>
                      <Typography variant="h6" sx={{ flex: 1, fontSize: '1rem' }}>{platform} Reviews</Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <Rating value={5} readOnly size="small" />
                        <Typography variant="body2" sx={{ fontWeight: 700 }}>5.0</Typography>
                      </Box>
                    </Box>
                    <Stack spacing={1.5}>
                      {reviews.map((r) => <ReviewCard key={r.name} name={r.name} text={r.text} />)}
                    </Stack>
                  </CardContent>
                  <Box sx={{ p: 3, pt: 0 }}>
                    <Button variant="contained" fullWidth href={link} target="_blank" rel="noopener noreferrer" sx={{ bgcolor: color, borderRadius: 2, '&:hover': { opacity: 0.88, bgcolor: color } }}>
                      Leave a {platform} Review
                    </Button>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

    </Box>
  )
}
