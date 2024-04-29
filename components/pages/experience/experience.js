import { experienceDetails } from "../../../util/constant"
import styles from "./experience.module.css"
export default function Experience (){
    return (
        <section id="experience" className={styles.wrapper}>
            <div >
            <div className={styles.aboutLine}>
                <p>EXPERIENCE</p>
                <div style={{height:"1px", width:"6rem",backgroundColor:"white",marginTop:"1rem"}}/>
            </div>
            <div className={styles.exp}>
                {
                    experienceDetails.map(exp=>(
                        <div>
                            <h4 className={styles.heading} onClick={()=>{window.open(exp.link,"_blank")}}>{exp.name}</h4>
                            <p className={styles.midheading}>{exp.date}</p>
                            <p className={styles.subheading}>{exp.role}</p>
                            <ul className={styles.infoDiv}>
                                {exp.responsibility.map(point=>(
                                    <li className={styles.info}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    ))
                }
            </div>
            </div>

        </section>
    )
}