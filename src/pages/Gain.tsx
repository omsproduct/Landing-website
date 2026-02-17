import { ScrollReveal } from "./components/ScrollReveal"

const GainData = [
    {
        id: 1,
        title: "Full Control, Zero Hassle ",
        description: "Manage academic, residential, medical, and financial data from a single, powerful web dashboard.",
    },
    {
        id: 2,
        title: "Smart Dashboards & Insights ",
        description: "Personalized dashboards for every role give real-time analytics to make informed decisions fast.",
    },
    {
        id: 3,
        title: "Staff App That Works ",
        description: "Record daily student activities, track progress, and communicate instantly—all in one place.",
    },
    {
        id: 4,
        title: "Seamless Communication ",
        description: "Instant chats and notifications keep staff, students, and guardians connected effortlessly.",
    },
    {
        id: 5,
        title: "Guardian App for Peace of Mind ",
        description: "Stay updated on your child’s performance, attendance, and daily routine, plus apply for leaves and pay fees online.",
    },
]

const Gain = () => {
    return (
        <section className='relative mt-10 sm:mt-16 md:mt-20 lg:mt-30 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-40'>
            <ScrollReveal>
                <div className="absolute bottom-0 right-[3%] w-[30vh] h-[30vh] bg-[linear-gradient(to_bottom_right,#FF3BD4,#FFB5EF,#FE98E8,#FFEDA4)] rounded-full blur-3xl opacity-20" />


                <h2
                    className="text-2xl sm:text-3xl font-semibold text-center mb-8 sm:mb-12 md:mb-16 lg:mb-19">
                    You <span className="text-[#5E4DE1]">Gain...</span>
                </h2>

                <div
                    className='grid grid-cols-1  lg:grid-cols-3 gap-9'>
                    <div className="lg:col-span-2 relative">

                        <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-x-7.75 gap-y-8.25">
                            {/* Divider lines */}
                            {/* Horizontal - 1  */}
                            <div className="hidden md:block absolute top-[23%] -left-5 w-full h-0.5 bg-linear-to-r from-transparent via-[#5E4DE1] to-transparent" />
                            {/* Horizontal - 2  */}
                            <div className="hidden  md:block absolute bottom-[52%] -left-5 w-full h-0.5 bg-linear-to-r from-transparent via-[#5E4DE1] to-transparent" />
                            {/* Vertical */}
                            <div className="hidden md:block absolute -top-2 left-[50%] w-0.5 h-full bg-linear-to-b from-transparent via-[#5E4DE1] to-transparent" />

                            {GainData.map((item, index) => (
                                <div key={index} className="flex items-start gap-3 px-1 relative">

                                    {/* Mobile Divider */}
                                    <div className="block sm:hidden absolute -bottom-4 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-[#5E4DE1] to-transparent" />

                                    {/* Number */}
                                    <span className="text-base font-bold text-black whitespace-nowrap">
                                        {item.id}.
                                    </span>

                                    {/* Text */}
                                    <div>
                                        <h5 className="text-base font-bold text-black">
                                            {item.title} -
                                        </h5>
                                        <p className="text-sm text-[#818181] leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>

                                </div>
                            ))}

                            {/* LOGO  */}
                            <div className="absolute -top-1/4 right-1/20 w-[284.84px] h-[219.59px] relative mx-auto md:ml-5">
                                {/* Image */}
                                <img
                                    src="https://res.cloudinary.com/dflelt85r/image/upload/v1770185805/Group_6357568_rcketl.svg"
                                    alt="logo"
                                    className="w-full max-w-md h-full object-contain"
                                />

                                {/* Fade overlay */}
                                <div className="absolute inset-0 pointer-events-none" style={{
                                    background: "linear-gradient(170deg, transparent 0%, white 60%, white 100%)",
                                }} />
                            </div>


                        </div>
                    </div>


                    {/* RIGHT IMAGE */}
                    <div className="lg:col-span-1 flex items-start justify-center lg:justify-start">
                        <img
                            src="https://res.cloudinary.com/dflelt85r/image/upload/v1770185821/Vector_435_1_zugvh5.svg"
                            alt="illustration"
                            className="w-full max-w-md lg:max-w-full h-auto
 object-contain"
                        />
                    </div>

                </div>
            </ScrollReveal>
        </section>
    )
}

export default Gain