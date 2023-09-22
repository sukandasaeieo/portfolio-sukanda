import LayoutComponent from "../LayoutComponent"
import ExperienceLayout from "./ExperienceLayout"


const ExperienceComponent = () => {
  return (
    <LayoutComponent topic={'Experience'} idcomponent={'experience'} bgopacity={'bg-opacity-[96%]'}>

      <ExperienceLayout topic1={'Self-Learning FullStack Developer'} topic2={''} durationtime={'Febuary 2023 - July 2023'} addresslearn={'Online , Thailand'}>
        <div className="text-white text-opacity-80 font-Incluesive-Sans pl-[2rem]">
            <p>- Technical Skills: HTML5 / CSS3 / JS / Boostrap5 / Tailwind / ReactJS / NodeJS / ExpressJS / MongoDB / NextJS</p>
            <p>- Challange: Frontend Mentor</p>
        </div>
      </ExperienceLayout>

      <ExperienceLayout topic1={'Self-Learning Game Developer '} topic2={''} durationtime={'May 2022 - February 2023'} addresslearn={'Online , Thailand'}>
        <div className="text-white text-opacity-80 font-Incluesive-Sans pl-[2rem]">
            <p>- Technical Skills: C# / Unity</p>
            <p>- Challange: Create Game RPG 3D</p>
            <div className=" pl-[2rem]">
              <p>- NPC (Buy / Sell)</p>
              <p>- Player (Move / Inventory / Shortcut F1-F9 / Tap status)</p>
              <p>- Monster (Spawn / Move / Response attack / Check name)</p>
            </div>
        </div>
      </ExperienceLayout>

      <ExperienceLayout topic1={'Thai PLC Center'} topic2={'Cooperative Education'} durationtime={'November 2021 - March 2022'} addresslearn={'Ayutthaya , Thailand'}>
        <div className="text-white text-opacity-80 font-Incluesive-Sans pl-[2rem]">
            <p>- Assemble and write a program for the training set PLC</p>
            <p>- Write program Robotic Arm spray color product by PLC</p>
            <p>- Project create window app to control Robotic Arm by Visual Studio C#
                 and Forward kinematic
            </p>
        </div>
      </ExperienceLayout>

      <ExperienceLayout topic1={'Prince of Songkla University'} topic2={'[2020]'} durationtime={''} addresslearn={'Songkla , Thailand'}>
        <div className="text-white text-opacity-80 font-Incluesive-Sans pl-[2rem]">
            <p>- Inventing a Land leveling Robot &ldquo; 2020 Smart Agricultural Robot Contest &rdquo;</p>           
            <p>- President of a PSU Shooting Club.</p>           
            <p>- Collaborated with Student Organization - Administrative Organization in the event &ldquo; Opening the world of activities &rdquo; and &ldquo; ASEAN night &rdquo;</p>           
        </div>
      </ExperienceLayout>

      <ExperienceLayout topic1={''} topic2={'[2019]'} durationtime={''} addresslearn={'Songkla , Thailand'}>
        <div className="text-white text-opacity-80 font-Incluesive-Sans pl-[2rem]">
            <p>- Planning a Shooting club activity project.</p>           
            <p>- A staff member in an orientation event for a new student at the university -Staff in the basic shooting training project</p>           
            <p>- A staff member of PSU Robotics Competition 2019 that included line following robot and Sumo robot in the event Engineering Funfair</p>           
        </div>
      </ExperienceLayout>

    </LayoutComponent>
  )
}

export default ExperienceComponent