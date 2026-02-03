import UserSection from './UserSection'

const badges = [
    "Schools (Any types)",
    "Residential & Boarding Schools",
    "Colleges & Educational Institutions",
    "Skill Development Institutions",
    "Trust-Run & Private Institutions",
    "Tuition Centers & Academies",
    "Coaching Centers",
    "Training Centers",
];

const Feedback = () => {
    return (
        <div className="space-y-13 flex flex-col items-center mt-30">
            <h2 className="text-3xl font-semibold"><span className="text-[#5E4DE1]">Ideal</span> for<span className="text-[#5E4DE1]">...</span></h2>
            <div className="w-full flex justify-center">
                <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-3 max-w-5xl">
                    {badges.map((label, index) => (
                        <span
                            key={index}
                            className="
              px-4 py-2.5
              rounded-full
              bg-[#5E4DE1]
              text-white
              text-sm
              font-medium
              whitespace-nowrap
              shadow-sm
               before:absolute before:inset-0
                                    before:-translate-x-full before:bg-linear-to-r
                                    before:from-transparent before:via-white/30 before:to-transparent
                                    before:transition-transform before:duration-700
                                    hover:before:translate-x-full
                                    hover:bg-[#543ED2]
                                    hover:shadow-xl
                                    hover:scale-[1.02]
                                    transition-all duration-300
                                    cursor-pointer
            "
                        >
                            {label}
                        </span>
                    ))}
                </div>
            </div>
            <UserSection />
        </div>
    );
};

export default Feedback;
