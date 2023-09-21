import LayoutComponent from "../LayoutComponent"
import CardSkill from "./CardSkill"
import { skillarray } from "./skillarray"


const SkillComponent = () => {
  return (
    <div id="skills" className=" min-h-[90vh] bg-black bg-opacity-[98%] scroll-mt-[5rem] p-[2rem]">
      <LayoutComponent topic={'Skill'}>    
          {/* Label*/}
          <p className=" text-white pl-[0.5rem] text-opacity-80">These are the Tech Stacks I learned and used in my project.</p>

          {/* Skills */}
          <div className=" flex flex-wrap gap-[1rem]    mt-[2rem] ">
            {skillarray.map((e)=>{
              return(
                <CardSkill key={e.id} image = {e.image}  programLanguage={e.text}/>
              )
            })}
          </div>    

      </LayoutComponent>
       
          
    </div>
  )
}

export default SkillComponent