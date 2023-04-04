import { motion } from "framer-motion";
import Card from "../components/Card";
import { projects } from "../portfolio";
import Carousel from "../components/Carousel";
import { Key } from "react";
import Section from "../components/Section";


function getMedia(project: { images: string[]; video: string[]; }) {
    const media: JSX.Element[] = [];
    project.video.map((video: string, i: Key) => media.push(
        <iframe allowFullScreen className="rounded-md shadow-md w-48" src={video}></iframe>
    ))
    project.images.map((image: string, i: Key) => media.push(
        <motion.img
        loading="eager"
        alt={image}
        whileTap={{scale:1.6}}
        key={i}
        initial={{scale:0}}
        animate={{scale:1}}
        exit={{scale:0}}
        className="rounded-md shadow-md w-48 cursor-zoom-in z-20"
        src={image}>
        </motion.img>))
    return media;
}

export default function Projects() {
    return (
        <Section id="projects" title="My Projects...">
            <ol className="flex flex-wrap gap-10 justify-center">
            
            {projects.projects.map((project, i) => {
                return (
                    <Card
                    image = {project.mainImage}
                    front={
                        <div>
                            <div className="font-proza ">{project.title}</div>
                            <div className="font-telex">{project.partners}</div>
                            <div className="font-taviraj">{project.description}</div>
                        </div>
                    }
                    back={
                        <div>
                            <div className="font-proza">{project.title}</div>
                            <div className="font-telex">{project.partners}</div>
                            {/* <iframe className="rounded-md shadow-md" width="250" height="150" src={project.video} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                            <Carousel>
                                {getMedia(project)}
                            </Carousel>
                            <a className="underline font-taviraj self-end" target="_blank" href={project.link}>View Project</a>
                            <div className="flex self-end justify-center space-x-4 my-2">
                            {project.skills.map((skill,i) => {
                                return (
                                    <div className="scale-150">
                                    <div className={skill}></div>
                                    </div>
                                )
                            })}
                            </div>
                        </div>
                    }>
                    </Card>
                )
            })}
            
            </ol>
        </Section>
    )
}