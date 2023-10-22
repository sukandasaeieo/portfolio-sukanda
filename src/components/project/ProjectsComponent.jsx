import { useEffect, useState } from "react";
import CardProject from "./CardProject";
import { projectarray } from "./projectarray";
// Icon
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import LayoutComponent from "../LayoutComponent";


const ProjectsComponent = () => {
  const [htmlskill,setHtmlskill] = useState(false);
  const [cssskill,setCssskill] = useState(false);
  const [jsskill,setJsskill] = useState(false);
  const [reactskill,setReactskill] = useState(false);
  const [tailwindskill,setTailwindskill] = useState(false);
  const [crudskill , setCRUDskill] = useState(false);
  const [apiskill , setAPIskill] = useState(false);

  const [dataproject , setDataproject] = useState([])

  useEffect(()=>{
    const filterHtml = htmlskill ? projectarray.filter((e)=> e.stack.includes("HTML")) : projectarray
    const filterCSS = cssskill ? filterHtml.filter((e)=> e.stack.includes("CSS")) : filterHtml
    const filterJS = jsskill ? filterCSS.filter((e)=> e.stack.includes("JS")) : filterCSS
    const filterReactJS = reactskill ? filterJS.filter((e)=> e.stack.includes("ReactJS")) : filterJS
    const filterTailwind = tailwindskill ? filterReactJS.filter((e)=> e.stack.includes("Tailwind")) : filterReactJS
    const filterCRUD = crudskill ? filterTailwind.filter((e)=> e.isCRUD) : filterTailwind
    const filterAPI = apiskill ? filterCRUD.filter((e)=> e.isAPI) : filterCRUD
    setDataproject(filterAPI)
    
  },[htmlskill ,cssskill , jsskill , reactskill , tailwindskill , crudskill , apiskill])

  return (
    <LayoutComponent topic={'Projects'} idcomponent={'projects'} bgopacity={'bg-opacity-[90%]'}>

          {/* Filter Project */}
          <div className=" flex flex-col lg:flex-row lg:justify-between lg:items-center mb-[2rem]"> 
             
          </div>

          {/* Card Project*/}
          <div className=" flex flex-wrap justify-center lg:justify-start gap-[2rem] min-h-[400px]   ">            
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