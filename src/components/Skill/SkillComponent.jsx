import TopicComponent from "../TopicComponent"
import CardSkill from "./CardSkill"
import { skillarray } from "./skillarray"


const SkillComponent = () => {
  return (
    <div id="skills" className=" min-h-[90vh] bg-black bg-opacity-[98%] scroll-mt-[5rem] p-[2rem]">
      <div className="w-[80%] mx-auto">
        <TopicComponent topic={'Skill'}/>
        <p className=" text-white pl-[0.5rem] text-opacity-80">These are the Tech Stacks I learned and used in my project.</p>

        <div className=" flex flex-wrap gap-[1rem]    mt-[2rem] ">
        {skillarray.map((e)=>{
          return(
            <CardSkill key={e.id} image = {e.image}  programLanguage={e.text}/>
          )
        })}
      </div>    

      </div>

       
          
    </div>
  )
}

export default SkillComponent