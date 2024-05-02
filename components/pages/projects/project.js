
import Image from "next/image"
import { projects } from "../../../util/constant"
import styles from "./project.module.css"
import iNotebook from "../../../public/iNotebook.png"
import { useState } from "react"
import InfoIcon from '@mui/icons-material/Info';
import fitness from "../../../public/fitness.png"
import { ProjectModal } from "../../molecules/projectModal/projectModal"
export default function Project (){
    const [isHovered, setHovered] = useState(false)
    const [hoveredImg, setHoveredImg] = useState("")
    function handleHover(position,project){
        position == "in" ? setHoveredImg(project) : setHoveredImg(null)
    }
    function handleClick(project){
        setHovered(project)
    }
    function handleCloseModal(){
        setHovered(null)
    }
    return (
        <section id="project" className={styles.wrapper}>
            <div className={styles.aboutLine}>
                <p>PROJECT</p>
                <div style={{height:"1px", width:"6rem",backgroundColor:"white",marginTop:"1rem"}}/>
            </div>
            <div className={styles.FilterButton} >
                <button >ALL</button>
                <button >Back-End</button>
                <button >Front-End</button>
                <button >Full-Stack</button>
            </div>
            <div className={styles.projects}>
                {projects.map(project=>(
                    <div key={project.name}>
                        
                        <h4 className={styles.info}>{project?.name}</h4>
                        <div className={styles.project} onMouseOver={()=>handleHover("in",project?.name)} onMouseOut={()=>handleHover("out")} >
                            <Image src={project?.img == "iNotebook" ? iNotebook : project?.img == "fitness" ? fitness :""} width={400} height={200}/>
                            {
                            hoveredImg == project?.name && <div className={styles.upperBorder} onClick={()=>handleClick(project)}>
                                <InfoIcon />
                            </div>
                            }
                        </div>
                        {
                            isHovered?.name==project.name && <ProjectModal open={isHovered} project={isHovered}
                             onClose={handleCloseModal} 
                             />
                        }
                    </div>
                    
                ))}
            </div>
            
        </section>
    )
}