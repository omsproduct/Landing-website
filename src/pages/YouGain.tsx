const YouGain = () => {
  return (
    <>
    
  
    <div className='py-30 px-38'>
      <h2 className="text-3xl font-semibold text-center mb-19">
        You <span className="text-[#5E4DE1]">Gain...</span>
      </h2>

      <div className="
        max-w-[1135px]
        mx-auto
        mt-14
        flex
        
        gap-10
      ">
        {/* Main Illustration */}
        <img
          src="/src/assets/Group 427320981.svg"
          alt="you gain"
          className="
            w-full
            max-w-[750px]
            h-auto
            object-contain
          "
        />

        {/* Side Vector */}
        <img
          src="/src/assets/Vector 435 (1).svg"
          alt=""
          className="
            w-[220px]
            sm:w-[280px]
            lg:w-[373px]
            h-auto
            object-contain
            mb-40
          "
        />
      </div>
    </div>
      </>
  )
}

export default YouGain
