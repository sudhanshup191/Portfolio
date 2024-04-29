import { headerOptions } from "../../../util/constant";
import styles from "./header.module.css"
import { useState } from "react"

export default function Header({onOptionSelect}){
    const [activeOption, setActiveOption] = useState(null);
    // const router =useRouter()
    function handlePageSwitch(path){
        setActiveOption(path);
        onOptionSelect(path);
    }
    return (
        <div className={styles.heading}>
            {headerOptions.map((option)=>(  
                <div key={option.path}>
                    <p className={option.path === activeOption ? styles.activeOption : styles.option} onClick={() => handlePageSwitch(option.path)}>{option.name}</p>
                    <div className={option.path === activeOption ? styles.div : ""} > </div>
                </div>
            ))}
        </div>
    )
}
