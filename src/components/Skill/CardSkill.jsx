/* eslint-disable react/prop-types */
const CardSkill = ({image , programLanguage}) => {
  return (
    <div className=" w-[180px] py-[1rem] rounded-lg bg-[#18181b] bg-opacity-70 flex flex-col justify-center items-center hover:scale-[1.1] hover:cursor-pointer hover:delay-150 hover:duration-150 ">
        <img src={image} alt="" className=" w-[50%]"/>
        <p className=' font-bold text-[1.1rem] text-white opacity-70 '>{programLanguage}</p>
    </div>
  )
}

export default CardSkill