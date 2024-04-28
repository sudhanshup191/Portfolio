import Image from 'next/image'
import next from "../../../public/next.svg"
import styles from "./about.module.css"
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { aboutPointsFirstHalf, aboutPointsSecondHalf } from '../../../util/constant';
export default function About (){
    return (
        <section>
            <div>
            <div className={styles.aboutLine}>
                <p>About</p>
                <div style={{height:"1px", width:"8rem",backgroundColor:"black",marginTop:"1.5rem"}}/>
            </div>
            <div className={styles.aboutLine}>
                <Image src={next} width={200} height={200}/>
                <div>
                    <p>
                    Focused and enthusiastic developer with a keen interest in software development
                     and artificial intelligence. By comprehensive exposure to the underlying concepts and applying
                      them vividly to various projects, my love for these domains came into being. I am a passionate individual
                       who thrives to build and apply algorithms to solve real-world industry problems.
                    </p>
                    <div className={styles.aboutLine}>
                    <div className={styles.aboutPoints}>
                    {aboutPointsFirstHalf.map(info=>(
                        <div className={styles.aboutval}>
                            <KeyboardArrowRightOutlinedIcon sx={{ color: "green" }}/>
                            <p className={styles.text}>{info.point} : </p>
                            <p className={styles.text}>{info.value}</p>
                        </div>
                    ))}              
                    </div>
                                        
                    <div className={styles.aboutPoints}>
                    {aboutPointsSecondHalf.map(info=>(
                        <div className={styles.aboutval}>
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
            <div className={styles.aboutLine}>
                <p>Interest</p>
                <div style={{height:"1px", width:"8rem",backgroundColor:"black",marginTop:"1.5rem"}}/>
            </div>
            </div>
            </div>
        </section>
    )
}