import Card from "../components/Card";
import Collapsible from "../components/Collapsible";
import Section from "../components/Section";
import { experience } from "../portfolio";


export default function Experience() {
    return (
        <Section id="experience" title="My Experience...">
            <ol className="flex flex-row flex-wrap gap-10 justify-center">
                {experience.jobs.map((job, i) => (
                    <Card
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
                                    <div className={`scale-150 p-2 ${skill}`}></div>
                                ))}
                                </div>
                                <Collapsible label={"Summary"}>{job.description}</Collapsible>
                                <Collapsible label={"Responsibilities"}><div className="mx-9 text-sm text-left font-telex whitespace-pre">{'• '+job.responsibilities.join("\n• ")}</div></Collapsible>
                            </div>
                        }
                    ></Card>
                ))}
            </ol>
        </Section>
    )
}