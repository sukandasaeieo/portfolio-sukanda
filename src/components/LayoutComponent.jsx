/* eslint-disable react/prop-types */

const LayoutComponent = ({children ,topic , idcomponent , bgopacity}) => {
  return (
    <section id={idcomponent} className={` bg-fuchsia-900 ${bgopacity} scroll-mt-[4rem] py-[2rem] lg:p-[2rem]`}>
        <div className="w-[80%] mx-auto">

            {/* Topic */}
            <span className=" text-white text-[1.5rem]  font-semibold font-Incluesive-Sans lg:px-[0.7rem] py-[0.2rem] rounded-lg hover:bg-[#515a59af] hover:cursor-pointer">
                #<span className="border-b-2 ">{topic}</span>
            </span>

            {/* Content */}
            {children}
        </div>
    </section>
  )
}

export default LayoutComponent