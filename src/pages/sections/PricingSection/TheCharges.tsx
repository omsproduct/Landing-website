interface ChargesItem {
    readonly id: number;
    readonly title: string;
    readonly description: string;
}

const ChargesData: readonly ChargesItem[] = [
    {
        id: 1,
        title: "One-Time Charges",
        description:
            "A one-time implementation charge applies to all institutions. This includes complete software setup, system configuration, customization, module activation, database setup, user role configuration, and initial onboarding or training. This charge is payable only once at the time of deployment."
    },
    {
        id: 2,
        title: "Subscription-Based Pricing",
        description:
            "A fixed subscription fee applies on a monthly basis. This covers continuous access to the software, regular updates, technical support, data security, server hosting, backups, and ongoing system maintenance."
    },
    {
        id: 3,
        title: "Specific / Additional Service Charges",
        description:
            "Specific charges apply only when an institution opts for additional or optional services beyond the standard offering. These services are charged separately based on requirement and usage. Examples include, but are not limited to, cloud storage upgrades, website development, payment gateway integration, hardware or device integration, and other third-party or custom services."
    }
];

const TheChanges = () => {
    return (
        <section className="mt-16 sm:mt-20 px-4 sm:px-6 lg:px-8">
            
            {/* Heading Section */}
            <div className="max-w-3xl mx-auto text-center space-y-4 sm:space-y-6">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-black">
                    The{" "}
                    <span className="text-[#5E4DE1]">Charges...</span>
                </h1>
                <p className="text-sm sm:text-base text-[#818181] font-medium leading-relaxed">
                    We follow a unified pricing system applicable to all types of institutions.
                    The model is transparent and easy to understand, with no hidden costs
                    or complex tiers.
                </p>
            </div>

            {/* Charges List */}
            <div className="max-w-5xl mx-auto mt-10 sm:mt-14">
                {ChargesData.map((charges, index) => (
                    <div key={charges.id} className="relative">
                        <div className="py-6 sm:py-8">
                            <h5 className="text-base sm:text-lg font-bold text-black">
                                {charges.title}
                            </h5>
                            <p className="mt-2 text-sm sm:text-base text-[#818181] font-medium leading-relaxed">
                                {charges.description}
                            </p>
                        </div>

                        {/* Divider (except last item) */}
                        {index !== ChargesData.length - 1 && (
                            <div className="h-0.5 w-full bg-linear-to-r from-transparent via-[#5E4DE1] to-transparent" />
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TheChanges;
