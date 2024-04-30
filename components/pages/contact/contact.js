import styles from "./contact.module.css"
import PlaceIcon from '@mui/icons-material/Place';
import ShareIcon from '@mui/icons-material/Share';
import EmailIcon from '@mui/icons-material/Email';
import { contactDetails } from "../../../util/constant";
import Phone from "@mui/icons-material/Phone";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
export default function Contact (){
    return (
        <section id="contact" className={styles.wrapper} >
             <div className={styles.aboutLine}>
                <p>CONTACT</p>
                <div style={{height:"1px", width:"6rem",backgroundColor:"white",marginTop:"1rem"}}/>
            </div>
            <div className={styles.newWrapper}>
                {
                    contactDetails.map(contact=>(
                        <div className={styles.edu}>
                            {contact.name == "Address" && <PlaceIcon className={styles.icon} fontSize="large"/>}
                            {contact.name == "Email" && <EmailIcon className={styles.icon} fontSize="large"/>}
                            {contact.name == "Contact" && <Phone className={styles.icon} fontSize="large"/>}
                            {contact.name == "Social Profiles" && <ShareIcon className={styles.icon} fontSize="large"/>}
                            <div>
                                <p className={styles.heading}>{contact.name}</p>
                                {(typeof contact.value == "string" ) && <p>{contact.value}</p>}
                                {(typeof contact.value !== "string") && 
                                // .map(social =>(
                                    <div >
                                        <LinkedInIcon onClick={()=>{window.open(contact.value.linkedin,"_blank")}} className={styles.socialIcons} fontSize="large"/>
                                        <GitHubIcon onClick={()=>{window.open(contact.value.github,"_blank")}} className={styles.socialIcons} fontSize="large"/>
                                        <GoogleIcon onClick={()=>{window.open(contact.value.gmail,"_blank")}} className={styles.socialIcons} fontSize="large"/>       
                                    </div>
                                // ))
                                } 
                            </div>
                        </div>
                    ))
                }
                
            </div>
        </section>
    )
}