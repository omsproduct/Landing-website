import { Button } from '../../../components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '../../../components/ui/dialog';
import BookDemo from '../../components/BookNow';
import { ScrollReveal } from '../../components/ScrollReveal';

interface AboutItem {
    readonly id: number;
    readonly title: string;
    readonly description: string;
}
const AboutData: readonly AboutItem[] = [
    {
        id: 1,
        title: "What we do...",
        description: "We provide an Institute Management Software designed to streamline academic, administrative, financial, and operational processes. Our system replaces manual complexity with structured, efficient workflows."
    },
    {
        id: 2,
        title: "How we create value...",
        description: "We help institutions save time, improve efficiency, and gain better control over daily operations. By simplifying processes, we enable management, staff, and educators to focus more on education and growth."
    },
    {
        id: 3,
        title: "Our Ecosystem Vision...",
        description: "We aim to build an easy and suitable digital ecosystem by partnering with institutions. Our platform is operations-driven today, with future plans to introduce student-driven, institution-driven, and staff-driven products that work together seamlessly."
    },
    {
        id: 4,
        title: "Our Partnership approach...",
        description: "We believe in long-term partnerships, not one-time transactions. We work closely with institutions at every stage, supporting their growth and contributing to a stronger educational environment."
    }
]
const KnowOMS = () => {
    return (
        <section className="z-20 min-h-screen w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24 lg:mb-30">
            <ScrollReveal>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black mb-8 sm:mb-10 md:mb-14 text-center flex items-center justify-center gap-2 flex-wrap">
                    <span>Know</span>
                    <img
                        src="https://res.cloudinary.com/dflelt85r/image/upload/v1770185805/Group_6357568_rcketl.svg"
                        alt="logo"
                        className="h-6 sm:h-8 md:h-10"
                    />
                </h1>

                {/* Image Wrapper */}
                <div className="relative w-full max-w-5xl mx-auto">

                    {/* Image */}
                    <img
                        src="https://res.cloudinary.com/dflelt85r/image/upload/v1770360468/Group_6357568_1_fdwjzj.svg"
                        alt="OMS"
                        className="w-full h-auto object-contain"
                    />

                    {/* Text Overlay */}
                    <div className="absolute inset-0 flex flex-col items-center pt-2 sm:pt-4 md:pt-6 px-2 sm:px-4 text-center">

                        <p className="max-w-sm sm:max-w-xl md:max-w-2xl text-black text-xs sm:text-sm md:text-base mb-4 font-medium">
                            We are an education-focused technology company building operations-driven software for institutions.
                            Our goal is to simplify management and support institutions through reliable and scalable digital solutions.
                        </p>

                        <Dialog>
                            <DialogTrigger asChild>
                                <Button
                                    variant="shimmer"
                                    className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-sm"
                                >
                                    Book Demo
                                </Button>
                            </DialogTrigger>

                            <DialogContent variant="form" className="px-4 sm:px-6">
                                <BookDemo />
                            </DialogContent>
                        </Dialog>

                    </div>
                </div>

                <div className="w-full flex items-center justify-center mt-6 sm:mt-8 md:mt-10 mb-6 sm:mb-8 md:mb-10">
                    <img
                        src="https://res.cloudinary.com/dflelt85r/image/upload/v1770189496/Vector_446_xdtyms.svg"
                        alt="vector-446"
                        className="h-auto sm:h-1/3 md:h-[60%] lg:h-full w-auto"
                    />
                </div>
            </ScrollReveal>

            <ScrollReveal>
                <div className='w-full mt-10 sm:mt-12 md:mt-14 mx-auto max-w-6xl'>
                    {AboutData.map((about) => (
                        <div key={about.id} className='relative'>
                            <div className="py-4 sm:py-5 px-4 sm:px-6">
                                <h5 className="text-sm sm:text-base md:text-lg font-bold">
                                    {about.title}
                                </h5>

                                <p className="text-xs sm:text-sm md:text-base text-[#818181] font-medium mt-1 sm:mt-2">
                                    {about.description}
                                </p>
                            </div>
                            {/* Divider - Only show if not the last item */}
                            {about.id !== AboutData.length && (
                                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-[#5E4DE1] to-transparent" />
                            )}
                        </div>
                    ))}
                </div>
            </ScrollReveal>
        </section>
    )
}

export default KnowOMS
