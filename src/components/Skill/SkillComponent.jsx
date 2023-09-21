import CardSkill from "./CardSkill"
import { skillarray } from "./skillarray"


const SkillComponent = () => {
  return (
    <div id="skills" className=" min-h-screen bg-black bg-opacity-98 scroll-mt-[6rem] p-[2rem]">
      <span className=" text-white px-[0.5rem] py-[0.2rem] rounded-lg hover:bg-[#515a5980] hover:cursor-pointer">#Skills</span>
      <div className=" flex flex-wrap gap-[1rem]   w-[80%] mx-auto mt-[2rem] border ">
        {skillarray.map((e)=>{
          return(
            <CardSkill key={e.id} image = {e.image}  programLanguage={e.text}/>
          )
        })}
      </div>     
          
    </div>
  )
}

export default SkillComponent