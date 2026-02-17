import Header from "./Navbar"
import { Button } from "../components/ui/button"
import BookDemo from "./components/BookNow"
import { Dialog, DialogContent, DialogTrigger } from "../components/ui/dialog";
import DotGrid from "./components/DotGrid";

const Hero: React.FC = () => {
    return (
        <div className="relative w-full h-[90vh] lg:h-[110vh] overflow-hidden">

            <DotGrid
                className="absolute inset-0 z-0 opacity-45"
                dotSize={4}
                gap={20}
                baseColor="#cccccc"
                activeColor="#543ED2"
                proximity={120}
                shockRadius={250}
                shockStrength={5}
                resistance={750}
                returnDuration={1.5}

            />

            <div className="relative z-20 w-full h-full">

                <Header />

                {/* Content Container */}
                <div className="flex flex-col items-center mt-10 sm:mt-26">
                    {/* Hero Content */}

                    <div className="max-w-4xl text-center mb-12">

                        <h1 className="text-2xl sm:text-3xl lg:text-5xl text-black mb-8">
                            <span className="block drop-shadow-lg">
                                Where <span className="text-[#543ED2] font-semibold">Education</span> Meets
                            </span>
                            <span className="block drop-shadow-lg">
                                Its <span className="text-[#543ED2] font-semibold">Operating System</span>
                            </span>
                        </h1>



                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
                            <Button
                                variant="shimmer"
                                className="hidden sm:inline-flex py-4 px-8.5 text-base font-medium rounded-sm"
                            >
                                Log in
                            </Button>

                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button
                                        variant="shimmer"
                                        className="py-3 sm:py-4.5 px-6 sm:px-8 text-sm sm:text-base font-medium rounded-sm"
                                    >
                                        Book Demo
                                    </Button>
                                </DialogTrigger>

                                <DialogContent variant="form" className="px-5">
                                    <BookDemo />
                                </DialogContent>
                            </Dialog>
                        </div>
                    </div>

                    {/* Images Container */}
                    <div className="absolute bottom-0 left-0 w-full h-[30vh] sm:h-[35vh] lg:h-[45vh] xl:h-[50vh] flex items-center justify-center">

                        {/* left image stack */}
                        <div className="w-[25%] lg:w-[20%]  h-[80%] flex items-center justify-center">

                            <div className=" w-1/3 h-[80%] shadow-[0_0_20px_5px_rgba(84,62,210,0.3)] rounded-tl-xl  lg:rounded-tl-3xl">
                                <img
                                    src="https://res.cloudinary.com/dflelt85r/image/upload/v1770275598/Campus_uykgug.png"
                                    alt="dashboard1"
                                    className="w-full h-100 sm:h-150 object-cover object-left rounded-tl-xl lg:rounded-tl-3xl"
                                />
                            </div>
                            <div className="w-2/3 h-full shadow-[0_0_20px_5px_rgba(84,62,210,0.3)] rounded-tl-xl sm:rounded-2xl lg:rounded-tl-3xl">
                                <img
                                    src="https://res.cloudinary.com/dflelt85r/image/upload/v1770275644/Dashboard_1_nexpdr.png"
                                    alt="campus"
                                    className="w-full h-150 sm:h-200 object-cover object-left rounded-tl-xl  lg:rounded-tl-3xl"
                                />
                            </div>
                        </div>

                        {/* center images here */}
                        <div className="z-30 w-[45%] sm:w-[40%] h-full shadow-[0_0_20px_5px_rgba(84,62,210,0.3)] rounded-t-3xl">
                            <img
                                src="https://res.cloudinary.com/dflelt85r/image/upload/v1770275559/Academic_dashboard_iz4bkt.png"
                                alt="academic dashboard"
                                className="w-full h-40 sm:h-60 md:h-80 lg:h-100 object-cover rounded-t-xl lg:rounded-t-3xl"
                            />
                        </div>

                        {/* right image stack */}
                        <div className="w-[25%] lg:w-[20%] h-[80%] flex items-center justify-center">
                            <div className="z-20 w-2/3 h-full shadow-[0_0_20px_5px_rgba(84,62,210,0.3)] rounded-tr-xl  lg:rounded-tr-3xl">
                                <img
                                    src="https://res.cloudinary.com/dflelt85r/image/upload/v1770275646/Dashboard_2_ltdzyx.png"
                                    alt="salary"
                                    className="w-full h-60 sm:h-110 object-cover rounded-tr-xl lg:rounded-tr-3xl"
                                />
                            </div>
                            <div className="w-1/3 h-[80%] shadow-[0_0_20px_5px_rgba(84,62,210,0.3)] rounded-tr-xl  lg:rounded-tr-3xl">
                                <img
                                    src="https://res.cloudinary.com/dflelt85r/image/upload/v1770275645/Salary_ud4xje.png"
                                    alt="dashboard2"
                                    className="w-full h-40 sm:h-80 object-cover rounded-tr-xl lg:rounded-tr-3xl"
                                />
                            </div>

                        </div>


                    </div>

                </div>

                {/* separator */}
                <div className="absolute z-50 bottom-0 h-15 w-full bg-[linear-gradient(to_bottom_right,#FF3BD4,#FFB5EF,#FE98E8,#FFEDA4)]" />
            </div>
        </div>
    )
}

export default Hero