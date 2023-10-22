import LayoutComponent from "../LayoutComponent"
import EducationLayout from "./EducationLayout"


const EducationComponent = () => {
  return (
    <LayoutComponent topic={'Education'} idcomponent={'education'} bgopacity={'bg-opacity-[90%]'}>

      <EducationLayout topic1={'Generation Thailand'} topic2={'Junior Software Developer Bootcamp (JSD5)'} durationtime={'July 2023 - October 2023'} addresslearn={'Online , Thailand'}>
        <div className="text-white text-opacity-80 font-Incluesive-Sans text-[0.9rem] mt-[1rem] lg:mt-0 lg:text-[1rem] lg:pl-[2rem]">
          <p>-Technical Skills: <span className=" ml-[0.7rem] ">HTML / CSS / JS / ReactJS / Git / GitHub/ SQL</span></p>
          <div className=" mt-[1rem] lg:mt-0 lg:flex">
            <p className=" inline">-Soft Skills:</p>            
            <p className=" inline ml-[0.7rem] max-w-[580px]">Growth Mindset / Persistence / Teamwork / Proactiveness/ Commucation</p>
          </div>
        </div>
      </EducationLayout>

      <EducationLayout topic1={'Suan Sunandha Rajabhat University (SSRU)'} topic2={'Bachelor of liberal arts (English Major)'} durationtime={'2014'} addresslearn={'Bangkok , Thailand'}>
        <div></div>
      </EducationLayout>

  
        
     

    </LayoutComponent>
  )
}

export default EducationComponent