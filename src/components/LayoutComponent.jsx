/* eslint-disable react/prop-types */

const LayoutComponent = ({children ,topic}) => {
  return (
    <section className="w-[80%] mx-auto">

        {/* Topic */}
        <span className=" text-white text-[1.5rem] font-semibold px-[0.5rem] py-[0.2rem] rounded-lg hover:bg-[#515a5980] hover:cursor-pointer">
            #{topic}
        </span>

        {/* Content */}
        {children}
    </section>
  )
}

export default LayoutComponent