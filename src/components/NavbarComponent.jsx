import { AiOutlineHome} from "react-icons/ai";

const NavbarComponent = () => {
  return (
    <nav className=" flex justify-between items-center p-[1rem] pr-[2rem] bg-[#131314] sticky top-0 z-10 font-Incluesive-Sans">
        {/* Left */}        
        <a href="#" className=" px-[0.5rem] py-[0.2rem] rounded-lg hover:bg-[#515a59] ">
          <AiOutlineHome className=" text-[1.5rem] text-white "/>
        </a>

        {/* Right */}
        <section className=" ">
            <ul className="flex gap-x-[1rem] list-none [&>li]:px-[0.5rem] [&>li]:py-[0.2rem] [&>li]:rounded-lg text-white">
                <li className=" hover:bg-[#515a59] "><a href="#about">About</a></li>
                <li className=" hover:bg-[#515a59] "><a href="#education">Education</a></li>
                <li className=" hover:bg-[#515a59] "><a href="#experience">Experience</a></li>
                <li className=" hover:bg-[#515a59] "><a href="#skills">Skills</a></li>
                <li className=" hover:bg-[#515a59] "><a href="#projects">Projects</a></li>
                <li className=" hover:bg-[#515a59] "><a href="#">Contact</a></li>
            </ul>
        </section>
    </nav>
  )
}

export default NavbarComponent