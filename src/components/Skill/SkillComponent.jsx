import LayoutComponent from "../LayoutComponent"
import CardSkill from "./CardSkill"
import { skillarray } from "./skillarray"


const SkillComponent = () => {
  return (
    <LayoutComponent topic={'Skill'} idcomponent={'skills'} bgopacity={'bg-opacity-[98%]'}>    
          {/* Label*/}
          <p className=" text-white pl-[0.5rem] text-opacity-80 font-Incluesive-Sans">These are the Tech Stacks I learned and used in my project.</p>

          {/* Skills */}
          <div className=" flex flex-wrap gap-[1rem]    mt-[2rem] ">
            {skillarray.map((e)=>{
              return(
                <CardSkill key={e.id} image = {e.image}  programLanguage={e.text}/>
              )
            })}
          </div>    

    </LayoutComponent>
       
    
  )
}

export default SkillComponent