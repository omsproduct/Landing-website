interface PartnershipItem {
  readonly id: number;
  readonly title: string;
}
const PartnershipData: readonly PartnershipItem[] = [
  {
    id: 1,
    title: "We work as a long-term partner, supporting institutions across all aspects—administration, management, staff coordination, and student experience.",
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
    <div className="flex flex-col items-center">
      <div className="w-124 text-center space-y-6 mx-auto">
        <h1 className="text-3xl font-semibold text-black"><span className='text-[#5E4DE1]'>Partnership</span>?</h1>
        <p className="text-sm text-[#818181] font-medium">We believe partnership goes beyond traditional systems, built on trust and transparency, enabling long-term collaboration to create a truthful, sustainable, and future-ready educational ecosystem.</p>
      </div>

      <div className="flex  gap-13 mt-14">
        <div className="py-4">
          {PartnershipData.map((item) => (
            <div key={item.id} className='flex items-start gap-2 mb-4'>
              <div className='w-2 h-2 rounded-full bg-[#818181] mt-2'></div>
              <div className='w-113.5 text-sm font-medium text-[#818181]'>{item.title}</div>
            </div>
          ))}
        </div>
        <div className="-mt-3">
          <img src="https://res.cloudinary.com/dflelt85r/image/upload/v1770362879/Group_427321025_t2f6ua.svg" alt="world-map" className="h-full w-full"/>
        </div>
      </div>
    </div>
  )
}

export default Partnership