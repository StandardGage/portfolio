import { AnimateSharedLayout, motion } from "framer-motion";
import Section from "../components/Section";
import { skills } from "../portfolio";

export default function Skills() {
    return (
        <Section title="What I'm Good At...">
            <ol className="flex flex-wrap justify-between self-center">
                <AnimateSharedLayout>
                {Object.keys(skills.skills).map((skill, i) => {
                    return (
                    <li className={'flex flex-col w-32 h-24 backdrop-brightness-110 rounded-lg shadow-md justify-end'}>
                        <motion.div
                            initial={{scale:1}}
                            whileInView={{scale:2}}
                            className={`${skills.skills[skill]} w-min self-center`}></motion.div>
                        <p className="font-taviraj text-md pt-6">{skill}</p>
                    </li>
                )})}
                </AnimateSharedLayout>
            </ol>
        </Section>
    )
}