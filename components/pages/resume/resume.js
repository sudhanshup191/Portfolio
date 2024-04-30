import { resumeLink } from "../../../util/constant";
import styles from "./resume.module.css"
export default function Resume (){
    return (
        <section id="resume" className={styles.wrapper}>
            <iframe src={resumeLink} className={styles.iframeDiv} height={600} width={700}/>
        </section>
    )
}