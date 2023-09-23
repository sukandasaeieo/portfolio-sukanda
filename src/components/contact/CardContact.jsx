/* eslint-disable react/prop-types */

const CardContact = ({icon , nameicon ,linktarget }) => {
  return (
    <a  href={linktarget} target="_blank" rel="noopener noreferrer" 
        className="btn max-w-[12rem]    flex justify-start items-center gap-x-[0.7rem]">
        {icon}
        <span className=" normal-case">{nameicon}</span>
       
    </a>
  )
}

export default CardContact