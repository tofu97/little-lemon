import Header from './Header'
import Footer from './Footer'
import Hero from './Hero'
import Specials from './Specials'

/**
 * TODO
 * - [ ] hero
 * - [ ] specials
 * - [ ] testimonials
 * - [ ] chicago
 */

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Specials />
      </main>
      <Footer />
    </>
  )
}

export default Home