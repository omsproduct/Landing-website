interface ChargesItem {
    readonly id: number;
    readonly title: string;
    readonly description: string;
}

const ChargesData: readonly ChargesItem[] = [
    {
        id: 1,
        title: "One-Time Charges",
        description: "A one-time implementation charge applies to all institutions. This includes complete software setup, system configuration, customization, module activation, database setup, user role configuration, and initial onboarding or training. This charge is payable only once at the time of deployment."
    },
    {
        id: 2,
        title: "Subscription Fees",
        description: "Our pricing model is subscription-based, with fees calculated per student per month. This includes access to all core modules and features of the OMS platform. Subscription fees are billed annually in advance."
    },
    {
        id: 3,
        title: "Additional Services",
        description: "We offer optional add-on services such as advanced analytics, premium support, and custom integrations. These services are priced separately based on the specific needs of the institution."
    }
]

const TheChanges = () => {
    return (
        <div className="mt-20">
            <div className="w-124 text-center space-y-6 mx-auto">
                <h1 className="text-3xl font-semibold text-black">The&nbsp;<span className='text-[#5E4DE1]'>Charges...</span></h1>
                <p className="text-sm text-[#818181] font-medium">We follow a unified pricing system applicable to all types of institutions. The model is transparent and easy to understand, with no hidden costs or complex tiers.</p>
            </div>

            <div className="w-full h-full mt-14">
                {ChargesData.map((charges) => (
                    <div key={charges.id} className="relative">
                        <div className="py-5 px-4">
                            <h5 className="text-base font-bold">{charges.title}</h5>
                            <p className="text-sm text-[#818181] font-medium">{charges.description}</p>
                        </div>
                        {/* Divider - Only show if not the last item */}
                        {charges.id !== ChargesData.length && (
                            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-[#5E4DE1] to-transparent" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TheChanges