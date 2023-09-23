import { AiOutlineHome} from "react-icons/ai";
import { HiMenu } from "react-icons/hi";
const NavbarComponent = () => {
  return (
    <nav className="bg-[#131314] sticky top-0 z-10 font-Incluesive-Sans">
        {/* Desktop version */}
        <section className=" hidden lg:flex justify-between items-center  pr-[2rem] ">
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
                    <li className=" hover:bg-[#515a59] "><a href="#contact">Contact</a></li>
                </ul>
            </section>
        </section>

        {/* Mobile version */}
        <section className="navbar text-white lg:hidden py-0  px-[1rem]">

              {/* Left */}
              <div className="flex-1">
                <a href="#" className=" px-[0.5rem] py-[0.2rem] rounded-lg active:bg-[#515a59] ">
                  <AiOutlineHome className=" text-[1.5rem] text-white "/>
                </a>
              </div>
              
              {/* Right */}
              <div className="flex-none">
                <ul className="menu menu-horizontal px-1 ">
                  <li >
                    <details>
                      <summary className=" text-white text-[1.5rem] active:bg-[#515a59] hover:text-white">
                        <HiMenu/>
                      </summary>
                      <ul className=" bg-[#131314] list-none [&>li]:px-[0.5rem] [&>li]:py-[0.2rem] [&>li]:rounded-lg  [&>li>a]:hover:text-white  text-white right-0 ">
                        <li><a href="#about" className=" hover:bg-[#515a59] ">About</a></li>
                        <li><a href="#education" className=" hover:bg-[#515a59] ">Education</a></li>
                        <li><a href="#experience" className=" hover:bg-[#515a59] ">Experience</a></li>
                        <li><a href="#skills" className=" hover:bg-[#515a59] ">Skills</a></li>
                        <li><a href="#projects" className=" hover:bg-[#515a59] "> Projects</a></li>
                        <li><a href="#contact" className=" hover:bg-[#515a59] ">Contact</a></li>
                      </ul>
                    </details>
                  </li>
                </ul>
              </div>
        </section>


    </nav>
  )
}

export default NavbarComponent