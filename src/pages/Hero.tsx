import DottedHeroSection from "../components/DottedHeroSection"
import Header from "./Header"
import { Button } from "../components/ui/button"

const Hero = () => {
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
                                   relative h-10 w-38 bg-[#543ED2] text-base rounded-sm text-white
                                    border-2 border-transparent
                                    overflow-hidden
                                    hover:bg-[#543ED2]/90
                                    hover:shadow-[4px_4px_10px_rgba(84,62,210,0.5)]
                                    
                                    transition-all duration-300
                                    cursor-pointer
                    "
                            >
                                Log in
                            </Button>

                            <Button
                                className="
                                    relative h-10 w-38 bg-[#543ED2] text-base rounded-sm text-white
                                    border-2 border-transparent
                                    overflow-hidden
                                    hover:bg-[#543ED2]/90
                                    hover:shadow-[4px_4px_10px_rgba(84,62,210,0.5)]
                                    transition-all duration-300
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
                            <div className="absolute top-7 -left-6 w-48 h-100 bg-white rounded-tl-4xl rounded-tr-4xl overflow-hidden border border-gray-100 shadow-[0_0_20px_5px_rgba(84,62,210,0.3)]">
                                <img
                                    src="/src/assets/Salary.png"
                                    alt="dashboard1"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            {/* Top Image - Campus */}
                            <div className="absolute top-0 -right-7 w-48 h-100 bg-white  rounded-tl-4xl rounded-tr-4xl  overflow-hidden border border-gray-100 shadow-[0_0_20px_5px_rgba(84,62,210,0.3)]">
                                <img
                                    src="/src/assets/Dashboard (2).png"
                                    alt="campus"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>

                        {/* Center Main Image */}
                        <div className="relative z-50 w-145 h-100 top-5 bg-white rounded-tl-4xl rounded-tr-4xl overflow-hidden border border-gray-100 shadow-[0_0_20px_5px_rgba(84,62,210,0.3)]">
                            <img
                                src="/src/assets/Academic_dashboard.png"
                                alt="academic dashboard"
                                className="w-full h-full object-contain"
                            />
                            {/* Optional decorative border */}
                            <div className="absolute inset-0 border-2 border-white/20 rounded-xl pointer-events-none"></div>
                        </div>

                        {/* Right Image Stack */}
                        <div className="relative w-52 h-80">
                            {/* Top Image - Dashboard 2 */}
                            <div className="absolute top-7 -right-6 w-48 h-100 bg-white  rounded-tl-4xl rounded-tr-4xl  overflow-hidden border border-gray-100 shadow-[0_0_20px_5px_rgba(84,62,210,0.3)]">
                                <img
                                    src="/src/assets/Dashboard (2).png"
                                    alt="dashboard2"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            {/* Bottom Image - Salary */}
                            <div className="absolute top-0 right-11 w-48 h-100 bg-white rounded-tl-4xl rounded-tr-4xl  overflow-hidden border border-gray-100 shadow-[0_0_20px_5px_rgba(84,62,210,0.3)]">
                                <img
                                    src="/src/assets/Salary.png"
                                    alt="salary"
                                    className="w-full h-full object-contain"
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