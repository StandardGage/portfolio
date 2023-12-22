//robotsroad
import robot from '../assets/robot.jpg';
//capsid
import capsid from '../assets/capsid.jpg';
import capsid2 from '../assets/capsid2.jpg';
//virus-journal
import virus from '../assets/virus.jpg';
import virus2 from '../assets/virus2.jpg';
import virus3 from '../assets/virus3.jpg';
//house-woods
import house from '../assets/house.jpg';
import lantern from '../assets/lantern.jpg';
import table from '../assets/table.jpg';
import wood from '../assets/wood.jpg';
//hawaiian-cleanup
import game from '../assets/game.jpg';
//temnet
import temnet from '../assets/temnet.jpg';

//salesianum
import salesianum from '../assets/salesianum.jpg';
//udel
import udel from '../assets/udel.jpg';
import brown from '../assets/brown.jpg';
import smith from '../assets/smith.jpg';

//agr
import agr from '../assets/agr.jpg';

//chirp
import chirpgif from '../assets/chirp.gif';

//react
import react from '../assets/react.png';

//underthescope
import underthescope from '../assets/underthescope.jpg'

const socials = {
    socials: [
        {
            link: "https://github.com/StandardGage?tab=repositories",
            logo: "devicon-github-original"
        },
        {
            link: "https://www.linkedin.com/in/gage-schuster-a902081b3/",
            logo: "devicon-linkedin-plain"
        },
    ]
}

export interface SkillsType {
    [key: string]: string;
};

const skills: {skills: SkillsType} = {
    skills: {
        Typescript: "devicon-typescript-plain",
        React: "devicon-react-original",
        CSS: "devicon-css3-plain",
        HTML: "devicon-html5-plain",
        Python: "devicon-python-plain",
        Java: "devicon-java-plain",
        'C/C++': "devicon-c-plain",
        Linux: "devicon-linux-plain",
        Godot: "devicon-godot-plain",
        Blender: "devicon-blender-original",
        Windows: "devicon-windows8-original",
        Github: "devicon-github-original",
        Docker: "devicon-docker-plain",
        Photoshop: "devicon-photoshop-plain",
        NPM: "devicon-npm-original-wordmark",
        Javascript: "devicon-javascript-plain",
        Git: "devicon-git-plain",
        Shell: "devicon-bash-plain",
    }
}

const projects = {
    projects: [
        {
            title: "Under the Scope",
            partners: "Work Project",
            mainImage: underthescope,
            video: [],
            link: "https://underthescope.udel.edu/",
            description: "Website which showcases research about ocean and marine life",
            images: [underthescope],
            skills: [skills.skills.HTML, skills.skills.CSS]
        },
        {
            title: "React-RevealHeader",
            partners: "Personal Project",
            mainImage: react,
            video: [],
            link: "https://www.npmjs.com/package/react-revealheader",
            description: "React component that reveals a header based on a user's scroll position",
            images: [react],
            skills: [skills.skills.Typescript, skills.skills.Javascript, skills.skills.React, skills.skills.NPM, skills.skills.CSS, skills.skills.HTML,skills.skills.Git, skills.skills.Github]
        },
        {
            title: "Chirp",
            partners: "Personal Project",
            mainImage: chirpgif,
            video: [],
            link: "https://github.com/eorev/Chirp",
            description: "Educational game that teaches users about algorithms and uses Firebase as a backend",
            images: [chirpgif],
            skills: [skills.skills.Typescript, skills.skills.Javascript, skills.skills.React, skills.skills.NPM, skills.skills.CSS, skills.skills.HTML,skills.skills.Git, skills.skills.Github]
        },
        {
            title: "TEMNet",
            partners: "Work Project",
            mainImage: temnet,
            video: [],
            link: "https://github.com/Perilla-lab/TEMNet",
            description: "Convolutional Neural Network backbone, designed for viral particle detection",
            images: [temnet],
            skills: [skills.skills.Python, skills.skills['C/C++'], skills.skills.Docker, skills.skills.Linux, skills.skills.Github]
        },
        {
            title: "Hawaiian Cleanup",
            partners: "Academical Project",
            mainImage: game,
            video: [],
            link: "https://github.com/StandardGage/HawaiianCleanup",
            description: "Educational game about cleaning Hawaii and Programming using Phaser3 and TypeScript",
            images: [game],
            skills: [skills.skills.Typescript, skills.skills.Javascript, skills.skills.CSS, skills.skills.HTML, skills.skills.Git, skills.skills.Github]
        },
        {
            title: "Capsid Visualizations",
            partners: "Work Project",
            mainImage: capsid,
            video: [],
            link: "https://www.artstation.com/artwork/9NoOdv",
            description: "3D models of viral capsids to aid in the understanding of virus structure/function",
            images: [capsid, capsid2],
            skills: [skills.skills.Blender]
        },
        {
            title: "Scientific Journal Candidates",
            partners: "Work Project",
            mainImage: virus,
            video: [],
            link: "https://www.artstation.com/artwork/14vlqo",
            description: "3D models of a microsystem to supplement the findings of research",
            images: [virus, virus2, virus3],
            skills: [skills.skills.Blender]
        },
        {
            title: "Robot's Road",
            partners: "Personal Project",
            mainImage: robot,
            video: [],
            link: "https://www.artstation.com/artwork/14LPmZ",
            description: "Animated short for experimenting with different environments and physics",
            images: [robot],
            skills: [skills.skills.Blender, skills.skills.Photoshop]
        },
        {
            title: "House in the Woods",
            partners: "Personal Project",
            mainImage: house,
            video: [],
            link: "https://www.artstation.com/artwork/al1n9",
            description: "Rendering to learn and experiment with materials, as well as foliage.",
            images: [house, lantern, table, wood],
            skills: [skills.skills.Blender, skills.skills.Photoshop]

        },
    ]
}

