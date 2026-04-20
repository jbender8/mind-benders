import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import SafeImg from '../../components/SafeImg/SafeImg'

// store-front/
import pinkStoreFront from '../../images/store-front/pink-store-front.jpg'
import pinkStoreFront2 from '../../images/store-front/pink-store-front2.jpg'
import storeFront from '../../images/store-front/store-front.jpg'
import storeFront4 from '../../images/store-front/store-front4.jpg'
import storeFrontCar from '../../images/store-front/store-front-car.jpg'
import storeFrontCar5 from '../../images/store-front/store-front-car5.jpg'
import storefrontCar3 from '../../images/store-front/storefront-car3.jpg'
import storefrontCar4 from '../../images/store-front/storefront-car4.jpg'
import storefrontJpeg from '../../images/store-front/storefront.jpeg'
import springStore from '../../images/store-front/spring-store.jpg'
import streetView from '../../images/store-front/street-view.jpg'
import easterStore2 from '../../images/store-front/easter-store-2.jpg'
import halloweenStore from '../../images/store-front/halloween.jpg'
import xmasFull from '../../images/store-front/xmas-full.jpg'
import xmasSnow from '../../images/store-front/xmas-snow.jpg'
import xmas24 from '../../images/store-front/xmas24.jpg'
import puzzlesStore from '../../images/store-front/mind-benders-puzzles.jpg'

// holidays-events/
import easter from '../../images/holidays-events/easter.jpeg'
import easter2 from '../../images/holidays-events/easter2.jpg'
import easterBunny from '../../images/holidays-events/easterbunny.jpg'
import halloween1 from '../../images/holidays-events/halloween1.jpg'
import halloween2 from '../../images/holidays-events/halloween2.jpg'
import halloween3 from '../../images/holidays-events/halloween3.jpg'
import snowDay from '../../images/holidays-events/snow-day.jpg'
import perogiFest from '../../images/holidays-events/perogi-fest-puzzle.jpg'
import perogiFest4 from '../../images/holidays-events/periogi-fest-puzzle4.jpg'
import pierogiFest2 from '../../images/holidays-events/pierogi-fest-puzzzle-2.jpg'
import pierogiFest3 from '../../images/holidays-events/pierogi-fest-puzzle3.jpg'
import perogi from '../../images/holidays-events/perogi.jpg'
import perogi1 from '../../images/holidays-events/perogi1.jpg'
import puzzle from '../../images/holidays-events/puzzle.jpg'
import puzzles from '../../images/holidays-events/puzzles.jpg'
import starwars from '../../images/holidays-events/starwars.jpg'
import starwars2 from '../../images/holidays-events/starwars2.jpg'
import toyShow from '../../images/holidays-events/toy-show1.jpg'
import wineDineShop from '../../images/holidays-events/wine-dine-shop.jpg'
import wineDineShop2 from '../../images/holidays-events/wine-dine-shop2.jpg'
import xmas from '../../images/holidays-events/xmas.jpg'
import xmas242 from '../../images/holidays-events/xmas24-2.jpg'
import annaElsaOlaf from '../../images/holidays-events/anna-elsa-olaf.jpg'
import olaf from '../../images/holidays-events/olaf.jpg'

// the-owners/
import joelAmy from '../../images/awards-ack/joel_amy.jpeg'
import joelBrothers from '../../images/the-owners/joel-brothers.jpg'
import joelHalloween from '../../images/the-owners/joel-halloween.jpg'
import joelStore from '../../images/the-owners/joel-store.jpg'
import joelWorking from '../../images/the-owners/joel-working.jpg'
import joelFiget from '../../images/the-owners/joel-figet.jpg'
import joelBooth from '../../images/the-owners/joel-booth.jpg'
import joelAmyEaster from '../../images/the-owners/joel-amy-easter.jpg'
import joelAmyPerogi from '../../images/the-owners/joel-amy-perogi.jpg'
import joelAmyPerade from '../../images/the-owners/joel-amy-perade.jpg'
import joelAmy4th from '../../images/the-owners/joel-amy-4th.jpg'
import joelAmy2 from '../../images/the-owners/joel-amy2.jpg'
import joelAmy3 from '../../images/the-owners/joel-amy3.jpg'
import joelAmy4 from '../../images/the-owners/joel-amy4.jpg'
import joelAmy5 from '../../images/the-owners/joel-amy5.jpg'
import amyBooth from '../../images/the-owners/amy-booth.jpg'
import amy1 from '../../images/the-owners/amy1.jpg'
import fourthGroup from '../../images/the-owners/4th-group.jpg'

