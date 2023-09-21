
import AboutComponent from "./components/AboutComponent"
import ContactComponent from "./components/ContactComponent"
import EducationComponent from "./components/EducationComponent"
import ExperienceComponent from "./components/ExperienceComponent"
import IntroComponent from "./components/IntroComponent"
import NavbarComponent from "./components/NavbarComponent"
import SkillComponent from "./components/Skill/SkillComponent"
import ProjectsComponent from "./components/project/ProjectsComponent"



const App = () => {
  return (
    <div data-theme="light">
      <NavbarComponent/>
      <IntroComponent/>
      <AboutComponent/>
      <EducationComponent/>
      <ExperienceComponent/>
      <SkillComponent/>
      <ProjectsComponent/>
      <ContactComponent/>

    </div>
  )
}

export default App