import Card from "../components/Card";
import Carousel from "../components/Carousel";
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
                            <div></div>
                        }
                    ></Card>
                ))}
            </ol>
        </Section>
    )
}