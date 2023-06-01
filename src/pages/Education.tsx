import { motion } from "framer-motion";
import Card from "../components/Card";
import Collapsible from "../components/Collapsible";
import Section from "../components/Section";
import { education } from "../layouts/portfolio";

export default function Education() {
    return (
        <Section id="education" title="My Education...">
            <ol className="flex flex-row flex-wrap gap-10 justify-center">
                {education.schools.map((school, i) => {
                    return (
                        <Card
                        key = {i}
                        image = {school.image}
                        front= {
                            <>
                            <div className="font-proza">{school.schoolName}</div>
                            <div className="font-telex">{school.title}</div>
                            <div className="font-taviraj">{school.date}</div>
                            </>
                        }
                        back = {
                            <>
                            <Collapsible label={"Classes"}><div className="mx-9 text-sm text-left font-telex whitespace-pre">{'• '+school.classes.join('\n• ')}</div></Collapsible>
                            <Collapsible label={"Clubs/Activities"}><div className="mx-9 text-sm text-left font-telex whitespace-pre">{'• '+school.clubs.join('\n• ')}</div></Collapsible>
                            <Collapsible label={"Awards"}><div className="mx-9 text-sm text-left font-telex whitespace-pre">{'• '+school.awards.join('\n• ')}</div></Collapsible>
                            </>
                        }
                        >
                        </Card>
                    )
                })}
            </ol>
        </Section>
    )
}