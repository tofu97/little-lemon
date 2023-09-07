import Header from './Header'
import Footer from './Footer'
import Hero from './Hero'
import Specials from './Specials'
import Testimonials from './Testimonials'
import Chicago from './Chicago'

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
        <Chicago />
      </main>
      <Footer />
    </>
  )
}

export default Home