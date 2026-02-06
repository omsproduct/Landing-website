// src/pages/Pricing.tsx
import Footer from '../Footer'
import Header from '../Header'
import ChangesFor from './PricingSection/ChangesFor'
import InputDetails from './PricingSection/InputDetails'
import TheChanges from './PricingSection/TheChanges'

const Pricing = () => {
  return (
    <>
      <Header />
      <div id='info-section' className="min-h-screen max-w-7xl mx-57 mt-20 flex flex-col items-center">
        <InputDetails/>
        <TheChanges/>
        <ChangesFor/>
      </div>
      <Footer/>
    </>
  )
}

export default Pricing