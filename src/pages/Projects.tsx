import { type Key } from "react";
import { motion } from "framer-motion";
import Section from "../components/Section";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import HorizontalCarousel from "../components/HorizontalCarousel";
import { projects } from "@/layouts/portfolio";

interface Project {
  title: string;
  partners: string;
  mainImage: ImageMetadata;
  video: never[];
  link: string;
  description: string;
  images: ImageMetadata[];
  skills: string[];
}

function getMedia(project: Project) {
  const media: JSX.Element[] = [];
  project.images.map((image: ImageMetadata, i: Key) =>
    media.push(
      <motion.img
        draggable={false}
        loading="eager"
        alt={image.src}
        whileTap={{ scale: 1.6 }}
        key={i}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        className="rounded-md shadow-md w-48 cursor-zoom-in z-20"
        src={image.src}
      />
    )
  );
  return media;
}

export default function Projects() {
  return (
    <Section id="projects" title="My Projects...">
      <ol className="sm:hidden flex flex-wrap gap-10 justify-center">
        {projects.projects.map((project, i) => {
          return (
            <Card
              key={i}
              image={project.mainImage.src}
              front={
                <div>
                  <div className="font-proza ">{project.title}</div>
                  <div className="font-telex">{project.partners}</div>
                  <div className="font-taviraj">{project.description}</div>
                </div>
              }
              back={
                <div className="m-auto">
                  <div className="font-proza">{project.title}</div>
                  <div className="font-telex">{project.partners}</div>
                  <Carousel>{getMedia(project)}</Carousel>
                  <a
                    className="underline font-taviraj hover:text-primary duration-300"
                    target="_blank"
                    href={project.link}
                  >
                    View Project
                  </a>
                  <div className="flex justify-center space-x-4 my-2">
                    {project.skills.map((skill, i) => {
                      return (
                        <div key={i} className="scale-150">
                          <div className={skill}></div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              }
            />
          );
        })}
      </ol>
      <div className="md:hidden lg:hidden">
        <HorizontalCarousel>
          {projects.projects.map((project, i) => {
            return (
              <Card
                key={i}
                image={project.mainImage.src}
                front={
                  <div>
                    <div className="font-proza ">{project.title}</div>
                    <div className="font-telex">{project.partners}</div>
                    <div className="font-taviraj">{project.description}</div>
                  </div>
                }
                back={
                  <div className="m-auto">
                    <div className="font-proza">{project.title}</div>
                    <div className="font-telex">{project.partners}</div>
                    <Carousel>{getMedia(project)}</Carousel>
                    <a
                      className="underline font-taviraj hover:text-primary duration-300"
                      target="_blank"
                      href={project.link}
                    >
                      View Project
                    </a>
                    <div className="flex justify-center space-x-4 my-2">
                      {project.skills.map((skill, i) => {
                        return (
                          <div key={i} className="scale-150">
                            <div className={skill}></div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                }
              />
            );
          })}
        </HorizontalCarousel>
      </div>
    </Section>
  );
}
