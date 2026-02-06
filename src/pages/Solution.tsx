interface SolutionItem {
  readonly id: number;
  readonly title: string;
  readonly content: string;
  readonly description: string;
}

const solutionData: readonly SolutionItem[] = [
  {
    id: 1,
    title: "Scattered Systems",
    content: "Institutions manage students across disconnected tools.",
    description:
      "OMS centralizes all student information into a single, secure digital system—accessible anytime, anywhere.",
  },
  {
    id: 2,
    title: "Manual Operations",
    content: "Time is lost in repetitive, error-prone processes.",
    description:
      "We automate core academic and administrative workflows to reduce errors and save operational time.",
  },
  {
    id: 3,
    title: "Revenue Leakage",
    content: "Fees, dues, and reports lack transparency.",
    description:
      "OMS provides real-time fee management with transparent tracking, reports, and reminders.",
  },
  {
    id: 4,
    title: "Decision Blindness",
    content: "Data exists but decisions remain blind.",
    description:
      "Built-in analytics and reports give institutions actionable, data-driven visibility at every level.",
  },
  {
    id: 5,
    title: "Notification Gap",
    content: "Students and parents miss critical updates.",
    description:
      "OMS enables centralized, automated communication via notifications and alerts—keeping everyone informed.",
  },
  {
    id: 6,
    title: "Operational Delays",
    content: "Hours are wasted on manual tasks.",
    description:
      "OMS enables centralized, automated communication via notifications and alerts—keeping everyone informed.",
  },
]

const Solution = () => {
  return (
    <>

      <div className='mt-30 px-38'>
        <h2 className="text-3xl font-semibold text-center mb-19">
          We <span className="text-[#5E4DE1]">Solve...</span>
        </h2>
        <div className="relative px-5 py-5 ml-10">
          <div className="absolute top-5 left-0 right-0 border-t border-dashed border-[#5E4DE1]"></div>
          <div className="absolute top-46.75 left-0 right-0 border-t border-dashed border-[#5E4DE1]"></div>

          <div className="absolute bottom-46.75 left-0 right-0 border-b border-dashed border-[#5E4DE1]"></div>
          <div className="absolute bottom-5 left-0 right-0 border-b border-dashed border-[#5E4DE1]"></div>

          <div className="absolute top-0 bottom-0 left-5  border-l border-dashed border-[#5E4DE1]"></div>
          <div className="absolute top-0 bottom-0 left-86.75  border-l border-dashed border-[#5E4DE1]"></div>
          <div className="absolute top-0 bottom-0 left-104.5  border-l border-dashed border-[#5E4DE1]"></div>


          <div className="absolute top-0 bottom-0 right-8.5  border-r border-dashed border-[#5E4DE1]"></div>
          <div className="absolute top-0 bottom-0 right-90.25  border-r border-dashed border-[#5E4DE1]"></div>
          <div className="absolute top-0 bottom-0 right-107.75  border-r border-dashed border-[#5E4DE1]"></div>

          <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-14">
            {solutionData.map((item) => (
              <div key={item.id} className="w-82 h-42 border border-[#5E4DE1] rounded-xl z-10">
                <div className="flex gap-4 bg-[#E4E0FF] w-full h-22.25 rounded-t-xl">
                  <div className="bg-[#5E4DE1] p-4 mb-2.25 rounded-tl-xl rounded-br-xl text-xl font-semibold text-white">
                    {item.title}
                  </div>
                  <div className="text-[#5E4DE1] text-base flex items-center justify-center">{item.content}</div>
                </div>
                <div className="flex items-start px-4 py-2 justify-center gap-1 bg-white rounded-bl-2xl rounded-br-2xl">
                  <img src="https://res.cloudinary.com/dflelt85r/image/upload/v1770185806/Frame_2147223785_euoi5r.svg" alt="check-fill" className="mt-0.5 shrink-0" />
                  <p className="text-sm text-[#818181]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Solution