import { Input } from "../../../components/ui/input"
import { Button } from "../../../components/ui/button"

const InputDetails = () => {
  return (
    <div className="flex flex-col items-center">
          <h1 className="text-3xl font-semibold text-black  mb-14">Get the&nbsp;<span className='text-[#5E4DE1]'>exact price</span> for your&nbsp;<span className='text-[#5E4DE1]'>institution...</span></h1>
        
          {/* Add your info content here */}
        <div>
          <div className='w-245 h-141.5 grid grid-cols-3 gap-4 justify-center'>
            <div className=''>
              <div className='w-77.5 h-11.5'>
                <div>
                  <label className='text-[10px] font-medium'>Name</label>
                  <Input type="text" placeholder='Enter your full name' className='w-full h-full py-3.5 px-6 border border-[#b0b0b0] rounded-md mb-5' />
                </div>
                <div>
                  <label className='text-[10px] font-medium'>Job role</label>
                  <Input type="text" placeholder='Enter your current job role' className='w-full h-full py-3.5 px-6 border border-[#b0b0b0] rounded-md mb-5' />
                </div>
                <div>
                  <label className='text-[10px] font-medium'>Phone</label>
                  <Input type="text" placeholder='Enter your phone number' className='w-full h-full py-3.5 px-6 border border-[#b0b0b0] rounded-md mb-5' />
                </div>
                <div>
                  <label className='text-[10px] font-medium'>Email</label>
                  <Input type="text" placeholder='Enter your email ID' className='w-full h-full py-3.5 px-6 border border-[#b0b0b0] rounded-md mb-5' />
                </div>
                 <div>
                  <label className='text-[10px] font-medium'>Message(optional)</label>
                  <Input type="text" placeholder='Enter message' className='w-full h-full py-3.5 px-6 border border-[#b0b0b0] rounded-md mb-5' />
                </div>
                <Button className='w-full h-12 bg-[#5E4DE4] px-7.5 py-2.5 hover:bg-[#5E4DE4]/90 cursor-pointer mt-2.5'>Get the price</Button>
              </div>
            </div>
            <div className='col-span-2 flex flex-col justify-center items-center'>
              <div className='space-y-7'>
                <img src='https://res.cloudinary.com/dflelt85r/image/upload/v1770185805/Group_6357568_rcketl.svg' alt='Logo' className='h-[136.54px] w-[430.16px] opacity-5' />
                <img src="https://res.cloudinary.com/dflelt85r/image/upload/v1770189496/Vector_446_xdtyms.svg" alt="Vector 446" />
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default InputDetails