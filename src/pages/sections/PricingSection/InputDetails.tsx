import { Input } from "../../../components/ui/input"
import { Button } from "../../../components/ui/button"

const InputDetails = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-semibold text-black mb-14">
        Get the <span className="text-[#5E4DE1]">exact price</span> for your{" "}
        <span className="text-[#5E4DE1]">institution...</span>
      </h1>

      {/* Outer Frame */}
      <div className="relative w-245">

        {/* Dashed Border Frame */}
        <div className="absolute inset-0 border-t border-dashed border-[#5E4DE4] pointer-events-none top-5" />
        <div className="absolute inset-0 border-l border-dashed border-[#5E4DE4] pointer-events-none left-5" />
        <div className="absolute inset-0 border-l border-dashed border-[#5E4DE4] pointer-events-none left-87" />
        <div className="absolute inset-0 border-r border-dashed border-[#5E4DE4] pointer-events-none right-5" />
        <div className="absolute inset-0 border-b border-dashed border-[#5E4DE4] pointer-events-none bottom-5" />

        {/* Content */}
        <div className="relative px-12 py-8">
          <div className="grid grid-cols-3 gap-8">

            {/* Form */}
            <div className="">
              {[
                ["Name", "Enter your full name"],
                ["Job role", "Enter your current job role"],
                ["Phone", "Enter your phone number"],
                ["Email", "Enter your email ID"],
                ["Message (optional)", "Enter message"],
              ].map(([label, placeholder]) => (
                <div key={label} className="mb-4">
                  <label className="text-[10px] font-medium">
                    {label}
                  </label>
                  <Input
                    placeholder={placeholder}
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
    transition-colors duration-300

    after:content-['']
    after:absolute
    after:top-0
    after:-left-[60%]
    after:w-1/2
    after:h-full
    after:bg-white/20
    after:skew-x-[-20deg]
    after:transition-all
    after:duration-500
    after:ease-out

    hover:after:left-[120%]
    cursor-pointer
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
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default InputDetails
