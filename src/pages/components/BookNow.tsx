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
    <form className="p-3 sm:p-4 md:p-5">
      {/* Outer Frame */}
      <div className="w-full overflow-hidden">

        {/* Content */}

        <div className="flex flex-col md:flex-row">

          {/* Form */}
          <div className="w-full md:w-2/5 p-8 sm:p-10 relative">
            <div className="absolute border-t border-dashed border-[#5E4DE4] w-full top-[3%] left-0" />
            <div className="absolute border-b border-dashed border-[#5E4DE4] w-full bottom-[3%] left-0" />
            <div className="absolute border-l border-dashed border-[#5E4DE4] h-full left-[5%] top-0" />
            <div className="absolute border-b border-dashed border-[#5E4DE4] w-full bottom-[17%] left-0" />
            <div className="absolute border-r border-dashed border-[#5E4DE4] h-full right-[5%] top-0" />
            {fields.map((field) => (
              <div key={field.label} className="mb-4">
                <label className="text-[10px] font-medium block mb-1">
                  {field.label}
                </label>
                <Input
                  placeholder={field.placeholder}
                  className="h-10 sm:h-11 px-4 border border-[#b0b0b0]"
                />
              </div>
            ))}

            <Button
              variant="shimmer"
              className="w-full py-3 sm:py-5 text-sm sm:text-base font-medium rounded-sm mt-4"
            >
              Get the price
            </Button>
          </div>

          {/* Right Side Graphics */}
          <div className="w-full md:w-3/5 p-6 sm:p-8 flex flex-col items-center justify-center text-center relative">

            <div className="absolute border-t border-dashed border-[#5E4DE4] w-full top-[3%] left-0 hidden md:block" />
            <div className="absolute border-b border-dashed border-[#5E4DE4] w-full bottom-[3%] left-0" />
            <div className="absolute border-b border-dashed border-[#5E4DE4] w-full bottom-[17%] left-0" />

            <div className="absolute border-l border-dashed border-[#5E4DE4] h-full left-[5%] top-0 block md:hidden" />
            <div className="absolute border-r border-dashed border-[#5E4DE4] h-full right-[5%] top-0" />
            <img
              src="https://res.cloudinary.com/dflelt85r/image/upload/v1770185805/Group_6357568_rcketl.svg"
              alt="Logo"
              className="h-auto w-full sm:w-[60%] md:w-[80%] opacity-10 mb-10 mt-10"
            />
            <img
              src="https://res.cloudinary.com/dflelt85r/image/upload/v1770189496/Vector_446_xdtyms.svg"
              alt="Vector"
              className="h-auto w-full sm:w-[70%] md:w-[90%] mb-10"
            />

            <div className="text-base sm:text-lg md:text-xl font-semibold flex items-center gap-2">
              <h3>We will reach you soon...</h3>
              <img
                src="https://res.cloudinary.com/dflelt85r/image/upload/v1770541296/%EF%B8%8F_Smiling_Face_Frontal_n4n2jj.svg"
                alt="smiley face"
                className="w-4 sm:w-5 h-auto"
              />
            </div>

          </div>

        </div>
      </div>
    </form>
  )
}

export default BookDemo
