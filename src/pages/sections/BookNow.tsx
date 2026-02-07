import { Input } from "../../components/ui/input"
import { Button } from "../../components/ui/button"

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


const BookDemo = () => {
  return ( 
    <div className="flex flex-col items-center p-5">
      {/* Outer Frame */}
      <div className="relative w-full">

        {/* Dashed Border Frame */}
        <div className="absolute inset-0 border-t border-dashed border-[#5E4DE4] pointer-events-none top-5" />
        <div className="absolute inset-0 border-l border-dashed border-[#5E4DE4] pointer-events-none left-5" />
        <div className="absolute inset-0 border-l border-dashed border-[#5E4DE4] pointer-events-none left-87" />
        <div className="absolute inset-0 border-r border-dashed border-[#5E4DE4] pointer-events-none right-5" />
        <div className="absolute inset-0 border-b border-dashed border-[#5E4DE4] pointer-events-none bottom-22" />
        <div className="absolute inset-0 border-b border-dashed border-[#5E4DE4] pointer-events-none bottom-5" />

        {/* Content */}
        <div className="relative px-8 py-8">
          <div className="grid grid-cols-3 gap-5">

            {/* Form */}
            <div className="col-span-1 ml-3">
              {fields.map((field) => (
                <div key={field.label} className="mb-4">
                  <label className="text-[10px] font-medium">
                    {field.label}
                  </label>
                  <Input
                    placeholder={field.placeholder}
                    className="h-11 px-5 border border-[#b0b0b0]"
                  />
                </div>
              ))}

              <Button
                className="
                  relative overflow-hidden
                  w-full h-12 mt-3
                  bg-[#5E4DE4]
                  hover:bg-[#543ED2]
                  transition-all duration-300 ease-out
                  cursor-pointer
                  hover:shadow-[0_12px_35px_rgba(84,62,210,0.55)]
                  after:content-['']
                  after:absolute
                  after:top-0
                  after:-left-2/3
                  after:w-1/2
                  after:h-full
                  after:bg-white/15
                  after:skew-x-[-20deg]
                  after:transition-all
                  after:duration-700
                  after:ease-in-out
                  hover:after:left-[120%]
  "
              >
                <span className="relative z-10">Get the price</span>
              </Button>
            </div>

            {/* Right Side Graphics */}
            <div className="col-span-2 flex flex-col items-center justify-center">
              <img
                src="https://res.cloudinary.com/dflelt85r/image/upload/v1770185805/Group_6357568_rcketl.svg"
                alt="Logo"
                className="w-107.5 opacity-5 mb-6"
              />
              <img
                src="https://res.cloudinary.com/dflelt85r/image/upload/v1770189496/Vector_446_xdtyms.svg"
                alt="Vector"
                className="mb-25"
              />
              <h2 className="text-xl font-medium">We will reach you soon 💝</h2>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default BookDemo
