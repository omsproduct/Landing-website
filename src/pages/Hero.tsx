import DottedHeroSection from "../components/DottedHeroSection"
import Header from "./Header"
import { Button } from "../components/ui/button"

const Hero: React.FC = () => {
    return (
        <>
            <DottedHeroSection>
                <Header></Header>
                {/* Content Container */}
                <div className="relative z-10 flex flex-col items-center mt-26 min-h-screen">
                    {/* Hero Content */}
                    <div className="max-w-4xl text-center mb-12">
                        <h1 className="text-[40px] text-black mb-8">
                            <p className="drop-shadow-lg">
                                Where <span className="text-[#543ED2] font-semibold drop-shadow-lg">Education</span> Meets
                            </p>
                            <p className="drop-shadow-lg">
                                Its <span className="text-[#543ED2] font-semibold drop-shadow-lg">Operating System.</span>
                            </p>
                        </h1>

                        <div className="flex gap-5 justify-center items-center">
                            <Button
                                className="
                                    relative h-10 w-38 px-6
                                    bg-[#543ED2] text-white text-base rounded-sm
                                    border border-white/20
                                    overflow-hidden
                                    backdrop-blur-md

                                    transition-all duration-300 ease-out
                                    cursor-pointer

                                    hover:shadow-[0_12px_35px_rgba(84,62,210,0.55)]

                                    after:absolute after:top-0 after:-left-2/3
                                    after:w-1/2 after:h-full
                                    after:bg-white/20
                                    after:skew-x-[-20deg]
                                    after:transition-all after:duration-500
                                    hover:after:left-[120%]
                                    hover:bg-[#543ED2]
                                "
                            >
                                Log in
                            </Button>


                            <Button
                                className="
                                    relative h-10 w-38 bg-[#543ED2] text-base rounded-sm text-white
                                    border-2 border-transparent
                                    overflow-hidden
                                    before:absolute before:inset-0
                                    before:-translate-x-full before:bg-linear-to-r
                                    before:from-transparent before:via-[#543ED2]/30 before:to-transparent
                                    before:transition-transform before:duration-500
                                    hover:before:translate-x-full
                                    hover:bg-white hover:text-[#543ED2] hover:font-semibold hover:border-[#543ED2]
                                    transition-all duration-500
                                    cursor-pointer
                                    
                                "
                            >
                                Book Demo
                            </Button>
                        </div>




                    </div>

                    {/* Images Container - Updated to match screenshot */}
                    <div className="flex items-end gap-6 max-w-6xl mt-10 mx-auto ">

                        {/* Left Image Stack */}
                        <div className="relative w-52 h-80">
                            {/* Botom Image - Dashboard */}
                            <div className="absolute top-7 -left-6 w-48 h-full bg-white rounded-tl-4xl rounded-tr-4xl overflow-hidden border border-gray-100 shadow-[0_0_20px_5px_rgba(84,62,210,0.3)]">
                                <img
                                    src="https://res.cloudinary.com/dflelt85r/image/upload/v1770275598/Campus_uykgug.png"
                                    alt="dashboard1"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Top Image - Campus */}
                            <div className="absolute top-1 -right-7 w-48 h-full bg-white  rounded-tl-4xl rounded-tr-4xl  overflow-hidden border border-gray-100 shadow-[0_0_20px_5px_rgba(84,62,210,0.3)]">
                                <img
                                    src="https://res.cloudinary.com/dflelt85r/image/upload/v1770275644/Dashboard_1_nexpdr.png"
                                    alt="campus"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Center Main Image */}
                        <div className="relative z-50 w-150 h-96.75 top-5 bg-transparent rounded-tl-4xl rounded-tr-4xl overflow-hidden border border-gray-100 shadow-[0_0_20px_5px_rgba(84,62,210,0.3)]">
                            <img
                                src="https://res.cloudinary.com/dflelt85r/image/upload/v1770275559/Academic_dashboard_iz4bkt.png"
                                alt="academic dashboard"
                                className="absolute inset-0 w-full h-full object-cover rounded-tl-4xl rounded-tr-4xl"
                            />
                        </div>


                        {/* Right Image Stack */}
                        <div className="relative w-52 h-80">
                            {/* bottom Image - Dashboard 2 */}
                            <div className="absolute top-7 -right-6 w-48 h-full bg-white  rounded-tl-4xl rounded-tr-4xl  overflow-hidden border border-gray-100 shadow-[0_0_20px_5px_rgba(84,62,210,0.3)]">
                                <img
                                    src="https://res.cloudinary.com/dflelt85r/image/upload/v1770275645/Salary_ud4xje.png"
                                    alt="dashboard2"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* tom Image - Salary */}
                            <div className="absolute top-1 right-11 w-48 h-full bg-white rounded-tl-4xl rounded-tr-4xl  overflow-hidden border border-gray-100 shadow-[0_0_20px_5px_rgba(84,62,210,0.3)]">
                                <img
                                    src="https://res.cloudinary.com/dflelt85r/image/upload/v1770275646/Dashboard_2_ltdzyx.png"
                                    alt="salary"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* separator */}
                <div className="absolute z-50 bottom-0 h-15 w-full bg-[linear-gradient(to_bottom_right,#FF3BD4,#FFB5EF,#FE98E8,#FFEDA4)]"></div>
            </DottedHeroSection>

            {/* separator */}
        </>
    )
}

export default Hero