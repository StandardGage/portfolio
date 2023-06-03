import Card from "../components/Card";
import Collapsible from "../components/Collapsible";
import HorizontalCarousel from "../components/HorizontalCarousel";
import Section from "../components/Section";
import { experience } from "../layouts/portfolio";


export default function Experience() {
    return (
        <Section id="experience" title="My Experience...">
            <ol className="sm:hidden flex flex-row flex-wrap gap-10 justify-center">
                {experience.jobs.map((job, i) => (
                    <Card
                        key = {i}
                        image = {job.image}
                        front={
                            <div>
                                <div className="font-proza">{job.role}</div>
                                <div className="font-telex">{job.company}</div>
                                <div className="font-taviraj">{job.duration}</div>
                            </div>
                        }
                        back = {
                            <div>
                                <div className="m-4 flex justify-center">
                                {job.skills?.map((skill, i) => (
                                    <div key={i} className={`scale-150 p-2 ${skill}`}></div>
                                ))}
                                </div>
                                
                                <Collapsible label={"Responsibilities"}><div className="mx-9 text-sm text-left font-telex whitespace-pre-wrap">{'• '+job.responsibilities.join("\n• ")}</div></Collapsible>
                            </div>
                        }
                    ></Card>
                ))}
            </ol>
            <div className="md:hidden lg:hidden">
            <HorizontalCarousel>
                {experience.jobs.map((job, i) => (
                    <Card
                        key = {i}
                        image = {job.image}
                        front={
                            <div>
                                <div className="font-proza">{job.role}</div>
                                <div className="font-telex">{job.company}</div>
                                <div className="font-taviraj">{job.duration}</div>
                            </div>
                        }
                        back = {
                            <div>
                                <div className="m-4 flex justify-center">
                                {job.skills?.map((skill, i) => (
                                    <div key={i} className={`scale-150 p-2 ${skill}`}></div>
                                ))}
                                </div>
                                <Collapsible label={"Summary"}>{job.description}</Collapsible>
                                <Collapsible label={"Responsibilities"}><div className="mx-9 text-sm text-left font-telex whitespace-pre">{'• '+job.responsibilities.join("\n• ")}</div></Collapsible>
                            </div>
                        }
                    ></Card>
                ))}
            </HorizontalCarousel>
            </div>
        </Section>
    )
}