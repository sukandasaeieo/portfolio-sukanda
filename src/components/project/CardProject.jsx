/* eslint-disable react/prop-types */

import github from '../../image/icons/GitHub.png'
import { HiOutlineExternalLink } from "react-icons/hi";
const CardProject = (props) => {
    const {topic , stack , responsive , image , isgif , repoGithub ,linksite} = props
  return (
    <section className=' p-[1rem]  bg-[#18181b] bg-opacity-100 rounded-lg'>
        <div className=" w-[250px] h-[200px] lg:w-[300px] lg:h-[200px]  bg-white overflow-hidden rounded-lg ">
                <img src={image} alt={image} className={isgif ?' h-full' :' hover:translate-y-[-50%] hover:cursor-pointer delay-150 duration-[3000ms] ease-in-out'} />
        </div>
        
        <div className=' w-full lg:h-[200px] text-white mt-[1rem]'>

            {/* Topic */}
            <h2 className=' text-center text-[1rem] lg:text-[1.2rem]'>{topic}</h2>

            {/* Stack & Resposive */}
            <div className=' pt-[1rem] text-center text-[0.9rem] lg:text-[1rem]'>
                <p className=''>Stack: <span className=' text-white text-opacity-70'>{stack.join(' , ')}</span></p>
                <p>Responsive: <span className=' text-white text-opacity-70'>{responsive.join(' , ')}</span></p>
            </div>  

                {/* Links */}
               <div className=' flex justify-center mt-[1rem]'>
                    <a href={repoGithub} target="_blank" rel="noopener noreferrer" className=' btn px-[1rem] max-w-[7rem] text-black flex items-center mr-[1rem]'>
                        <span className=' font-semibold text-[0.8rem] lg:text-[0.9rem]'>Code</span>
                        <img src={github} alt="" className=' w-[1.3rem] lg:w-[2rem]'/>
                    </a>
                    <a href={linksite} target="_blank" rel="noopener noreferrer" className=' btn px-[1rem] max-w-[7rem] text-black flex items-center'>
                        <span className=' font-semibold'>Link</span>
                        <HiOutlineExternalLink className=' text-[1.2rem] lg:text-[2rem]'/>
                    </a>
               </div>
            
        </div>
    </section>
  )
}

export default CardProject