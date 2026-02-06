const GainData = [
    {
        id: 1,
        title: "Full Control, Zero Hassle ",
        description: "Manage academic, residential, medical, and financial data from a single, powerful web dashboard.",
    },
    {
        id: 4,
        title: "Smart Dashboards & Insights ",
        description: "Personalized dashboards for every role give real-time analytics to make informed decisions fast.",
    },
    {
        id: 2,
        title: "Staff App That Works ",
        description: "Record daily student activities, track progress, and communicate instantly—all in one place.",
    },
    {
        id: 5,
        title: "Seamless Communication ",
        description: "Instant chats and notifications keep staff, students, and guardians connected effortlessly.",
    },
    {
        id: 3,
        title: "Guardian App for Peace of Mind ",
        description: "Stay updated on your child’s performance, attendance, and daily routine, plus apply for leaves and pay fees online.",
    },
]

const Gain = () => {
    return (
        <>
            <div className='mt-30 px-38'>
                <h2 className="text-3xl font-semibold text-center mb-19">
                    You <span className="text-[#5E4DE1]">Gain...</span>
                </h2>

                <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-9'>

                    <div className="relative lg:col-span-2 grid grid-cols-2 gap-x-7.75 gap-y-8.25">
                        {GainData.map((item, index) => (
                            <div key={index} className="flex items-start gap-3 px-1">

                                {/* Number */}
                                <span className="text-base font-bold text-black">
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
                        {/* Divider lines */}
                        <div className="absolute top-27 -left-5 w-full h-0.5 bg-linear-to-r from-transparent via-[#5E4DE1] to-transparent" />
                        <div className="absolute bottom-58 -left-5 w-full h-0.5 bg-linear-to-r from-transparent via-[#5E4DE1] to-transparent" />
                        <div className="absolute -top-4 left-97 w-0.5 h-full bg-linear-to-b from-transparent via-[#5E4DE1] to-transparent" />

                        <div className="absolute -top-15 right-0 w-[284.84px] h-[219.59px] relative">
                            {/* Image */}
                            <img
                                src="https://res.cloudinary.com/dflelt85r/image/upload/v1770185805/Group_6357568_rcketl.svg"
                                alt="logo"
                                className="w-full h-full object-contain"
                            />

                            {/* Fade overlay */}
                            <div className="absolute inset-0 pointer-events-none" style={{
                                background: "linear-gradient(170deg, transparent 0%, white 60%, white 100%)",
                            }} />
                        </div>


                    </div>


                    {/* RIGHT IMAGE */}
                    <div className="flex w-full justify-start items-start">
                        <img
                            src="https://res.cloudinary.com/dflelt85r/image/upload/v1770185821/Vector_435_1_zugvh5.svg"
                            alt="illustration"
                            className="w-full max-h-125 object-contain" 
                        />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Gain