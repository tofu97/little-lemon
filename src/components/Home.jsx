import Header from './Header'
import Footer from './Footer'
import Hero from './Hero'
import Specials from './Specials'
import Testimonials from './Testimonials'

/**
 * TODO
 * - [x] hero
 * - [x] specials
 * - [x] testimonials
 * - [ ] chicago
 */

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Specials />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}

export default Home