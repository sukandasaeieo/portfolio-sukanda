import LayoutComponent from "../LayoutComponent"
import ExperienceLayout from "./ExperienceLayout"


const ExperienceComponent = () => {
  return (
    <LayoutComponent topic={'Experience'} idcomponent={'experience'} bgopacity={'bg-opacity-[94%]'}>
      

      <ExperienceLayout topic1={'Generation Thailand'} topic2={''} durationtime={'July 2023 - October 2023'} addresslearn={'Online , Thailand'}>
        <p>- Challange: <span className=" ml-[0.5rem]">Colmar Academy / Find your hat / React Assessment</span></p>
      </ExperienceLayout>

      <ExperienceLayout topic1={'Self-Learning FullStack Developer'} topic2={''} durationtime={'Febuary 2023 - July 2023'} addresslearn={'Online , Thailand'}>
        <p>- Technical Skills: <span className=" ml-[0.5rem]">HTML5 / CSS3 / JS / Boostrap5 / Tailwind / ReactJS / NodeJS / ExpressJS / MongoDB / NextJS</span></p>
        <p>- Challange: <span className=" ml-[0.5rem]">Frontend Mentor</span></p>
      </ExperienceLayout>

      <ExperienceLayout topic1={'Self-Learning Game Developer '} topic2={''} durationtime={'May 2022 - February 2023'} addresslearn={'Online , Thailand'}>
        <p>- Technical Skills: <span className=" ml-[0.5rem]">C# / Unity</span></p>
        <p>- Challange: <span className=" ml-[0.5rem]">Create Game RPG 3D</span></p>
          <div className=" pl-[2rem]">
            <p>- NPC (Buy / Sell)</p>
            <p>- Player (Move / Inventory / Shortcut F1-F9 / Tap status)</p>
            <p>- Monster (Spawn / Move / Response attack / DropItem / Check name)</p>
          </div>
      </ExperienceLayout>

      <ExperienceLayout topic1={'Thai PLC Center'} topic2={'Cooperative Education'} durationtime={'November 2021 - March 2022'} addresslearn={'Ayutthaya , Thailand'}>
        <p>- Assemble and write a program for the training set PLC</p>
        <p>- Write program Robotic Arm spray color product by PLC</p>
        <p>- Project create window app to control Robotic Arm by Visual Studio C#
             and Forward kinematic
        </p>        
      </ExperienceLayout>

      <ExperienceLayout topic1={'Prince of Songkla University'} topic2={'[2020]'} durationtime={''} addresslearn={'Songkla , Thailand'}>
        <p>- Inventing a Land leveling Robot &ldquo; 2020 Smart Agricultural Robot Contest &rdquo;</p>           
        <p>- President of a PSU Shooting Club.</p>           
        <p>- Collaborated with Student Organization - Administrative Organization in the event &ldquo; Opening the world of activities &rdquo; and &ldquo; ASEAN night &rdquo;</p>           
      </ExperienceLayout>

      <ExperienceLayout topic1={''} topic2={'[2019]'} durationtime={''} addresslearn={'Songkla , Thailand'}>
        <p>- Planning a Shooting club activity project.</p>           
        <p>- A staff member in an orientation event for a new student at the university -Staff in the basic shooting training project</p>           
        <p>- A staff member of PSU Robotics Competition 2019 that included line following robot and Sumo robot in the event Engineering Funfair</p>           
      </ExperienceLayout>

    </LayoutComponent>
  )
}

export default ExperienceComponent