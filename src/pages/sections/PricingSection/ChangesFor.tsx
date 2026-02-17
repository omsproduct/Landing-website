const ChangesFor = () => {
    return (
        <div className="mt-16 sm:mt-20 px-4 sm:px-12 lg:px-30">
            <h1 className="text-2xl md:text-3xl font-semibold text-black mb-14 text-center">
                <span className='text-[#5E4DE1]'>Changes&nbsp;</span>For...
            </h1>

            <div className='relative space-y-5'>
                {/* Vertical line - hidden on mobile */}
                <div className="hidden md:block absolute left-[50%] w-0.5 h-full bg-linear-to-b from-transparent via-[#5E4DE1] to-transparent" />

                {/* Content container - 1st */}
                <div className="relative flex flex-col md:flex-row gap-6 md:gap-14">

                    <div className="absolute bottom-[5%] sm:-bottom-[10%] -left-[1%] w-full h-0.5 bg-linear-to-r from-transparent via-[#5E4DE1] to-transparent hidden md:block" />
                    <div className="flex-1">
                        {/* Horizontal line at bottom - visible only on desktop */}

                        <div className='relative flex items-start gap-2 p-2'>
                            {/* Mobile separator line */}
                            <div className="absolute -bottom-[10%] left-0 w-full h-0.5 bg-linear-to-r from-transparent via-[#5E4DE1] to-transparent block md:hidden" />

                            <div className='w-1.5 h-1.5 rounded-full bg-[#818181] mt-2 shrink-0'></div>
                            <div className="flex-1 text-[#818181] text-base font-medium leading-relaxed">
                                Our pricing is not just for software access—it is about creating long-term value by partnering with institutions to build a simple, efficient, and sustainable digital ecosystem for management, staff, and students.
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Second Item */}
                    <div className="relative flex-1">
                        <div className='relative flex items-start gap-2 p-2'>
                            {/* Mobile separator line - hidden on last item */}
                            <div className="absolute -bottom-[18%] left-0 w-full h-0.5 bg-linear-to-r from-transparent via-[#5E4DE1] to-transparent block md:hidden" />

                            <div className='w-1.5 h-1.5 rounded-full bg-[#818181] mt-2 shrink-0'></div>
                            <div className="flex-1 text-[#818181] text-base font-medium leading-relaxed">
                                We work as a long-term partner, supporting institutions across all aspects—administration, management, staff coordination, and student experience.
                            </div>
                        </div>
                    </div>
                </div>
                {/* Content container - 2nd*/}
                <div className="relative flex flex-col md:flex-row gap-6 md:gap-14">
                    {/* Left Column - First Item */}
                    <div className="absolute -bottom-[10%] -left-[1%] w-full h-0.5 bg-linear-to-r from-transparent via-[#5E4DE1] to-transparent hidden md:block" />
                    <div className="flex-1">
                        {/* Horizontal line at bottom - visible only on desktop */}

                        <div className='relative flex items-start gap-2 p-2'>
                            {/* Mobile separator line */}
                            <div className="absolute -bottom-[10%] left-0 w-full h-0.5 bg-linear-to-r from-transparent via-[#5E4DE1] to-transparent block md:hidden" />

                            <div className='w-1.5 h-1.5 rounded-full bg-[#818181] mt-2 shrink-0'></div>
                            <div className="flex-1 text-[#818181] text-base font-medium leading-relaxed">
                                Our system helps institutions run faster and more efficiently with better control over academics, finance, operations, and communication.
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Second Item */}
                    <div className="relative flex-1">
                        <div className='relative flex items-start gap-2 p-2'>
                            {/* Mobile separator line - hidden on last item */}
                            <div className="absolute -bottom-[10%] left-0 w-full h-0.5 bg-linear-to-r from-transparent via-[#5E4DE1] to-transparent block md:hidden" />

                            <div className='w-1.5 h-1.5 rounded-full bg-[#818181] mt-2 shrink-0'></div>
                            <div className="flex-1 text-[#818181] text-base font-medium leading-relaxed">
                                We focus on building an easy, suitable, and scalable digital ecosystem that simplifies daily institutional operations and decision-making.
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content container - 3rd */}
                <div className="relative flex flex-col md:flex-row gap-6 md:gap-14">
                    {/* Left Column - First Item */}
                    <div className="absolute -bottom-[10%] -left-[1%] w-full h-0.5 bg-linear-to-r from-transparent via-[#5E4DE1] to-transparent hidden md:block" />
                    <div className="flex-1">
                        {/* Horizontal line at bottom - visible only on desktop */}

                        <div className='relative flex items-start gap-2 p-2'>
                            {/* Mobile separator line */}
                            <div className="absolute -bottom-[10%] left-0 w-full h-0.5 bg-linear-to-r from-transparent via-[#5E4DE1] to-transparent block md:hidden" />

                            <div className='w-1.5 h-1.5 rounded-full bg-[#818181] mt-2 shrink-0'></div>
                            <div className="flex-1 text-[#818181] text-base font-medium leading-relaxed">
                                Our pricing supports the development of a stable and reliable management environment that replaces manual processes with smart automation.
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Second Item */}
                    <div className="relative flex-1">
                        <div className='relative flex items-start gap-2 p-2'>
                            {/* Mobile separator line - hidden on last item */}
                            <div className="absolute -bottom-[10%] left-0 w-full h-0.5 bg-linear-to-r from-transparent via-[#5E4DE1] to-transparent block md:hidden" />

                            <div className='w-1.5 h-1.5 rounded-full bg-[#818181] mt-2 shrink-0'></div>
                            <div className="flex-1 text-[#818181] text-base font-medium leading-relaxed">
                                We charge to create meaningful value by reducing administrative workload and saving time through structured, operations-driven software.
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content container - 4th */}
                <div className="relative flex flex-col md:flex-row gap-6 md:gap-14">
                    {/* Left Column - First Item */}
                    <div className="absolute -bottom-[10%] -left-[1%] w-full h-0.5 bg-linear-to-r from-transparent via-[#5E4DE1] to-transparent hidden md:block" />
                    <div className="flex-1">
                        {/* Horizontal line at bottom - visible only on desktop */}

                        <div className='relative flex items-start gap-2 p-2'>
                            {/* Mobile separator line */}
                            <div className="absolute -bottom-[10%] left-0 w-full h-0.5 bg-linear-to-r from-transparent via-[#5E4DE1] to-transparent block md:hidden" />

                            <div className='w-1.5 h-1.5 rounded-full bg-[#818181] mt-2 shrink-0'></div>
                            <div className="flex-1 text-[#818181] text-base font-medium leading-relaxed">
                                Our goal is to strengthen institutions by improving productivity for educational staff and delivering a smoother, more organized experience for students.
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Second Item */}
                    <div className="relative flex-1">
                        <div className='relative flex items-start gap-2 p-2'>
                            {/* Mobile separator line - hidden on last item */}
                            <div className="absolute -bottom-[18%] left-0 w-full h-0.5 bg-linear-to-r from-transparent via-[#5E4DE1] to-transparent block md:hidden" />

                            <div className='w-1.5 h-1.5 rounded-full bg-[#818181] mt-2 shrink-0'></div>
                            <div className="flex-1 text-[#818181] text-base font-medium leading-relaxed">
                                Our charges enable continuous innovation, system improvements, security, and support—ensuring institutions are prepared for the future of education.
                            </div>
                        </div>
                    </div>
                </div>
                {/* Content container - 5th */}
                <div className="relative flex flex-col md:flex-row gap-6 md:gap-14">
                    {/* Left Column - First Item */}
                    <div className="flex-1">
                        {/* Horizontal line at bottom - visible only on desktop */}

                        <div className='relative flex items-start gap-2 p-2'>
                            {/* Mobile separator line */}
                            <div className="absolute -bottom-[8%] left-0 w-full h-0.5 bg-linear-to-r from-transparent via-[#5E4DE1] to-transparent block md:hidden" />

                            <div className='w-1.5 h-1.5 rounded-full bg-[#818181] mt-2 shrink-0'></div>
                            <div className="flex-1 text-[#818181] text-base font-medium leading-relaxed">
                                We are committed to continuously enhancing the platform and, in the future, introducing dedicated products such as:
                                <ol className="list-decimal list-inside text-sm font-medium pt-2 pl-3 space-y-1">
                                    <li>Student-driven solutions to improve engagement and learning experience</li>
                                    <li>Institution-driven solutions for better governance and strategic management</li>
                                    <li>Staff-driven solutions to simplify teaching, attendance, and performance workflows</li>
                                </ol>
                            </div>
                        </div>
                    </div>

                    
                    {/* Right Column - Second Item */}
                    <div className="relative flex-1">
                        <div className="relative flex flex-col items-center sm:items-start p-4 sm:p-6 lg:p-8">
                            {/* Main logo/image - container for relative positioning */}
                            <div className="relative w-[70%] sm:w-[80%] mx-auto sm:mx-0">
                                {/* Main image */}
                                <img
                                    src="https://res.cloudinary.com/dflelt85r/image/upload/v1770185805/Group_6357568_rcketl.svg"
                                    alt="logo"
                                    className="w-full h-auto object-contain relative z-10"
                                />

                                {/* Second image positioned at bottom right */}
                                <img
                                    src="https://res.cloudinary.com/dflelt85r/image/upload/v1770358497/Vector_445_km9ucb.svg"
                                    alt="vector-445"
                                    className="absolute z-30"
                                    style={{
                                        bottom: '-20%',
                                        right: '0',
                                        width: '90%', // Relative to parent container
                                        maxWidth: '60%',
                                        minWidth: '30%',
                                        transform: 'translate(15%, 15%)', // Adjust to stick out slightly
                                    }}
                                />
                            </div>

                            {/* Fade overlay - adjusted to affect the entire column background */}
                            <div
                                className="absolute inset-0 pointer-events-none z-20"
                                style={{
                                    background: "linear-gradient(170deg, transparent 0%, white 60%, white 100%)",
                                }}
                            />
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default ChangesFor