/* eslint-disable react/prop-types */

const CardContact = ({icon , nameicon ,linktarget }) => {
  return (
    <a  href={linktarget} target="_blank" rel="noopener noreferrer" 
        className="btn w-auto sm:w-auto  sm:max-w-[12rem]    sm:flex  sm:justify-start sm:items-center sm:gap-x-[0.7rem] active:bg-base-300 hover:bg-violet-950 hover:text-white ">
        {icon}
        <span className=" hidden sm:block normal-case">{nameicon}</span>
       
    </a>
  )
}

export default CardContact