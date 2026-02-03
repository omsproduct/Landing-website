// src/pages/Pricing.tsx
import Header from '../Header'

const Pricing = () => {
  return (
    <>
      <Header />
      <div id='info-section' className="min-h-screen">
        <div className="max-w-4xl mx-auto mt-20 p-8">
          <h1 className="text-4xl font-bold text-[#543ED2] mb-6">Pricing</h1>
          <p className="text-lg text-gray-700">
            This is the information page with more details about our services.
          </p>
          {/* Add your info content here */}
        </div>
      </div>
    </>
  )
}

export default Pricing