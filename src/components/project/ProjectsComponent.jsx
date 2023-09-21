import { useEffect, useState } from "react"
import TopicComponent from "../TopicComponent"
import CardProject from "./CardProject"
import { projectarray } from "./projectarray"
// Icon
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


const ProjectsComponent = () => {
  const [htmlskill,setHtmlskill] = useState(false)
  const [cssskill,setCssskill] = useState(false)
  const [jsskill,setJsskill] = useState(false)
  const [reactskill,setReactskill] = useState(false)
  const [tailwindskill,setTailwindskill] = useState(false)

  const [dataproject , setDataproject] = useState([])

  useEffect(()=>{
    const filterHtml = htmlskill ? projectarray.filter((e)=> e.stack.includes("HTML")) : projectarray
    const filterCSS = cssskill ? filterHtml.filter((e)=> e.stack.includes("CSS")) : filterHtml
    const filterJS = jsskill ? filterCSS.filter((e)=> e.stack.includes("JS")) : filterCSS
    const filterReactJS = reactskill ? filterJS.filter((e)=> e.stack.includes("ReactJS")) : filterJS
    const filterTailwind = tailwindskill ? filterReactJS.filter((e)=> e.stack.includes("Tailwind")) : filterReactJS

    setDataproject(filterTailwind)
    
  },[htmlskill ,cssskill , jsskill , reactskill , tailwindskill])

  return (
    <div id="projects" className="min-h-[90vh] bg-black bg-opacity-[96%] scroll-mt-[5rem] p-[2rem]">
        <TopicComponent topic={'Projects'}/>

        {/* Filter Project */}
        <div className=" flex justify-end mb-[2rem]">        
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn m-1">Filter by <MdOutlineKeyboardArrowDown className=" text-[1.5rem]"/></label>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                {/* HTML */}
                <li>
                  <section>
                    <input id="htmlfilter" type='checkbox' value={htmlskill} onChange={()=> setHtmlskill(!htmlskill)}/>
                    <label htmlFor="htmlfilter">HTML</label>
                  </section>
                </li>
                {/* CSS */}
                <li>
                  <section>
                    <input id="cssfilter" type='checkbox' value={cssskill} onChange={()=> setCssskill(!cssskill)}/>
                    <label htmlFor="cssfilter">CSS</label>
                  </section>
                </li>
                {/* JS */}
                <li>
                  <section>
                    <input id="jsfilter" type='checkbox' value={jsskill} onChange={()=> setJsskill(!jsskill)}/>
                    <label htmlFor="jsfilter">JS</label>
                  </section>
                </li>
                {/* React */}
                <li>
                  <section>            
                    <input id="reactjsfilter" type='checkbox' value={reactskill} onChange={()=> setReactskill(!reactskill)}/>
                    <label htmlFor="reactjsfilter">ReactJS</label>
                  </section>
                </li>
                {/* Tailwind */}
                <li>
                  <section>            
                    <input id="tailwindfilter" type='checkbox' value={tailwindskill} onChange={()=> setTailwindskill(!tailwindskill)}/>
                    <label htmlFor="tailwindfilter">Tailwind</label>
                  </section>
                </li>

              </ul>
            </div>
        </div>

        {/* Card Project*/}
        <div className=" flex flex-wrap gap-[2rem]  w-[80%] mx-auto ">            
            {
              dataproject?.map((e)=>{
                return(
                  <CardProject key={e.id} {...e}/>
                )
              })
            }
        </div>
        
    </div>
  )
}

export default ProjectsComponent