const education = {
    schools: [
        {
            schoolName: "University of Delaware",
            title: "Honors Computer Science",
            date: "(August 2021 - May 2025)",
            image: udel,
            classes: ["Intro to Comp Sci I","Intro to Comp Sci II", "Intro to Systems Programming","Data Structures",
                    "Machine Organization & Assembly","Computers, Ethics, and Society","Learning Game Development",
                    "Intro to Software Engineering","Automata Theory","Logic for Programming","Intro to Algorithms",
                    "Calculus I","Calculus II","Discrete Mathematics" ],
            clubs: ["Alpha Gamma Rho - Finance Chair", "Spikeball Club", "Chess Club"],
            awards: ["Honors Program", "Grand Scholars Program","2nd Place Beginner HenHacks 2023"]
        },
        {
            schoolName: "Salesianum High School",
            title: "Honors Student",
            date: "(August 2017 - May 2021)",
            image: salesianum,
            classes: ["Intro to Python", "A.P. Computer Science - 5/5", "Game Dev Independent Study", "Networking Independent Study"],
            clubs: ["Computer Science Club - President", "National Honor Society", "Science Olympiad", "Track"],
            awards: ["Bebras Computing Challenge", "Silver for Computer Science"]
        },
    ]
}

const experience = {
    jobs: [
        {
            role: "Web Developer",
            company: "Sea Grant & UD CEOE",
            duration: "(May 2023 - Dec 2023)",
            image: underthescope,
            description: "",
            responsibilities: [],
            achievements: [],
            skills: []
        },
        {
            role: "Teaching Assistant",
            company: "University of Delaware",
            duration: "(February 2023 - May 2023)",
            image: smith,
            description: "",
            responsibilities: ["Assisted in the delivery of computer science coursework, reinforcing key concepts and theories through supplemental lectures,hands-on demonstrations, and personalized tutoring.", "Provided academic support to students, conducting office hours and review sessions, addressing individual queries, and contributing to students' understanding of complex computer science topics.", "Collaborated closely with the professor in planning and implementing lesson plans, grading assignments and exams, and maintaining an engaging and inclusive learning environment."],
            achievements: [],
            skills: [skills.skills.Python, skills.skills['C/C++'], skills.skills.Shell, skills.skills.Linux, skills.skills.Github]
        },
        {
            role: "Undergraduate Researcher",
            company: "University of Delaware",
            duration: "(May 2022 - September 2022",
            image: brown,
            description: "",
            responsibilities: ["Conducted in-depth research and created detailed 3D models of microsystems, improving understanding and providing valuable visualization tools for academic study.","Collaborated in the development of a machine learning model capable of classifying viral particles, contributing to advancements in virology research and potential disease control methods.","Participated in academic meetings and seminars, presenting research findings to the faculty and peers, fostering a collaborative and innovative research environment."],
            achievements: [],
            skills: [skills.skills.Python, skills.skills['C/C++'], skills.skills.Shell, skills.skills.Blender, skills.skills.Docker, skills.skills.Linux, skills.skills.Github]
        },
        {
            role: "Senior I.T. Intern",
            company: "Salesianum High School",
            duration: "(May 2021 - September 2022",
            image: salesianum,
            description: "",
            responsibilities: ["Provided technical support and troubleshooting for hardware and software issues across the school, contributing to a smooth and efficient learning environment.", "Assisted in the maintenance and updates of school's computer systems, ensuring that all machines were up-to-date with the latest software patches and security measures.", "Aided in the implementation and training of new IT systems and software, helping staff and students to effectively utilize these tools in their daily activities."],
            achievements: [],
            skills: [skills.skills.Python, skills.skills['C/C++'], skills.skills.Windows, skills.skills.Linux, skills.skills.Github]
        }

    ]

}

export {
    socials,
    skills,
    projects,
    education,
    experience
}