// awards-ack/
import award from '../../images/awards-ack/award.jpg'
import award10year from '../../images/awards-ack/award10year.jpg'
import joelAmyAward from '../../images/awards-ack/joel-amy-award-10-year.jpg'
import inTheNew from '../../images/awards-ack/in-the-new.jpg'
import inThePaper from '../../images/awards-ack/in-the-paper.jpg'
import inThePaper2 from '../../images/awards-ack/in-the-paper2.jpg'
import inThePaper3 from '../../images/awards-ack/in-the-paper3.jpg'
import inThePaper4 from '../../images/awards-ack/in-the-paper4.jpg'

const categories = [
  {
    title: 'The Store',
    subtitle: 'Our home on 119th Street in Whiting, Indiana',
    bg: 'white' as const,
    images: [
      { src: pinkStoreFront, alt: 'Mind Benders pink storefront' },
      { src: pinkStoreFront2, alt: 'Mind Benders pink storefront side view' },
      { src: storeFront, alt: 'Mind Benders store front' },
      { src: storeFront4, alt: 'Mind Benders store front view' },
      { src: storeFrontCar, alt: 'Mind Benders storefront with car' },
      { src: storeFrontCar5, alt: 'Mind Benders store exterior car view' },
      { src: storefrontCar3, alt: 'Mind Benders storefront car angle' },
      { src: storefrontCar4, alt: 'Mind Benders storefront another angle' },
      { src: storefrontJpeg, alt: 'Mind Benders storefront classic view' },
      { src: springStore, alt: 'Mind Benders store in spring' },
      { src: streetView, alt: 'Mind Benders street view' },
      { src: easterStore2, alt: 'Mind Benders store Easter display' },
      { src: halloweenStore, alt: 'Mind Benders store Halloween display' },
      { src: xmasFull, alt: 'Mind Benders store Christmas display' },
      { src: xmasSnow, alt: 'Mind Benders store in the snow at Christmas' },
      { src: xmas24, alt: 'Mind Benders store Christmas 2024' },
      { src: puzzlesStore, alt: 'Mind Benders puzzles and games selection' },
    ],
  },
  {
    title: 'Holidays & Events',
    subtitle: 'Celebrating with our community all year long',
    bg: '#fdf8f3' as const,
    images: [
      { src: easter, alt: 'Easter at Mind Benders' },
      { src: easter2, alt: 'Easter celebration at Mind Benders' },
      { src: easterBunny, alt: 'Easter bunny at Mind Benders' },
      { src: halloween1, alt: 'Halloween at Mind Benders' },
      { src: halloween2, alt: 'Halloween fun at Mind Benders' },
      { src: halloween3, alt: 'Halloween display at Mind Benders' },
      { src: snowDay, alt: 'A snowy day at Mind Benders' },
      { src: perogiFest, alt: 'Mind Benders at Pierogi Fest' },
      { src: perogiFest4, alt: 'Puzzle activity at Pierogi Fest' },
      { src: pierogiFest2, alt: 'Mind Benders Pierogi Fest booth' },
      { src: pierogiFest3, alt: 'Puzzles at Pierogi Fest' },
      { src: perogi, alt: 'Pierogi Fest fun' },
      { src: perogi1, alt: 'Pierogi Fest community' },
      { src: puzzle, alt: 'Puzzle fun at Mind Benders' },
      { src: puzzles, alt: 'Puzzles on display at Mind Benders' },
      { src: starwars, alt: 'Star Wars Day at Mind Benders' },
      { src: starwars2, alt: 'Star Wars Day celebration' },
      { src: annaElsaOlaf, alt: 'Anna, Elsa, and Olaf characters at Mind Benders' },
      { src: olaf, alt: 'Olaf character at Mind Benders' },
      { src: toyShow, alt: 'Mind Benders at the Toy Show' },
      { src: wineDineShop, alt: 'Wine Dine & Shop event' },
      { src: wineDineShop2, alt: 'Wine Dine & Shop event at Mind Benders' },
      { src: xmas, alt: 'Christmas at Mind Benders' },
      { src: xmas242, alt: 'Christmas 2024 at Mind Benders' },
    ],
  },
  {
    title: 'The Owners',
    subtitle: 'The people behind the fun',
    bg: 'white' as const,
    images: [
      { src: joelAmy, alt: 'Joel and Amy, owners of Mind Benders' },
      { src: joelAmy2, alt: 'Joel and Amy at Mind Benders' },
      { src: joelAmy3, alt: 'Joel and Amy at an event' },
      { src: joelAmy4, alt: 'Joel and Amy together' },
      { src: joelAmy5, alt: 'Joel and Amy at the store' },
      { src: joelAmyEaster, alt: 'Joel and Amy at Easter' },
      { src: joelAmyPerogi, alt: 'Joel and Amy at Pierogi Fest' },
      { src: joelAmyPerade, alt: 'Joel and Amy at the parade' },
      { src: joelAmy4th, alt: 'Joel and Amy on the 4th of July' },
      { src: fourthGroup, alt: 'Group photo on the 4th of July' },
      { src: joelStore, alt: 'Joel at the store' },
      { src: joelWorking, alt: 'Joel working at Mind Benders' },
      { src: joelBooth, alt: 'Joel at the booth' },
      { src: joelFiget, alt: 'Joel with fidget toys' },
      { src: joelHalloween, alt: 'Joel dressed up for Halloween' },
      { src: joelBrothers, alt: 'Joel with brothers at Mind Benders' },
      { src: amyBooth, alt: 'Amy at the booth' },
      { src: amy1, alt: 'Amy at Mind Benders' },
    ],
  },
  {
    title: 'Awards & Recognition',
    subtitle: 'Proud milestones from our community',
    bg: '#fdf8f3' as const,
    images: [
      { src: award, alt: 'Mind Benders award' },
      { src: award10year, alt: 'Mind Benders 10 year anniversary award' },
      { src: joelAmyAward, alt: 'Joel and Amy with 10 year award' },
      { src: inThePaper, alt: 'Mind Benders in the newspaper' },
      { src: inThePaper2, alt: 'Mind Benders newspaper feature' },
      { src: inThePaper3, alt: 'Mind Benders press coverage' },
      { src: inThePaper4, alt: 'Mind Benders in the local paper' },
      { src: inTheNew, alt: 'Mind Benders in the news' },
    ],
  },
]

