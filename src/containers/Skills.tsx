import Section from "../components/Section";
import { skills } from "../portfolio";


export default function Skills() {
    const sk = Object.keys(skills.skills)
    return (
        <Section id="skills" title="What I'm Good At...">
            <ol className="flex flex-wrap sm:gap-3 gap-10 justify-center">
            {sk.map((skill) => (
                <div className='w-32 h-24 sm:w-20 sm:h-22 backdrop-brightness-110 rounded-lg shadow-md' key={skill}>
                    <div className={`${skills.skills[skill]} mt-6 scale-150`}></div>
                    <p className="font-taviraj sm:text-xs text-md pt-6">{skill}</p>
                </div>
            ))}
            </ol>
        </Section>
    )
}