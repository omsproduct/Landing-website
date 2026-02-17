interface SolutionItem {
    readonly id: number;
    readonly title: string;
    readonly content: string;
    readonly description: string;
}

const solutionData: readonly SolutionItem[] = [
    {
        id: 1,
        title: "Scattered Systems",
        content: "Institutions manage students across disconnected tools.",
        description:
            "OMS centralizes all student data in one secure system—accessible anytime, anywhere.",
    },
    {
        id: 2,
        title: "Manual Operations",
        content: "Time is lost in repetitive, error-prone processes.",
        description:
            "We automate core academic and administrative workflows to reduce errors and save operational time.",
    },
    {
        id: 3,
        title: "Revenue Leakage",
        content: "Fees, dues, and reports lack transparency.",
        description:
            "OMS provides real-time fee management with transparent tracking, reports, and reminders.",
    },
    {
        id: 4,
        title: "Decision Blindness",
        content: "Data exists but decisions remain blind.",
        description:
            "Built-in analytics and reports give institutions actionable, data-driven visibility at every level.",
    },
    {
        id: 5,
        title: "Notification Gap",
        content: "Students and parents miss critical updates.",
        description:
            "OMS enables centralized, automated communication via notifications and alerts—keeping everyone informed.",
    },
    {
        id: 6,
        title: "Operational Delays",
        content: "Hours are wasted on manual tasks.",
        description:
            "OMS enables centralized, automated communication via notifications and alerts—keeping everyone informed.",
    },
]

const Solution = () => {
    return (
        <section className='relative mt-10 sm:mt-16 md:mt-20 lg:mt-30 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-40'>
            <div className="absolute bottom-0 right-0 w-[30vh] h-[30vh] bg-[linear-gradient(to_bottom_right,#FF3BD4,#FFB5EF,#FE98E8,#FFEDA4)] rounded-full blur-3xl opacity-20" />
            <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8 sm:mb-12 md:mb-16 lg:mb-19">
                We <span className="text-[#5E4DE1]">Solve...</span>
            </h2>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {solutionData.map((item) => (
                    <div key={item.id} className="relative p-5 h-auto">
                        {/* Top */}
                        <div className="absolute top-5 left-0 w-full border-t border-[#887dda] border-dashed" />

                        {/* Bottom */}
                        <div className="absolute bottom-5 left-0 w-full border-b border-[#5E4DE1] border-dashed" />

                        {/* Left */}
                        <div className="absolute top-0 left-5 h-full border-l border-[#5E4DE1] border-dashed" />

                        {/* Right */}
                        <div className="absolute top-0 right-5 h-full border-r border-[#5E4DE1] border-dashed" />
                        <div className="border border-[#5E4DE1] rounded-2xl p-0">

                            <div className="z-50 flex bg-[#E4E0FF] rounded-tr-2xl rounded-tl-2xl">
                                <h3 className="text-xl font-semibold text-white bg-[#5E4DE1] rounded-tl-2xl rounded-br-2xl mb-2 p-4">{item.title}</h3>
                                <p className="text-[#5E4DE1] text-base font-medium p-2">
                                    {item.content}
                                </p>
                            </div>
                            <div className="flex items-start px-4 py-2 justify-center gap-1 bg-white rounded-bl-2xl rounded-br-2xl">
                                <img src="https://res.cloudinary.com/dflelt85r/image/upload/v1770185806/Frame_2147223785_euoi5r.svg" alt="check-fill" className="mt-0.5 shrink-0" />
                                <p className="text-sm text-[#818181]">{item.description}</p>
                            </div>
                        </div>

                    </div>
                ))}
            </div>

        </section>

    )
}

export default Solution