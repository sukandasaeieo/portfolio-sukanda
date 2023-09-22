/* eslint-disable react/prop-types */

const LayoutComponent = ({children ,topic , idcomponent , bgopacity}) => {
  return (
    <section id={idcomponent} className={`min-h-[90vh] bg-black ${bgopacity} scroll-mt-[4rem] p-[2rem]`}>
        <div className="w-[80%] mx-auto">

            {/* Topic */}
            <span className=" text-white text-[1.5rem] font-semibold font-Incluesive-Sans px-[0.5rem] py-[0.2rem] rounded-lg hover:bg-[#515a5980] hover:cursor-pointer">
                #{topic}
            </span>

            {/* Content */}
            {children}
        </div>
    </section>
  )
}

export default LayoutComponent