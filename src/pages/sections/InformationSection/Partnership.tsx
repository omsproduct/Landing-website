import { ScrollReveal } from "../../components/ScrollReveal";

interface PartnershipItem {
  readonly id: number;
  readonly title: string;
}
const PartnershipData: readonly PartnershipItem[] = [
  {
    id: 1,
    title: "We consider our clients as long-term partners, not just software users.",
  },
  {
    id: 2,
    title: "We believe strong, lasting relationships are essential for building a sustainable and future-ready OMS ecosystem.",
  },
  {
    id: 3,
    title: "Institutions that join the OMS ecosystem receive long-term benefits beyond the initial implementation.",
  },
  {
    id: 4,
    title: "Our partners gain access to future-ready products and new initiatives as they are introduced.",
  },
  {
    id: 5,
    title: "Continuous improvements ensure ongoing value as the ecosystem evolves over time.",
  }
]

const Partnership = () => {
  return (
    <section className="w-full py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
      <ScrollReveal>
        <div className="w-full max-w-2xl space-y-4 sm:space-y-6 mx-auto text-center">
          <h1 className="text-2xl md:text-3xl font-semibold"><span className='text-[#5E4DE1]'>Partnership</span>?</h1>
          <p className="text-xs sm:text-sm text-[#818181] font-medium leading-relaxed">We believe partnership goes beyond traditional systems, built on trust and transparency, enabling long-term collaboration to create a truthful, sustainable, and future-ready educational ecosystem.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-10 lg:gap-16 mt-12 sm:mt-16 max-w-6xl mx-auto">
          <div className="w-full lg:w-1/2 space-y-4">
            {PartnershipData.map((item) => (
              <div key={item.id} className='flex items-start gap-2'>
                <div className='w-1 h-1 rounded-full bg-[#818181] mt-2 shrink-0'></div>
                <div className='text-xs sm:text-sm text-[#818181] font-medium leading-relaxed'>{item.title}</div>
              </div>
            ))}
          </div>
          <div className="-mt-3">
            <img src="https://res.cloudinary.com/dflelt85r/image/upload/v1770362879/Group_427321025_t2f6ua.svg" alt="world-map" className="h-full w-full" />
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}

export default Partnership