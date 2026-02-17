import { WindowSidebar, HandIndexThumb, GraphUp, Folder2Open, ChatSquareDots, JournalBookmark, PieChart, Save2, Person, Diagram3, Building, CurrencyDollar } from "react-bootstrap-icons"
import { Button } from "../components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "../components/ui/dialog"
import BookDemo from "./components/BookNow"
import { ScrollReveal } from "./components/ScrollReveal"

const USPDATA = [
    {
        icons: WindowSidebar,
        title: "System Philosophy",
        traditional: "Built as a generic software product",
        oms: "Built as an Educational Operating System",
    },
    {
        icons: HandIndexThumb,
        title: "Teaching Model",
        traditional: "High student-to-teacher ratio, limited tracking",
        oms: "Dedicated teacher for fewer students, enabling focused monitoring",
    },
    {
        icons: GraphUp,
        title: "Student Growth Tracking",
        traditional: "General academic records",
        oms: "Subject-wise and individual growth tracking",
    },
    {
        icons: Folder2Open,
        title: "Paperwork & Digitalization",
        traditional: "Partial digitization, manual dependencies",
        oms: "End-to-end digital workflows, minimal paperwork",
    },
    {
        icons: ChatSquareDots,
        title: "Guardian Communication",
        traditional: "Broadcast notices or limited messaging",
        oms: "Direct guardian–teacher–authority chat system",
    },
    {
        icons: JournalBookmark,
        title: "Academic Oversight",
        traditional: "No structured supervisory layer",
        oms: "Supreme-level visibility for academic control",
    },
    {
        icons: PieChart,
        title: "Financial Management (Structure)",
        traditional: "Basic accounting entries",
        oms: "Categorical management of revenue and expenses",
    },
    {
        icons: Save2,
        title: "Financial Transparency",
        traditional: "Limited visibility and reports",
        oms: "Clear cash inflow–outflow tracking by category",
    },
    {
        icons: Person,
        title: "Administrative Control",
        traditional: "Fixed roles, limited flexibility",
        oms: "Permission-based access for staff and sub-admins",
    },
    {
        icons: Diagram3,
        title: "Governance Structure",
        traditional: "Single admin or static hierarchy",
        oms: "Act-Admin roles for board members (admin-level access, limited settings)",
    },
    {
        icons: Building,
        title: "Residential Management",
        traditional: "Not supported or requires separate tools",
        oms: "Integrated hostel and food control for residential institutions",
    },
    {
        icons: CurrencyDollar,
        title: "Pricing Model",
        traditional: "Feature-based or add-on pricing",
        oms: "Single pricing model with all features included",
    },
]

const ChooseSmarterExp = () => {
    return (
            <section className='relative mt-30 px-4 md:px-8 lg:px-16 xl:px-38'>
                    <ScrollReveal>
                <div className="absolute top-[25%] left-0 w-[30vh] h-[30vh] bg-[linear-gradient(to_bottom_right,#FF3BD4,#FFB5EF,#FE98E8,#FFEDA4)] rounded-full blur-3xl opacity-20" />
                {/* Heading */}
                <div className="space-y-6 w-full max-w-114 mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-semibold">
                        Choose <span className="text-[#5E4DE1]">Smarter...</span>
                    </h2>
                    <p className="text-[#818181] text-sm font-medium">
                        OMS is not designed to manage software users. It is designed to run institutions with clarity, control, and accountability.
                    </p>
                </div>

                {/* Table Header - Hidden on mobile, visible on md and up */}
                <div className="hidden md:grid md:grid-cols-[1fr_1fr_1fr] gap-4 lg:gap-x-36 items-center mt-20">
                    <img
                        src="https://res.cloudinary.com/dflelt85r/image/upload/v1770185818/Group_427321019_t8eatc.svg"
                        alt=""
                        className="justify-self-start max-w-[150px] lg:max-w-none"
                    />

                    <div className="text-sm lg:text-base font-bold">
                        Traditional SaaS
                    </div>

                    <div className="text-sm lg:text-base font-bold">
                        OMS SaaS
                    </div>
                </div>

                {/* USP Rows */}
                <div className="mt-8 md:mt-12 space-y-8 md:space-y-12">
                    {USPDATA.map((row, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr] gap-4 md:gap-4 lg:gap-x-36 items-start border-b border-dashed border-[#5E4DE1] md:border-b-0 pb-6 md:pb-0 last:border-b-0"
                        >
                            {/* Feature Column */}
                            <div className="flex gap-2 items-center md:items-start">
                                <div className="bg-[linear-gradient(to_bottom_right,#FF3BD4,#FFB5EF,#FE98E8,#FFEDA4)] rounded-sm w-7 h-7 flex-shrink-0">
                                    <row.icons size={26} className="p-1.5" />
                                </div>
                                <p className="text-sm md:text-base font-semibold">{row.title}</p>
                            </div>

                            {/* Traditional SaaS - Mobile layout */}
                            <div className="ml-9 md:ml-0">
                                <span className="md:hidden text-xs font-semibold text-gray-500 block mb-1">Traditional:</span>
                                <div className="text-[#818181] font-medium text-xs md:text-sm">
                                    {row.traditional}
                                </div>
                            </div>

                            {/* OMS SaaS - Mobile layout */}
                            <div className="ml-9 md:ml-0">
                                <span className="md:hidden text-xs font-semibold text-[#5E4DE1] block mb-1">OMS:</span>
                                <div className="text-[#5E4DE1] font-medium text-xs md:text-sm">
                                    {row.oms}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="space-y-5 mt-10 md:mt-14">
                    <p className="text-[#5E4DE1] text-sm font-semibold">And many more...</p>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className="relative px-8 py-4.5 bg-[#543ED2] text-base rounded-sm text-white
                                border-2 border-transparent
                                overflow-hidden
                                before:absolute before:inset-0
                                before:-translate-x-full before:bg-linear-to-r
                                before:from-transparent before:via-[#543ED2]/30 before:to-transparent
                                before:transition-transform before:duration-500
                                hover:before:translate-x-full
                                hover:bg-white hover:text-[#543ED2] hover:font-semibold hover:border-[#543ED2]
                                transition-all duration-500
                                cursor-pointer">Get it now</Button>
                        </DialogTrigger>

                        <DialogContent variant="form" className="px-5">
                            <BookDemo />
                        </DialogContent>
                    </Dialog>
                </div>
            </ScrollReveal>
            </section>
    )
}

export default ChooseSmarterExp