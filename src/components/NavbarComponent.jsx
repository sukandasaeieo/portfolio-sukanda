import { AiOutlineHome} from "react-icons/ai";

const NavbarComponent = () => {
  return (
    <nav className=" flex justify-between items-center p-[1rem] pr-[2rem] bg-[#131314] sticky top-0 z-10">
        {/* Left */}
        <section className=" px-[0.5rem] py-[0.2rem] rounded-lg hover:bg-[#515a59] hover:cursor-pointer">
            <AiOutlineHome className=" text-[1.5rem] text-white "/>
        </section>

        {/* Right */}
        <section className=" ">
            <ul className="flex gap-x-[1rem] list-none [&>li]:px-[0.5rem] [&>li]:py-[0.2rem] [&>li]:rounded-lg text-white">
                <li className=" hover:bg-[#515a59] "><a href="#">Home</a></li>
                <li className=" hover:bg-[#515a59] "><a href="#">About</a></li>
                <li className=" hover:bg-[#515a59] "><a href="#">Education</a></li>
                <li className=" hover:bg-[#515a59] "><a href="#">Experience</a></li>
                <li className=" hover:bg-[#515a59] "><a href="#skills">Skills</a></li>
                <li className=" hover:bg-[#515a59] "><a href="#">Projects</a></li>
                <li className=" hover:bg-[#515a59] "><a href="#">Contact</a></li>
            </ul>
        </section>
    </nav>
  )
}

export default NavbarComponent