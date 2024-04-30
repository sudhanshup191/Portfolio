import Image from 'next/image'
import next from "../../../public/next.svg"
import styles from "./about.module.css"
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { about, aboutPointsFirstHalf, aboutPointsSecondHalf } from '../../../util/constant';
import backendDev from "../../../public/web-settings.png"
export default function About (){
    return (
        <section id='about' className={styles.wrapper}>
            <div>
            <div className={styles.aboutLine} style={{"font-size": "1.5rem"}}>
                <p>ABOUT</p>
                <div style={{height:"1px", width:"6rem",backgroundColor:"white",marginTop:"1rem"}}/>
            </div>
            <div className={styles.containers}>
                <Image src={next} width={200} height={200}/>
                <div>
                    <p className={styles.descrip} >
                        {about}
                    </p>
                    <div className={styles.aboutLine}>
                    <div className={styles.aboutPoints}>
                    {aboutPointsFirstHalf.map(info=>(
                        <div className={styles.aboutval} key={info.value}>
                            <KeyboardArrowRightOutlinedIcon sx={{ color: "green" }}/>
                            <p className={styles.text}>{info.point} : </p>
                            <p className={styles.text}>{info.value}</p>
                        </div>
                    ))}              
                    </div>
                                        
                    <div className={styles.aboutPoints}>
                    {aboutPointsSecondHalf.map(info=>(
                        <div className={styles.aboutval} key={info.value}>
                            <KeyboardArrowRightOutlinedIcon sx={{ color: "green" }}/>
                            <p className={styles.text}>{info.point} : </p>
                            <p className={styles.text}>{info.value}</p>
                        </div>
                    ))}              
                    </div>
                    </div>
                   
                    
                </div>
            </div>
            <div>
            <div className={styles.aboutLine} style={{"font-size": "1.5rem"}}>
                <p>INTEREST</p>
                <div style={{height:"1px", width:"6rem",backgroundColor:"white",marginTop:"1rem"}}/>
            </div>
            <div className={styles.edu}>
                <Image src={backendDev} width={40} height={40} />
                <h4 className={styles.eduText}>BACKEND DEVELOPMENT</h4>
            </div>
            </div>
            </div>
        </section>
    )
}