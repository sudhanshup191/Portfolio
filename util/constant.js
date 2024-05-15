
const headerOptions = [{ name: "Home", path: "home" }, { name: "About", path: "about" }, { name: "Education", path: "education" }, { name: "Experience", path: "experience" }, { name: "Projects", path: "project" }, { name: "Skills", path: "skills" },
//  { name: "Resume", path: "resume" }, 
 { name: "Contact", path: "contact" }]
const aboutPointsFirstHalf = [{point:"Birthday",value:"9 March 2002"},{point:"City",value:"Karnal, Haryana, India"},]
const aboutPointsSecondHalf = [{point:"Phone",value:"+91 9050227464"},{point:"Email",value:"kirti227464@gmail.com"}]
const interest =[{name:"",img:""},{name:"",img:""},{name:"",img:""},{name:"",img:""},{name:"",img:""},]
const skills = [
    {
        tech: "LANGUAGES AND DATABASES",
        tools: [ {name: "JS", img : "javaScript"},
            {name: "HTML",img: "html"},
            {name: "CSS",img:"css" },
            {name: "MongoDB",img: "mongodb" }
        ]
    },
    {
    tech: "LIBRARIES",tools: [
            { name: "Nodejs",img : "node" },
            { name: "Expressjs",img: "express"},
            { name: "MUI",img: "mui"},
            { name: "React",img: "react"},
            { name: "Mongoose",img: "mongoose"},
            { name: "Nextjs",img: "next"},
            { name: "BootStrap",img: "bootstrap"},
        ]
    },
    {
        tech:"OTHER TOOLS",tools:[
            {name:"GIT",img:"git"},
            {name:"Github",img:"github"},
            {name:"Glitch",img:"glitch"},
            {name:"Netlify",img:"netlify"},
            {name:"Postman",img:"postman"},
            {name:"ClickUp",img:"clickup"},
        ]
    }
]
const educationDetails =[{
    // img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgtnOdVVw73rwydfE-enIUvil3-7J8MePhOzqD-e0A07-aBxwnQVU-JQSmU5FIGVVDOMZ2R2MopQQ_Ek3QFkIqMTfHqylIDYEJaKwsYveBPufT5CKvvyjtTEJOof5fRRQ9i7e_F5QKbDcZD/s1600/topheader.jpg",
    name:"Deenbandhu Chhotu Ram University Of Science And Technology, Murthal Sonipat (Haryana)    ",
    location:"Murthal, Haryana, India",
    cgpa:"8.26/10",
    degree:"Bachelor of Technology in Computer Science Engineering",
    duration:"August, 2019 - May, 2023",
    id:"dcrust",
    link:"https://www.dcrustm.ac.in/"
}]
const contactDetails = [{name:"Address",value:"Karnal, Haryana, India"},{name:"Email",value:"kirti227464@gmail.com"},{name:"Contact",value:"+91 9050227464"},{name:"Social Profiles",value:{"linkedin" : "https://www.linkedin.com/in/kirti-bbaa501b7/","github":"https://github.com/kirti7464","gmail":"mailto:kirti227464@gmail.com"}}]
const about = "I am a working professional with experience of 8 months. I have completed my B.Tech from DCRUST, Murthal Sonipat (Haryana). I have worked on multiple projects using different tehnologies like JS, Nodejs, ExpressJs, GIT, JWT, HTML, CSS, Postman."
const experienceDetails = [{name:"FunctionUp",role:"Associate Software Developer",date:"September, 2023 - Present",location:"Banglore, India", responsibility:["Developing both front-end and back-end components using Node.js, Express.js for server-side logic, Next.js for client-side rendering, and JavaScript for interactive UI elements.","Develop and manage well-functioning databases and applications","Build features and applications with a mobile responsive design"],link:"https://functionup.org/"}]
const resumeLink = "https://drive.google.com/file/d/1lo4lZYJLi7xCDS9tWlkMlDv22RdW0SY1/view?usp=sharing"
const projects=[
    {
        name:"Personal Portfolio",
        type:["frontend"],
        about:"Portfolio - An Effortless Resume reading ",
        img:"portfolio",
        techStack:["NextJS","MUI","JS"],github:"https://github.com/kirti7464/Portfolio",
        // demo:"https://i-notebook-front-end.vercel.app/",
        description:"Portfolio is a digital canvas to showcase your unique journey, skills, and achievements. ",
        features:[
            "Get social profile links at once.",
        "Download Resume."
        ]
    },
{
    name:"Fitness Recipe",
    type:["frontend","backend","fullstack"],
    about:" Fitness Recipe- Your Fitness Recipe Hub ",
    img:"fitness",
    techStack:["ReactJS","JS","Nodejs","MongoDB","ExpressJs","PostMan"],github:"https://github.com/kirti7464/fitnessApp-frontend",demo:"https://fitness-app-frontend-eight.vercel.app/",description:"Sign up or log in to unlock personalized recipes and fuel your journey to better health.    ",
    features:[
    "User Authentication: Sign up or log in to access the app.",
    "List of Recipes: See all your recipes at a glance.",
    "Check preparation time: Look for recipe preparation time based on your availiability.",
    "Check Instructions: Click on read more to see detailed instructions for preparing recipe for your choice.",
    ]
},
{
    name:"iNoteBook",
    type:["frontend","backend","fullstack"],
    about:"iNotebook-An Effortless Note Organization and Management Web App ",
    img:"iNotebook",
    techStack:["ReactJS","JS","Nodejs","MongoDB","ExpressJs","PostMan"],
    github:"https://github.com/kirti7464/iNotebook-frontEnd",
    demo:"https://i-notebook-front-end.vercel.app/",
    description:"The iNotebook is a simple and user-friendly tool that allows users to create, edit, and delete notes. Users can also sign up or log in to their accounts to access their personalized notes. ",
    features:[
    "User Authentication: Sign up or log in to access the app.",
    "Create Notes: Add new notes with a title and content.",
    "Edit Notes: Modify existing notes.",
    "Delete Notes: Remove notes you no longer need.",
    "List of Notes: See all your notes at a glance."
    ]
},
{
    name:"News-App",
    about:"News-App - A News Web App ",
    type:["frontend"],
    img:"newsApp",
    techStack:["ReactJS","JS"],github:"https://github.com/kirti7464/news-app",
    // demo:"https://i-notebook-front-end.vercel.app/",
    description:"The News React Web App is a dynamic web application that allows users to explore news articles from different categories such as Entertainment, Business, General, Health, Sports, Science, and Technology. Stay informed about the latest happenings in the world through our user-friendly interface.    ",
    features:[
    "Browse news articles from various categories.",
    "User-friendly interface with easy navigation.  ",
    "View detailed information about each news article including title, description, source, and publication date.    ",
    ]
}
]
module.exports = {
    headerOptions, aboutPointsFirstHalf, aboutPointsSecondHalf, skills, about, experienceDetails, educationDetails, contactDetails,
    resumeLink,projects
}
