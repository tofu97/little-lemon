import Header from './Header'
import Footer from './Footer'
import Hero from './Hero'
import Specials from './Specials'
import Testimonials from './Testimonials'
import Chicago from './Chicago'

const Home = () => {
  return (
    <>
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