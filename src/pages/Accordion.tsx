import { useState } from "react";
import { PlusCircleFill, DashCircle } from "react-bootstrap-icons";

interface FAQItem {
  readonly id: number;
  readonly question: string;
  readonly answer: string;
}

const Accordion = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const faqItems: readonly FAQItem[] = [
    {
      id: 1,
      question: "Is this a cloud-based software?",
      answer:
        "Yes, this is a fully cloud-based platform. You can access it from anywhere using a modern web browser without installing any additional software.",
    },
    {
      id: 2,
      question: "Do I need any technical knowledge to use this?",
      answer:
        "No technical expertise is required. The interface is designed to be user-friendly, allowing anyone to get started with minimal guidance.",
    },
    {
      id: 3,
      question: "Is my data secure on the platform?",
      answer:
        "Absolutely. We use industry-standard security practices including encryption, secure authentication, and regular backups to protect your data.",
    },
    {
      id: 4,
      question: "Can I access the platform from multiple devices?",
      answer:
        "Yes, you can log in from multiple devices such as laptops, tablets, or mobile phones, and your data will stay synced in real time.",
    },
    {
      id: 5,
      question: "Does the platform receive regular updates?",
      answer:
        "Yes, we continuously improve the platform with performance enhancements, new features, and security updates without disrupting your usage.",
    },
    {
      id: 6,
      question: "Is customer support available if I need help?",
      answer:
        "Our support team is available to assist you with any questions or issues through email and in-app support channels.",
    },
  ];


  const toggleItem = (id: number) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-6 space-y-14 mt-30 ">

      <h2 className="text-3xl font-semibold text-center">It <span className="text-[#5E4DE1]">Helps...</span></h2>
      <div className="space-y-1">
        {faqItems.map((item) => {
          const isExpanded = expandedId === item.id;

          return (
            <div key={item.id} className="py-4  border-b border-black pb-4">
              <button
                className="flex w-full items-center justify-between text-left cursor-pointer"
                onClick={() => toggleItem(item.id)}
                aria-expanded={isExpanded}
              >
                <h3 className="text-lg font-semibold text-[#5E4DE1]">
                  {item.question}
                </h3>

                <span className="ml-6 shrink-0 relative w-5 h-5">
                  {/* Plus Icon */}
                  <PlusCircleFill
                    className={`
                      absolute inset-0 h-5 w-5 text-[#5E4DE1]
                      transition-all duration-300 ease-in-out
                      ${isExpanded
                        ? "rotate-90 opacity-0 scale-75"
                        : "rotate-0 opacity-100 scale-100"}
                `}
                  />

                  {/* Minus Icon */}
                  <DashCircle
                    className={`
                      absolute inset-0 h-5 w-5 text-[#5E4DE1]
                      transition-all duration-300 ease-in-out
                      ${isExpanded
                        ? "rotate-0 opacity-100 scale-100"
                        : "-rotate-90 opacity-0 scale-75"}
                `}
                  />
                </span>

              </button>

              <div
                className={`
                  mt-2
                  grid
                  transition-[grid-template-rows,opacity,transform]
                  duration-500
                  ease-in-out
                  ${isExpanded
                    ? "grid-rows-[1fr] opacity-100 translate-y-0"
                    : "grid-rows-[0fr] opacity-0 -translate-y-1"
                  }
                `}
              >
                <div className="overflow-hidden">
                  <p className="text-[#353535] text-base font-medium">
                    {item.answer}
                  </p>
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Accordion;
