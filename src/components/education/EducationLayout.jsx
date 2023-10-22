/* eslint-disable react/prop-types */

const EducationLayout = (props) => {
    const {topic1 , topic2 , durationtime , addresslearn , children} =props
    return (
      <section className=" mt-[2rem]  hover:bg-white hover:bg-opacity-10 hover:cursor-pointer p-[1rem] rounded-xl border border-[#413f3f]  bg-fuchsia-950">
          <div className=" flex justify-between text-white     font-Incluesive-Sans">
              {/* Left */}
              <section >
                <h3 className=" text-[1.2rem] lg:text-[1.4rem] font-bold">{topic1}</h3>
                <h4 className=" text-[0.9rem] lg:text-[1rem] text-white text-opacity-80">{topic2}</h4>  
              </section>
  
              {/* Right */}
             <section className=" hidden lg:block text-end text-[1rem] text-white text-opacity-80">
                <p>{durationtime}</p>
                <p>{addresslearn}</p>
             </section>
          </div>
          {children}
      </section>
    )
}

export default EducationLayout