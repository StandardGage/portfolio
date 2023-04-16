//robotsroad
import robot from './assets/robotsroad/robot.jpg';
//capsid
import capsid from './assets/capsids/capsid.jpg';
import capsid2 from './assets/capsids/capsid2.jpg';
//virus-journal
import virus from './assets/virus-journal/virus.jpg';
import virus2 from './assets/virus-journal/virus2.jpg';
import virus3 from './assets/virus-journal/virus3.jpg';
//house-woods
import house from './assets/house-woods/house.jpg';
import lantern from './assets/house-woods/lantern.jpg';
import table from './assets/house-woods/table.jpg';
import wood from './assets/house-woods/wood.jpg';
//hawaiian-cleanup
import game from './assets/hawaiian-cleanup/game.jpg';
//temnet
import temnet from './assets/temnet/temnet.jpg';

//salesianum
import salesianum from './assets/salesianum/salesianum.jpg';
//udel
import udel from './assets/udel/udel.jpg';
import brown from './assets/udel/brown.jpg';
import smith from './assets/udel/smith.jpg';

//agr
import agr from './assets/agr/agr.jpg';

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
    }
}

const projects = {
    projects: [
        {
            title: "TEMNet",
            partners: "Part of Research for Perilla Lab",
            mainImage: temnet,
            video: [],
            link: "https://github.com/Perilla-lab/TEMNet",
            description: "",
            images: [temnet],
            skills: [skills.skills['C/C++'], skills.skills.Docker, skills.skills.Python, skills.skills.Github, skills.skills.Linux]
        },
        {
            title: "Hawaiian Cleanup",
            partners: "Game Development Project",
            mainImage: game,
            video: [],
            link: "https://github.com/StandardGage/HawaiianCleanup",
            description: "Game to educate children in Computer Science",
            images: [game],
            skills: [skills.skills.Typescript, skills.skills.CSS, skills.skills.HTML]
        },
        {
            title: "Capsid Visualizations",
            partners: "Part of Research for Perilla Lab",
            mainImage: capsid,
            video: [],
            link: "https://www.artstation.com/artwork/9NoOdv",
            description: "Exploring 3d visualizations for capsids",
            images: [capsid, capsid2],
            skills: [skills.skills.Blender]
            
        },
        {
            title: "Scientific Journal Candidates",
            partners: "Part of Research for Perilla Lab",
            mainImage: virus,
            video: [],
            link: "https://www.artstation.com/artwork/14vlqo",
            description: "Candidates for Scientific Journal Cover",
            images: [virus, virus2, virus3],
            skills: [skills.skills.Blender]
        },
        {
            title: "Robot's Road",
            partners: "Personal Project",
            mainImage: robot,
            video: ["https://www.youtube-nocookie.com/embed/LnPcdFlZFAo?controls=1"],
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
            schoolName: "Salesianum High School",
            title: "Honors Student",
            date: "(August 2017 - May 2021)",
            image: salesianum,
            classes: ["Intro to Python", "A.P. Computer Science - 5/5", "Game Dev Independent Study", "Networking Independent Study"],
            clubs: ["Computer Science Club - President", "National Honor Society", "Science Olympiad", "Track"],
            awards: ["Bebras Computing Challenge", "Silver for Computer Science"]
        },
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
            awards: ["Honors Program", "Grand Scholars Program"]
        }
    ]
}

const experience = {
    jobs: [
        {
            role: "Teaching Assistant",
            company: "University of Delaware",
            duration: "(February 2023 - Present)",
            image: smith,
            description: "",
            responsibilities: ["Helping students with homework", "Grading assignments", "Helping students with projects", "Holding office hours"],
            achievements: [],
            skills: [skills.skills['C/C++'], skills.skills.Python, skills.skills.Linux, skills.skills.Github]
        },
        {
            role: "Chief Financial Officer",
            company: "Alpha Gamma Rho - Beta Upsilon",
            duration: "(January 2023 - Present)",
            image: agr,
            description: "",
            responsibilities: ["Managing the budget", "Managing the bank account", "Managing the treasury"],
            achievements: [],
        },
        {
            role: "Lab Assistant",
            company: "University of Delaware",
            duration: "(September 2022 - December 2022)",
            image: udel,
            description: "",
            responsibilities: ["Helping students with homework", "Grading assignments", "Helping students with projects"],
            achievements: [],
            skills: [skills.skills['C/C++'], skills.skills.Python, skills.skills.Linux, skills.skills.Github]
        },
        {
            role: "Undergraduate Researcher",
            company: "University of Delaware",
            duration: "(May 2022 - September 2022",
            image: brown,
            description: "",
            responsibilities: [],
            achievements: [],
            skills: [skills.skills['C/C++'], skills.skills.Python, skills.skills.Linux, skills.skills.Github, skills.skills.Docker, skills.skills.Blender]
        },
        {
            role: "Senior Information Technology Intern",
            company: "Salesianum High School",
            duration: "(May 2021 - September 2022",
            image: salesianum,
            description: "",
            responsibilities: ["Maintaining the school's network", "Maintaining the school's servers", "Maintaining the school's computers"],
            achievements: [],
            skills: [skills.skills.Windows, skills.skills.Linux, skills.skills.Github, skills.skills.Python, skills.skills['C/C++']]
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