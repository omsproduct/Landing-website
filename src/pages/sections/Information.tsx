import Footer from '../Footer'
import Header from '../Navbar'
import KnowOMS from './InformationSection/KnowOMS'
import Partnership from './InformationSection/Partnership'

const Information = () => {
  return (
    <>
      <Header />
      <div id='info-section' className="relative min-h-screen max-w-7xl mx-auto mt-20 flex flex-col items-center">
        <div className="absolute top-[1%] left-0 w-[30vh] h-[30vh] bg-[linear-gradient(to_bottom_right,#FF3BD4,#FFB5EF,#FE98E8,#FFEDA4)] rounded-full blur-3xl opacity-20" />
        <div className="absolute top-[25%] right-[30%] w-[30vh] h-[30vh] bg-[linear-gradient(to_bottom_right,#FF3BD4,#FFB5EF,#FE98E8,#FFEDA4)] rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-[20%] right-[15%] w-[30vh] h-[30vh] bg-[linear-gradient(to_bottom_right,#FF3BD4,#FFB5EF,#FE98E8,#FFEDA4)] rounded-full blur-3xl opacity-20" />
        {/* <div className="absolute top-[65%] right-0 w-[30vh] h-[30vh] bg-[linear-gradient(to_bottom_right,#FF3BD4,#FFB5EF,#FE98E8,#FFEDA4)] rounded-full blur-3xl opacity-20" /> */}
        <KnowOMS />
        <Partnership />
      </div>
      <Footer />
    </>
  )
}

export default Information