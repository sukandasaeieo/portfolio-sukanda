import LayoutComponent from "./LayoutComponent"



const AboutComponent = () => {
  return (
    <LayoutComponent topic={'About'} idcomponent={'about'} bgopacity={'bg-opacity-[90%]'}>
        <div className=" flex flex-col-reverse lg:flex-row justify-between items-center mt-[2rem] bg-fuchsia-950 rounded-md">
            <p className=" text-white lg:text-[1.2rem] pl-[0.5rem] text-opacity-80  mt-[2rem] lg:w-[40%] font-Incluesive-Sans">Adaptable professional with a proven history of excellence in customer service, administrative, and secretary roles, currently enrolled in a rigorous software development bootcamp. Fusing my customer-centric mindset with emerging technical skills, I aspire to secure a software developer position. Eager to merge problem-solving prowess, meticulous organization, and a collaborative demeanor to craft innovative and impactful solutions as part of a dynamic development team</p>
            <img src="https://cdn.pixabay.com/photo/2015/09/05/22/33/office-925806_1280.jpg" alt="" className=" lg:w-[50%] rounded-3xl" />
        </div>
    </LayoutComponent>
  )
}

export default AboutComponent