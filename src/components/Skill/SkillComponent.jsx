import LayoutComponent from "../LayoutComponent"
import CardSkill from "./CardSkill"
import { skillarray } from "./skillarray"


const SkillComponent = () => {
  return (
    <LayoutComponent topic={'Skills'} idcomponent={'skills'} bgopacity={'bg-opacity-[90%]'}>    
          {/* Label*/}
          <p className=" text-white text-[0.9rem] lg:text-[1rem]  text-opacity-80 font-Incluesive-Sans pl-[0.5rem]">These are the Tech Stacks I learned and used in my project.</p>

          {/* Skills */}
          <div className=" flex flex-wrap justify-center lg:justify-start  gap-[1rem]  mt-[2rem] ">
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