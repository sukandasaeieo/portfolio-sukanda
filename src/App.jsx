import AboutComponent from "./components/AboutComponent"
import NavbarComponent from "./components/NavbarComponent"
import SkillComponent from "./components/Skill/SkillComponent"


const App = () => {
  return (
    <div data-theme="light">
      <NavbarComponent/>
      <AboutComponent/>
      <SkillComponent/>
    </div>
  )
}

export default App