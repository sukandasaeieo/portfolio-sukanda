/* eslint-disable react/prop-types */
const CardSkill = ({image , programLanguage}) => {
  return (
    <div className=" w-[100px] h-[100px] lg:w-[180px] lg:h-auto p-[1rem] rounded-lg bg-[#2c2c46] bg-opacity-70 flex flex-col justify-center items-center hover:scale-[1.1] hover:cursor-pointer delay-150 duration-150 ease-in-out ">
        <img src={image} alt="" className=" w-[50%]"/>
        <p className=' font-semibold text-[0.8rem] lg:text-[1.1rem] text-white text-opacity-80 mt-[0.5rem] lg:mt-0 '>{programLanguage}</p>
    </div>
  )
}

export default CardSkill