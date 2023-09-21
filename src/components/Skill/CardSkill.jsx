/* eslint-disable react/prop-types */
const CardSkill = ({image , programLanguage}) => {
  return (
    <div className=" w-[180px] py-[1rem] rounded-lg bg-[#18181b] bg-opacity-70 flex flex-col justify-center items-center hover:scale-[1.1] hover:cursor-pointer delay-150 duration-150 ease-in-out ">
        <img src={image} alt="" className=" w-[50%]"/>
        <p className=' font-semibold text-[1.1rem] text-white text-opacity-80 '>{programLanguage}</p>
    </div>
  )
}

export default CardSkill