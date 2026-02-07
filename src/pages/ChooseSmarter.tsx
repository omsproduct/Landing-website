import { WindowSidebar, HandIndexThumb, GraphUp, Folder2Open, ChatSquareDots, JournalBookmark, PieChart, Save2, Person, Diagram3, Building, CurrencyDollar } from "react-bootstrap-icons"
import { Button } from "../components/ui/button"
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

const ChooseSmarter = () => {
    return (
        <>
            <div className='mt-30 px-38'>
                {/* Heading */}
                <div className="space-y-6 w-114 mx-auto text-center">
                    <h2 className="text-3xl font-semibold">
                        Choose <span className="text-[#5E4DE1]">Smarter...</span>
                    </h2>
                    <p className="text-[#818181] text-sm font-medium">
                        OMS is not designed to manage software users. It is designed to run institutions with clarity, control, and accountability.
                    </p>
                </div>

                {/* Table Header */}
                <div className="grid grid-cols-[1fr_1fr_1fr] gap-x-36 items-center mt-20">
                    <img
                        src="https://res.cloudinary.com/dflelt85r/image/upload/v1770185818/Group_427321019_t8eatc.svg"
                        alt=""
                        className="justify-self-start"
                    />

                    <div className="text-base font-bold">
                        Traditional SaaS
                    </div>

                    <div className="text-base font-bold">
                        OMS SaaS
                    </div>
                </div>

                {/* USP Rows */}
                <div className="mt-12 space-y-12">
                    {USPDATA.map((row, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-[1fr_1fr_1fr] gap-x-36 items-start"
                        >
                            {/* Feature Column */}
                            <div className="flex gap-2">
                                <div className="bg-[linear-gradient(to_bottom_right,#FF3BD4,#FFB5EF,#FE98E8,#FFEDA4)] rounded-sm w-7 h-7">
                                    <row.icons size={26} className="p-1.5" />
                                </div>
                                <p className="text-base font-semibold items-baseline-start">{row.title}</p>
                            </div>

                            {/* Traditional SaaS */}
                            <div className="text-[#818181] font-medium text-sm">
                                {row.traditional}
                            </div>

                            {/* OMS SaaS */}
                            <div className="text-[#5E4DE1] font-medium text-sm">
                                {row.oms}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="space-y-5 mt-14">
                    <p className="text-[#5E4DE1] text-sm font-semibold">Add any more...</p>
                    <Button
                                className="
                                    relative h-10 w-35 bg-[#543ED2] text-base rounded-sm text-white
                                    border-2 border-transparent
                                    overflow-hidden
                                    before:absolute before:inset-0
                                    before:-translate-x-full before:bg-linear-to-r
                                    before:from-transparent before:via-[#543ED2]/30 before:to-transparent
                                    before:transition-transform before:duration-500
                                    hover:before:translate-x-full
                                    hover:bg-white hover:text-[#543ED2] hover:font-semibold hover:border-[#543ED2]
                                    transition-all duration-500
                                    cursor-pointer
                                    
                                "
                            >
                                Book Demo
                            </Button>
                </div>
            </div>
        </>
    )
}

export default ChooseSmarter
