import Image from 'next/image'
import next from "../../../public/next.svg"
import styles from "./about.module.css"
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { about, aboutPointsFirstHalf, aboutPointsSecondHalf } from '../../../util/constant';
export default function About (){
    return (
        <section id='about' className={styles.wrapper}>
            <div>
            <div className={styles.aboutLine}>
                <p>About</p>
                <div style={{height:"1px", width:"8rem",backgroundColor:"white",marginTop:"1.5rem"}}/>
            </div>
            <div className={styles.aboutLine}>
                <Image src={next} width={200} height={200}/>
                <div>
                    <p>
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
            <div className={styles.aboutLine}>
                <p>Interest</p>
                <div style={{height:"1px", width:"8rem",backgroundColor:"white",marginTop:"1.5rem"}}/>
            </div>
            <div>

            </div>
            </div>
            </div>
        </section>
    )
}