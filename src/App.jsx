import AboutComponent from "./components/AboutComponent"
import NavbarComponent from "./components/NavbarComponent"
import SkillComponent from "./components/Skill/SkillComponent"
import ProjectsComponent from "./components/project/ProjectsComponent"



const App = () => {
  return (
    <div data-theme="light">
      <NavbarComponent/>
      <AboutComponent/>
      <SkillComponent/>
      <ProjectsComponent/>

    </div>
  )
}

export default App