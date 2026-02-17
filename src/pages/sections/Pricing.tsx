import Footer from '../Footer'
import Header from '../Navbar'
import ChangesFor from './PricingSection/ChangesFor'
import InputDetails from './PricingSection/InputDetails'
import TheChanges from './PricingSection/TheCharges'

const Pricing = () => {
  return (
    <section className="min-h-screen">
      <Header />
      <div id='info-section' className="relative min-h-screen max-w-7xl mx-auto mt-20 flex flex-col items-center">
        <div className="absolute top-[1%] right-0 w-[30vh] h-[30vh] bg-[linear-gradient(to_bottom_right,#FF3BD4,#FFB5EF,#FE98E8,#FFEDA4)] rounded-full blur-3xl opacity-20" />
        <div className="absolute top-[65%] left-0 w-[30vh] h-[30vh] bg-[linear-gradient(to_bottom_right,#FF3BD4,#FFB5EF,#FE98E8,#FFEDA4)] rounded-full blur-3xl opacity-20" />
        {/* <div className="absolute top-[10%] left-[2%] w-[30vh] h-[30vh] bg-[linear-gradient(to_bottom_right,#FF3BD4,#FFB5EF,#FE98E8,#FFEDA4)] rounded-full blur-3xl opacity-20" /> */}
        <InputDetails />
        <TheChanges />
        <ChangesFor />
      </div>
      <Footer />
    </section>
  )
}

export default Pricing