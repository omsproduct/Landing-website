// src/pages/Information.tsx
import Footer from '../Footer'
import Header from '../Header'
import KnowOMS from './InformationSection/KnowOMS'
import Partnership from './InformationSection/Partnership'

const Information = () => {
  return (
    <>
      <Header />
      <div id='info-section' className="min-h-screen max-w-7xl mx-57 mt-20 flex flex-col items-center">
        <KnowOMS />
        <Partnership />
      </div>

      <Footer />
    </>
  )
}

export default Information