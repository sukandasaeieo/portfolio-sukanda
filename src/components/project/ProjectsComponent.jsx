import { useEffect, useState } from "react"
import CardProject from "./CardProject"
import { projectarray } from "./projectarray"
// Icon
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import LayoutComponent from "../LayoutComponent";


const ProjectsComponent = () => {
  const [htmlskill,setHtmlskill] = useState(false)
  const [cssskill,setCssskill] = useState(false)
  const [jsskill,setJsskill] = useState(false)
  const [reactskill,setReactskill] = useState(false)
  const [tailwindskill,setTailwindskill] = useState(false)
  const [crudskill , setCRUDskill] = useState(false)

  const [dataproject , setDataproject] = useState([])

  useEffect(()=>{
    const filterHtml = htmlskill ? projectarray.filter((e)=> e.stack.includes("HTML")) : projectarray
    const filterCSS = cssskill ? filterHtml.filter((e)=> e.stack.includes("CSS")) : filterHtml
    const filterJS = jsskill ? filterCSS.filter((e)=> e.stack.includes("JS")) : filterCSS
    const filterReactJS = reactskill ? filterJS.filter((e)=> e.stack.includes("ReactJS")) : filterJS
    const filterTailwind = tailwindskill ? filterReactJS.filter((e)=> e.stack.includes("Tailwind")) : filterReactJS
    const filterCRUD = crudskill ? filterTailwind.filter((e)=> e.isCRUD) : filterTailwind

    setDataproject(filterCRUD)
    
  },[htmlskill ,cssskill , jsskill , reactskill , tailwindskill , crudskill])

  return (
    <LayoutComponent topic={'Projects'} idcomponent={'projects'} bgopacity={'bg-opacity-[96%]'}>
          {/* Filter Project */}
          <div className=" flex justify-between items-center mb-[2rem]"> 
              {/* Label */}
              <p className=" text-white pl-[0.5rem] text-opacity-80 font-Incluesive-Sans">These projects belong to me.</p>
              {/* Toggle */}
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn m-1 font-Incluesive-Sans">Filter by <MdOutlineKeyboardArrowDown className=" text-[1.5rem]"/></label>
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
                  {/* CRUD */}
                  <li>
                    <section>            
                      <input id="crudskillfilter" type='checkbox' value={crudskill} onChange={()=> setCRUDskill(!crudskill)}/>
                      <label htmlFor="crudskillfilter">CRUD</label>
                    </section>
                  </li>

                </ul>
              </div>
          </div>

          {/* Card Project*/}
          <div className=" flex flex-wrap gap-[2rem]   ">            
              {
                dataproject?.map((e)=>{
                  return(
                    <CardProject key={e.id} {...e}/>
                  )
                })
              }
          </div>
    </LayoutComponent>
  )
}

export default ProjectsComponent