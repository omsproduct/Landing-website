import { AnimatedTestimonials } from './components/AnimatedTestimonials';
import { testimonials } from './components/user-feedback';
// import UserSection from './UserSection'

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

        <div className="relative space-y-13 flex flex-col items-center mt-30">
            
            <div className="absolute top-[20%] left-[25%] w-[25vh] h-[25vh] bg-[linear-gradient(to_bottom_right,#FF3BD4,#FFB5EF,#FE98E8,#FFEDA4)] rounded-full blur-3xl opacity-20" />

            <h2 className="text-3xl font-semibold"><span className="text-[#5E4DE1]">Ideal</span> for<span className="text-[#5E4DE1]">...</span></h2>
            <div className="w-full flex justify-center">
                <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-3 max-w-5xl">
                    {badges.map((label, index) => (
                        <span
                            key={index}
                            className="
                                px-4 py-2.5 rounded-full bg-[#5E4DE1] text-white text-sm font-medium whitespace-nowrap shadow-sm hover:bg-[#543ED2] transition-colors duration-300 cursor-pointer
                                "
                        >
                            {label}
                        </span>
                    ))}
                </div>
            </div>

            {/* <UserSection /> */}
            <AnimatedTestimonials
                title="What Our Partners Say About"
                subtitle="Real feedback from schools, coaching centers, and educational institutions using OMS 360."
                badgeText="Voice Matters"
                testimonials={testimonials}
                autoRotateInterval={5000}
            />

        </div>

    );
};

export default Feedback;
