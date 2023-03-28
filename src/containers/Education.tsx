import { motion } from "framer-motion";
import Card from "../components/Card";
import Section from "../components/Section";
import { education } from "../portfolio";

export default function Education() {
    return (
        <Section title="My Education...">
            <ol className="flex flex-row flex-wrap gap-10 justify-center">
                {education.schools.map((school, i) => {
                    return (
                        <Card
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
                            <div className="font-proza">Classes</div>
                            <div className="font-telex whitespace-pre">{school.classes.join('\n')}</div>
                            <div className="font-proza">Clubs/Activites</div>
                            <div className="font-telex whitespace-pre">{school.clubs.join('\n')}</div>
                            <div className="font-proza">Awards</div>
                            <div className="font-telex whitespace-pre">{school.awards.join('\n')}</div>
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