import { Button } from '../../../components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '../../../components/ui/dialog';
import BookDemo from '../BookNow';

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
        <div className="min-h-screen flex flex-col items-center mb-30">
            <h1 className="flex items-center gap-2.5 text-3xl font-semibold text-black mb-14">
                Know
                <img
                    src="https://res.cloudinary.com/dflelt85r/image/upload/v1770185805/Group_6357568_rcketl.svg"
                    alt="logo"
                    className="h-8"
                />
            </h1>

            {/* Image Wrapper */}
            <div className="relative w-full max-w-5xl">
                {/* Image */}
                <img
                    src="https://res.cloudinary.com/dflelt85r/image/upload/v1770360468/Group_6357568_1_fdwjzj.svg"
                    alt="OMS"
                    className="w-full h-auto"
                />

                {/* Text Overlay */}
                <div className="absolute inset-0 flex flex-col items-center mt-3 text-center">
                    <p className="max-w-xl text-black text-sm mb-4 font-medium p-2">
                        We are an education-focused technology company building operations-driven software for institutions. Our goal is to simplify management and support institutions through reliable and scalable digital solutions.
                    </p>

                    <Dialog>
                                <DialogTrigger asChild>
                                    <Button className="relative h-10 w-38 bg-[#543ED2] text-base rounded-sm text-white
                                    border-2 border-transparent
                                    overflow-hidden
                                    before:absolute before:inset-0
                                    before:-translate-x-full before:bg-linear-to-r
                                    before:from-transparent before:via-[#543ED2]/30 before:to-transparent
                                    before:transition-transform before:duration-500
                                    hover:before:translate-x-full
                                    hover:bg-white hover:text-[#543ED2] hover:font-semibold hover:border-[#543ED2]
                                    transition-all duration-500
                                    cursor-pointer">Book Demo</Button>
                                </DialogTrigger>

                                <DialogContent variant="form" className="px-5">
                                    <BookDemo />
                                </DialogContent>
                            </Dialog>
                </div>
            </div>
            <div className='w-75 mt-7.5 mb-10'>
                <img src="https://res.cloudinary.com/dflelt85r/image/upload/v1770189496/Vector_446_xdtyms.svg" alt="vector-446" />
            </div>

            <div className='w-full h-full mt-14'>
                {AboutData.map((about) => (
                    <div key={about.id} className='relative'>
                        <div className='py-5 px-3.5'>
                            <h5 className='text-base font-bold'>{about.title}</h5>
                            <p className='text-sm text-[#818181] font-medium'>{about.description}</p>
                        </div>
                        {/* Divider - Only show if not the last item */}
                        {about.id !== AboutData.length && (
                             <div className="absolute bottom-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-[#5E4DE1] to-transparent" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default KnowOMS
