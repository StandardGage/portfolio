import { motion } from "framer-motion";
import Card from "../components/Card";
import { projects } from "../layouts/portfolio";
import Carousel from "../components/Carousel";
import type { Key } from "react";
import Section from "../components/Section";
import HorizontalCarousel from "../components/HorizontalCarousel";


function getMedia(project: { images: string[]; video: string[]; }) {
    const media: JSX.Element[] = [];
    project.video.map((video: string, i: Key) => media.push(
        <iframe key={i} allowFullScreen className="rounded-md shadow-md w-48" src={video}></iframe>
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
            <ol className="sm:hidden flex flex-wrap gap-10 justify-center">
            
            {projects.projects.map((project, i) => {
                return (
                    <Card
                    key = {i}
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
                            <Carousel>
                                {getMedia(project)}
                            </Carousel>
                            <a className="underline font-taviraj self-end hover:text-primary duration-300" target="_blank" href={project.link}>View Project</a>
                            <div className="flex self-end justify-center space-x-4 my-2">
                            {project.skills.map((skill,i) => {
                                return (
                                    <div key={i} className="scale-150">
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
            <div className="md:hidden lg:hidden">
            <HorizontalCarousel>
            {projects.projects.map((project, i) => {
                return (
                    <Card
                    key = {i}
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
                            <Carousel>
                                {getMedia(project)}
                            </Carousel>
                            <a className="underline font-taviraj self-end" target="_blank" href={project.link}>View Project</a>
                            <div className="flex self-end justify-center space-x-4 my-2">
                            {project.skills.map((skill,i) => {
                                return (
                                    <div key={i} className="scale-150">
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
            </HorizontalCarousel>
            </div>
        </Section>
    )
}