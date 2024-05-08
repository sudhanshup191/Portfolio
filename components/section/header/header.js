import { headerOptions } from "../../../util/constant";
import styles from "./header.module.css"
import { useState } from "react"

export default function Header({onOptionSelect,isHomePage}){
    const [activeOption, setActiveOption] = useState(null);
    function handlePageSwitch(path){
        setActiveOption(path);
        onOptionSelect(path);
    }
    return (
        <div className={isHomePage ? styles.homeHeader : styles.wrapper}>
            <h4 className={isHomePage ? styles.homeHeaderNameTxt : styles.nameTxt}>KiRTI</h4>
            {/* add animation text here */}
            <div className={isHomePage ? styles.homeHeading : styles.heading}>
            {headerOptions.map((option)=>(  
                <div key={option.path}>
                    <p className={option.path === activeOption ? styles.activeOption : styles.option} onClick={() => handlePageSwitch(option.path)}>{option.name}</p>
                    <div className={option.path === activeOption ? styles.div : ""} > </div>
                </div>
            ))}
        </div>
        </div>
    )
}
