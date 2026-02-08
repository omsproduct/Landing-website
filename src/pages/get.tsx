const Get = () => {
    return (
        <section className="mt-24 px-24 flex flex-col items-center gap-10">
            {/* Section Heading */}
            <h2 className="text-3xl font-semibold text-center mb-10">
                You <span className="text-[#5E4DE1]">Get...</span>
            </h2>

            {/* Content Grid */}
            <div className="relative flex flex-col">
                <div className="absolute border-t border-dashed border-[#5E4DE1] w-full top-5 left-0" />
                <div className="absolute border-t border-dashed border-[#5E4DE1] w-full top-90 left-0" />
                <div className="absolute border-t border-dashed border-[#5E4DE1] w-full bottom-90 left-0" />
                <div className="absolute border-t border-dashed border-[#5E4DE1] w-full bottom-5 left-0" />

                <div className="absolute border-l border-dashed border-[#5E4DE1] h-full top-0 left-5" />
                <div className="absolute border-l border-dashed border-[#5E4DE1] h-full top-0 left-140" />
                <div className="absolute border-l border-dashed border-[#5E4DE1] h-full top-0 right-130" />
                <div className="absolute border-l border-dashed border-[#5E4DE1] h-full top-0 right-5" />

                {/*1st Container*/}
                <div className="grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 lg:gap-x-25 items-start justify-center p-10">
                    {/* Block 1 */}
                    <div className="max-w-[500px] w-full">
                        <h3 className="bg-[linear-gradient(to_bottom_right,#FF3BD4,#FFB5EF,#FE98E8,#FFEDA4)] bg-clip-text text-transparent text-xl font-bold">
                            Central Management System (Cloud)
                        </h3>

                        <ol className="list-decimal ml-5 mt-6 space-y-4 text-base font-medium text-[#818181]
              [&>li::marker]:text-[#5E4DE1] [&>li::marker]:font-bold">
                            <li>
                                <span className="text-[#5E4DE1] font-bold">One Command Center</span>
                                <br />
                                Manage academics, operations, residential, medical, and finances from a single, secure cloud dashboard.
                            </li>

                            <li>
                                <span className="text-[#5E4DE1] font-bold">Real-Time Data Sync</span>
                                <br />
                                All departments work on the same live data, eliminating duplication, delays, and manual reconciliation.
                            </li>

                            <li>
                                <span className="text-[#5E4DE1] font-bold">Role-Based Access Control</span>
                                <br />
                                Staff, faculty, and administrators get controlled access based on their responsibilities.
                            </li>
                        </ol>
                    </div>
                    <img
                        src="https://res.cloudinary.com/dflelt85r/image/upload/v1770451592/Group_427321006_zlkghl.svg"
                        alt="Centralized dashboard illustration"
                        className="-mt-5 ml-5"
                    />
                </div>
                {/*2nd Container*/}
                <div className=" grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-x-30 items-center justify-center p-10 lg:-mb-7 sm:-mb-10">

                    {/* Block 1 */}
                    <div className="max-w-[500px] w-full -mt-18 ">
                        <h3 className="bg-[linear-gradient(to_bottom_right,#FF3BD4,#FFB5EF,#FE98E8,#FFEDA4)] bg-clip-text text-transparent text-xl font-bold">
                            Automation & Smart Operations
                        </h3>

                        <ol className="list-decimal ml-5 mt-6 space-y-4 text-base font-medium text-[#818181]
              [&>li::marker]:text-[#5E4DE1] [&>li::marker]:font-bold">
                            <li>
                                <span className="text-[#5E4DE1] font-bold">Workflow Automation</span>
                                <br />
                                Automate admissions, attendance, fee collection, reporting, and approvals with minimal manual effort.
                            </li>

                            <li>
                                <span className="text-[#5E4DE1] font-bold">Error Reduction</span>
                                <br />
                                Reduce operational mistakes through system-driven processes and built-in validation checks.
                            </li>

                            <li>
                                <span className="text-[#5E4DE1] font-bold">Faster Decision Making</span>
                                <br />
                                Get instant insights and reports that help management take informed actions quickly.
                            </li>
                        </ol>
                    </div>


                    <img
                        src="https://res.cloudinary.com/dflelt85r/image/upload/v1770451593/Group_427321004_r8digm.svg"
                        alt="Centralized dashboard illustration"
                        className="lg:-mt-5 sm:mt-20 mx-auto"
                    />
                </div>

                {/* 3rd Container */}
                <div className="grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-x-30 items-center justify-center p-10">
                        {/* Block 1 */}
                        <div className="max-w-[500px] w-full">
                            <h3 className="bg-[linear-gradient(to_bottom_right,#FF3BD4,#FFB5EF,#FE98E8,#FFEDA4)] bg-clip-text text-transparent text-xl font-bold">
                                Analytics, Security & Scalability
                            </h3>

                            <ol className="list-decimal ml-5 mt-6 space-y-4 text-base font-medium text-[#818181]
              [&>li::marker]:text-[#5E4DE1]  [&>li::marker]:font-bold">
                                <li>
                                    <span className="text-[#5E4DE1] font-bold">Advanced Analytics</span>
                                    <br />
                                    Visual dashboards and reports to track performance, growth, and institutional trends.
                                </li>

                                <li>
                                    <span className="text-[#5E4DE1] font-bold">Enterprise-Grade Security</span>
                                    <br />
                                    Encrypted data, secure authentication, and regular backups ensure full data protection.
                                </li>

                                <li>
                                    <span className="text-[#5E4DE1] font-bold">Scalable Infrastructure</span>
                                    <br />
                                    Grow without limitations using a system designed to scale with your institution.
                                </li>
                            </ol>
                        </div>
                    <img
                        src="https://res.cloudinary.com/dflelt85r/image/upload/v1770451587/Group_427321005_dyv81z.svg"
                        alt="Centralized dashboard illustration"
                        className="lg:-mt-5 sm:mt-12  mx-auto"
                    />
                </div>
            </div>
        </section>
    );
};

export default Get;
