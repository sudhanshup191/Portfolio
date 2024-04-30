
import { projects } from "../../../util/constant"
import styles from "./project.module.css"
export default function Project (){
    return (
        <section id="project" className={styles.wrapper}>
            <div className={styles.aboutLine}>
                <p>PROJECT</p>
                <div style={{height:"1px", width:"6rem",backgroundColor:"white",marginTop:"1rem"}}/>
            </div>
            <div className={styles.FilterButton} >
                <button>ALL</button>
                <button>Back-End</button>
                <button>Front-End</button>
                <button>Full-Stack</button>
            </div>
            <div className={styles.projects}>
                {projects.map(project=>(
                    <div>
                        <h4>{project.name}</h4>
                        <div></div>
                    </div>
                ))}
            </div>
        </section>
    )
}