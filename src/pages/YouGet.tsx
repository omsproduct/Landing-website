const YouGet = () => {
  return (
    <div className="mt-30 px-30 flex flex-col items-center gap-10">
      <h2 className="text-3xl font-semibold text-center">
        You <span className="text-[#5E4DE1]">Get...</span>
      </h2>

      <picture>
        {/* Desktop */}
        <source
          media="(min-width: 768px)"
          srcSet="https://res.cloudinary.com/dflelt85r/image/upload/v1770272054/Group_427321007_2_irgxcu.svg"
        />

        {/* Mobile (fallback) */}
        <img
          src="https://res.cloudinary.com/dflelt85r/image/upload/v1770382299/Group_427321037_1_1_fu3kq2.svg"
          alt="Overview of features you get with OMS"
        />
      </picture>
    </div>
  )
}

export default YouGet
