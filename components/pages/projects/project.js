import Image from "next/image"
import { projects } from "../../../util/constant"
import styles from "./project.module.css"
import { useState } from "react"
import InfoIcon from '@mui/icons-material/Info';
import images from "../../../public/ndex.js";
import { ProjectModal } from "../../molecules/projectModal/projectModal"

export default function Project (){
    const [isHovered, setHovered] = useState(false)
    const [hoveredImg, setHoveredImg] = useState("")
    const [selectedType, setSelectedType] = useState("all");
    function handleHover(position,project){
        position == "in" ? setHoveredImg(project) : setHoveredImg(null)
    }
    function handleClick(project){
        setHovered(project)
    }
    function handleCloseModal(){
        setHovered(null)
    }
    function handleFilterOption(type){
        setSelectedType(type)
    }
    const filteredProjects = selectedType === "all" ? projects : projects.filter(project => project.type.includes(selectedType));
    return (
        <section id="project" className={styles.wrapper}>
            <div className={styles.aboutLine}>
                <p>PROJECT</p>
                <div style={{height:"1px", width:"6rem",backgroundColor:"white",marginTop:"1rem"}}/>
            </div>
            <div className={styles.FilterButton} >
                <button onClick={() => handleFilterOption("all")} >ALL</button>
                <button onClick={() => handleFilterOption("backend")} >Back-End</button>
                <button onClick={() => handleFilterOption("frontend")}>Front-End</button>
                <button onClick={() => handleFilterOption("fullstack")} >Full-Stack</button>
            </div>
            <div className={styles.projects}>
                {filteredProjects.map(project=>(
                    <div key={project.name}>
                        
                        <h4 className={styles.info}>{project?.name}</h4>
                        <div className={styles.project} onMouseOver={()=>handleHover("in",project?.name)} onMouseOut={()=>handleHover("out")} >
                            {/* correct img condition */}
                            <Image alt="projectImg" src={images[project?.img]} width={400} height={200}/>
                            {
                            hoveredImg == project?.name && <div className={styles.upperBorder} onClick={()=>handleClick(project)}>
                                <InfoIcon />
                            </div>
                            }
                        </div>
                        {
                            isHovered?.name==project?.name && <ProjectModal open={isHovered} project={isHovered} onClose={handleCloseModal} />
                        }
                    </div>
                    
                ))}
            </div>
            
        </section>
    )
}