/* eslint-disable react/prop-types */

const TopicComponent = ({topic}) => {
  return (
    <span className=" text-white font-semibold px-[0.5rem] py-[0.2rem] rounded-lg hover:bg-[#515a5980] hover:cursor-pointer">
        #{topic}
    </span>
  )
}

export default TopicComponent