import styles from "./projectModal.module.css"
import Dialog from '@mui/material/Dialog';
export function ProjectModal({open,project,onClose}){
    return(
        <Dialog open={project && open}  onClose={onClose}>
            <div className={styles.wrapper} on>
                <h4 className={styles.heading}>{project.about}</h4>
                 {project.demo && <div className={styles.points}><p className={styles.subhead}>DEMO : </p><p className={styles.subheadValue1} onClick={()=>window.open(project.demo,"_blank")}>Click here</p> </div>}
                 {project.github && <div className={styles.points}><p className={styles.subhead}>GITHUB : </p><p className={styles.subheadValue2} onClick={()=>window.open(project.github,"_blank")}>Click here</p> </div>}
                  <div className={styles.points}><p className={styles.subhead}>DESCRIPTION:</p><p className={styles.subheadValue} >{project.description}</p> </div>
                  <div className={styles.points}><p className={styles.subheadTech}>Tech Stacks:</p>
                  
                    <div className={styles.subheadValue3}>
                        {project.techStack.map(tech => (
                            <p  >{tech}</p>
                        ))
                        } 
                    </div>
                    </div>
                      <ul>
                      <p className={styles.subhead}>FEATURES:</p>
                          {
                              project.features.map(feat => (
                                  <li>{feat}</li>
                              ))
                          }
                      </ul>
          </div>

        </Dialog>
    )

}