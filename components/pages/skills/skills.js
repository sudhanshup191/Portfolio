import Image from "next/image"
import { skills } from "../../../util/constant"
import styles from "./skills.module.css"
export default function Skills(){
    return (
        <section id= "skills" className={styles.divWrapper}>
             <div className={styles.aboutLine}>
                <p>SKILLS</p>
                <div style={{height:"1px", width:"6rem",backgroundColor:"white",marginTop:"1rem"}}/>
            </div>
            <div className={styles.mainWrapper}>
                {
                    skills.map(skill=>(
                        <div className={styles.wrapper}>
                        <h4 className={styles.Details}>{skill.tech}</h4>
                        <div className={styles.subDetails}>
                        {skill.tools.map(tool=>(
                            <Image src={tool.img} style={{marginRight:"20px"}} width={60} height={60}/>
                            
                        ))}
                        </div>
                    </div>
                    ))
                }
        </div>
        </section>
        
    )
}