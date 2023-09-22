import LayoutComponent from "../LayoutComponent"
import EducationLayout from "./EducationLayout"


const EducationComponent = () => {
  return (
    <LayoutComponent topic={'Education'} idcomponent={'education'} bgopacity={'bg-opacity-[98%]'}>

      <EducationLayout topic1={'Generation Thailand'} topic2={'Junior Software Developer Booscamp (JSD)'} durationtime={'July 2023 - October 2023'} addresslearn={'Online , Thailand'}>
        <div className="text-white text-opacity-80 font-Incluesive-Sans pl-[2rem]">
          <p>-Technical Skills: HTML / CSS / JS / ReactJS / NodeJS / ExpressJS / MongoDB / Git / GitHub</p>
          <p>-Soft Skills: Growth Mindset / Persistence / Future Orientation / Orientation to Details / Teamwork</p>
        </div>
      </EducationLayout>

      <EducationLayout topic1={'Prince of Songkla University (PSU)'} topic2={'Bachelor of Engineering (Mechatronics Engineering)'} durationtime={'August 2018 - May 2022'} addresslearn={'Songkhla , Thailand'}>
        <div></div>
      </EducationLayout>

      <EducationLayout topic1={'Benjamarachutit Pattani School (BM)'} topic2={''} durationtime={''} addresslearn={'Pattani , Thailand'}>
        <div className=" font-Incluesive-Sans">
          <section className=" flex justify-between text-white text-opacity-80">
            <p className="">Enrichment Program of Science Mathematics Technology and Environment (SMTE)</p>
            <span>2015 - 2018</span>
          </section>
          
        </div>
      </EducationLayout>

    </LayoutComponent>
  )
}

export default EducationComponent