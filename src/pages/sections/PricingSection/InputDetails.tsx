import { Input } from "../../../components/ui/input"
import { Button } from "../../../components/ui/button"
import { ScrollReveal } from "../../components/ScrollReveal"

type Field = {
  label: string
  placeholder: string
}

const fields: readonly Field[] = [
  { label: "Name", placeholder: "Enter your full name" },
  { label: "Job role", placeholder: "Enter your current job role" },
  { label: "Phone", placeholder: "Enter your phone number" },
  { label: "Email", placeholder: "Enter your email ID" },
  { label: "Message (optional)", placeholder: "Enter message" },
]


const InputDetails = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-16 py-16">
      <ScrollReveal>
        <div className="max-w-7xl mx-auto">

          <h1 className="text-3xl font-semibold text-black mb-14 text-center">
            Get the <span className="text-[#5E4DE1]">exact price</span> for your{" "}
            <span className="text-[#5E4DE1]">institution...</span>
          </h1>

          {/* Outer Frame */}
          <div className="relative w-full p-4">

            {/* Dashed Border Frame */}
            <div className="absolute inset-0 border-t border-dashed border-[#5E4DE4] pointer-events-none top-[2%] sm:top-[3%]" />
            <div className="absolute inset-0 border-l border-dashed border-[#5E4DE4] pointer-events-none left-[5%] sm:left-[2%]" />
            <div className="absolute inset-0 border-l border-dashed border-[#5E4DE4] pointer-events-none left-[40%] md:left-[55%] lg:left-[40%]  hidden md:block" />

            <div className="absolute inset-0 border-r border-dashed border-[#5E4DE4] pointer-events-none right-[5%] sm:right-[2%]" />
            <div className="absolute inset-0 border-b border-dashed border-[#5E4DE4] pointer-events-none bottom-[2%] sm:bottom-[3%]" />
            <div className="absolute inset-0 border-b border-dashed border-[#5E4DE4] pointer-events-none bottom-[3%] sm:bottom-[17%] hidden md:block" />
            <div className="absolute inset-0 border-b border-dashed border-[#5E4DE4] pointer-events-none bottom-[35%] block sm:hidden" />

            {/* Content */}
            <div className="relative">
              <div className="flex flex-col md:flex-row gap-10 lg:gap-20">

                {/* Form */}
                <div className="w-full lg:w-2/5 p-6">
                  {fields.map((field) => (
                    <div key={field.label} className="mb-4">
                      <label className="text-[10px] font-medium">
                        {field.label}
                      </label>
                      <Input
                        placeholder={field.placeholder}
                        className="h-11 sm:h-12 mt-1 px-4 border border-[#b0b0b0]"
                      />
                    </div>
                  ))}

                  {/* <Button
                  className="relative overflow-hidden w-full h-12 mt-3 bg-[#5E4DE4] hover:bg-[#543ED2] transition-all duration-300 ease-out cursor-pointer hover:shadow-[0_12px_35px_rgba(84,62,210,0.55)] after:content-[''] after:absolute
                  after:top-0 after:-left-2/3 after:w-1/2 after:h-full after:bg-white/15 after:skew-x-[-20deg] after:transition-all after:duration-700 after:ease-in-out hover:after:left-[120%]"
                >
                  <span className="relative z-10 text-sm sm:text-base">Get the price</span>
                </Button> */}
                  <Button
                    variant="shimmer"
                    className="w-full px-8 py-5 text-base font-medium rounded-sm mt-5"
                  >
                    Get the price
                  </Button>
                </div>

                {/* Right Side Graphics */}
                <div className="flex flex-col items-center justify-center px-4 sm:px-6">
                  <img
                    src="https://res.cloudinary.com/dflelt85r/image/upload/v1770185805/Group_6357568_rcketl.svg"
                    alt="Logo"
                    className="mx-auto mb-6 opacity-5 h-auto w-full"
                  />
                  <img
                    src="https://res.cloudinary.com/dflelt85r/image/upload/v1770189496/Vector_446_xdtyms.svg"
                    alt="Vector"
                    className="mx-auto h-auto w-full mb-4 sm:mb-0"
                  />
                </div>

              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}

export default InputDetails