function GallerySection({ title, subtitle, images, bg, cols }: {
  title: string
  subtitle: string
  images: { src: string; alt: string }[]
  bg: string
  cols: number
}) {
  return (
    <Box sx={{ bgcolor: bg, py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: '0.18em', display: 'block', mb: 1 }}>
          {subtitle}
        </Typography>
        <Typography variant="h2" sx={{ fontSize: { xs: '1.6rem', md: '2.2rem' }, mb: 4 }}>
          {title}
        </Typography>
        <ImageList cols={cols} gap={12} variant="masonry">
          {images.map((img) => (
            <ImageListItem
              key={img.src}
              sx={{
                overflow: 'hidden',
                borderRadius: 2,
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                '&:hover img': { transform: 'scale(1.04)' },
              }}
            >
              <SafeImg src={img.src} alt={img.alt} style={{ transition: 'transform 0.35s ease' }} />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </Box>
  )
}

export default function Gallery() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const isMedium = useMediaQuery(theme.breakpoints.down('md'))
  const cols = isMobile ? 1 : isMedium ? 2 : 3

  return (
    <Box component="main">

      {/* ── HERO ── */}
      <Box sx={{ position: 'relative', minHeight: '50vh', backgroundImage: `url(${pinkStoreFront})`, backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', alignItems: 'center' }}>
        <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(37,65,23,0.88) 0%, rgba(37,65,23,0.6) 55%, rgba(0,0,0,0.3) 100%)' }} />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, py: 8 }}>
          <Box sx={{ maxWidth: 600, color: 'white' }}>
            <Typography variant="overline" sx={{ color: '#c8e6b0', fontWeight: 700, letterSpacing: '0.2em', display: 'block', mb: 2 }}>
              Mind Benders Puzzles &amp; Games
            </Typography>
            <Typography variant="h1" sx={{ fontSize: { xs: '2.8rem', md: '4.5rem' }, lineHeight: 1.05, mb: 2, textShadow: '0 2px 10px rgba(0,0,0,0.4)' }}>
              Gallery
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 300, opacity: 0.9, fontSize: { xs: '1rem', md: '1.2rem' } }}>
              A look at our store, our events, and our community.
            </Typography>
          </Box>
        </Container>
      </Box>

      {categories.map((cat) => (
        <GallerySection key={cat.title} {...cat} cols={cols} />
      ))}

    </Box>
  )
}
