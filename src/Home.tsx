import Hero from './pages/Hero'
import ChooseSmarter from './pages/ChooseSmarter'
import YouGet from './pages/YouGet'
import Feedback from './pages/Feedback'
import Accordion from './pages/Accordion'
import Footer from './pages/Footer'
import Solution from './pages/Solution'
import Gain from './pages/Gain'

const Home = () => {
  return (
    <>
      <Hero />
      <Solution/>
      <Gain/>
      <ChooseSmarter />
      <YouGet />
      <Feedback />
      <Accordion />
      <Footer />
    </>
  )
}

export default Home