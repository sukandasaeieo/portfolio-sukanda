import { AiOutlineHome} from "react-icons/ai";

const NavbarComponent = () => {
  return (
    <nav className=" flex justify-between items-center p-[1rem] pr-[2rem]">
        {/* Left */}
        <section>
            <AiOutlineHome className=" text-[1.5rem]"/>
        </section>

        {/* Right */}
        <section className=" ">
            <ul className="flex gap-x-[1rem] list-none [&>li]:px-[0.5rem] [&>li]:rounded-lg">
                <li className=" hover:bg-[#cbebe9] "><a href="#">Home</a></li>
                <li className=" hover:bg-[#cbebe9] "><a href="#">About</a></li>
                <li className=" hover:bg-[#cbebe9] "><a href="#">Education</a></li>
                <li className=" hover:bg-[#cbebe9] "><a href="#">Experience</a></li>
                <li className=" hover:bg-[#cbebe9] "><a href="#">Skills</a></li>
                <li className=" hover:bg-[#cbebe9] "><a href="#">Projects</a></li>
                <li className=" hover:bg-[#cbebe9] "><a href="#">Contact</a></li>
            </ul>
        </section>
    </nav>
  )
}

export default NavbarComponent