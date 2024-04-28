import { headerOptions } from "../../../util/constant";
import styles from "./header.module.css"
import { useState } from "react"
import { useRouter } from 'next/router'
export default function Header(){
    const [styleChange,setStyleChange] = useState(false)
    
    function handlePageSwitch(){
        
    }
    return (
        <div className={styles.heading}>
            {headerOptions.map((option)=>(
                
                <div  >
                    <p className={styles.option}>{option.name}</p>
                    <div className={styles.div}> </div>
                </div>
            ))}
        </div>
    )
}
