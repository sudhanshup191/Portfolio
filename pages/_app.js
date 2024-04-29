// import Contact from "../components/atom/contact/contact";
import { useState } from "react";
import About from "../components/pages/about/about";
import Education from "../components/pages/education/education";
import Experience from "../components/pages/experience/experience";
import Home from "../components/pages/home/home";
import Header from "../components/section/header/header";
import Skills from "../components/pages/skills/skills";
import Project from "../components/pages/projects/project";
import Resume from "../components/pages/resume/resume";
import Contact from "../components/pages/contact/contact";
import "../components/atom/globalStyling.css"
export default function HomePage (){
    const [currentPage, setCurrentPage] = useState("home");

    function handleOptionSelect(path) {
        setCurrentPage(path);
    }

    const componentByState = {
        home : <Home />,
        about : <About />,
        experience : <Experience />,
        education : <Education />,
        skills : <Skills/>,
        projects : <Project/>,
        resume : <Resume/>,
        contact : <Contact/>
    }
    return (
        <main>
            <Header onOptionSelect={handleOptionSelect} />
            {componentByState[currentPage]}
            {/* {currentPage === "home" && <Home />}
            {currentPage === "about" && <About />}
            {currentPage === "experience" && <Experience />}
            {currentPage === "education" && <Education />} */}
        </main>
    )
}