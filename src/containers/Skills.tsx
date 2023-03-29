import Section from "../components/Section";
import { skills } from "../portfolio";

export default function Skills() {
    const sk = Object.keys(skills.skills)
    return (
        <Section title="What I'm Good At...">
            {/* <ol className="flex flex-wrap justify-between self-center">
                {Object.keys(skills.skills).map((skill, i) => {
                    return (
                    <li key={i} className={'flex flex-col w-32 h-24 backdrop-brightness-110 rounded-lg shadow-md justify-end'}>
                        <div
                            className={`${skills.skills[skill]} w-min self-center`}></div>
                        <p className="font-taviraj text-md pt-6">{skill}</p>
                    </li>
                )})}
            </ol> */}
            {sk.map((skill) => (
                <div className='w-32 h-24 backdrop-brightness-110 rounded-lg shadow-md justify-end' key={skill}>
                    <div className={`${skills.skills[skill]} w-min self-center`}></div>
                    <p className="font-taviraj text-md pt-6">{skill}</p>
                </div>
            ))}
        </Section>
    )
}