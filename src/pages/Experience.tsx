import Card from "../components/Card";
import CardModal from "../components/CardModal";
import Collapsible from "../components/Collapsible";
import HorizontalCarousel from "../components/HorizontalCarousel";
import Section from "../components/Section";
import { experience } from "../layouts/portfolio";

export default function Experience() {
  return (
    <Section id="experience" title="My Experience...">
      <ol className="sm:hidden flex flex-row flex-wrap gap-10 justify-center">
        {experience.jobs.map((job, i) => (
          <>
            <CardModal
              width={"clamp(100px, 30vw, 800px)"}
              height={"clamp(100px, 30vh, 800px)"}
              image={job.image.src}
              title={job.role}
              subtitle={job.company}
              date={job.duration}
            >
              <div className="m-4 flex justify-center">
                {job.skills?.map((skill, i) => (
                  <div key={i} className={`scale-150 p-2 ${skill}`}></div>
                ))}
              </div>
              {job.description && (
                <Collapsible label={"Summary"}>{job.description}</Collapsible>
              )}
              <Collapsible label={"Responsibilities"}>
                <div className="mx-9 text-sm text-left font-telex overflow-auto whitespace-pre-wrap">
                  {"• " + job.responsibilities.join("\n• ")}
                </div>
              </Collapsible>
            </CardModal>
          </>
        ))}
      </ol>
      <div className="md:hidden lg:hidden">
        <HorizontalCarousel>
          {experience.jobs.map((job, i) => (
            <div className="grow shrink-0">
              <CardModal
                width={"300px"}
                height={"250px"}
                image={job.image.src}
                title={job.role}
                subtitle={job.company}
                date={job.duration}
              >
                <div className="m-4 flex justify-center">
                  {job.skills?.map((skill, i) => (
                    <div key={i} className={`scale-150 p-2 ${skill}`}></div>
                  ))}
                </div>
                {job.description && (
                  <Collapsible label={"Summary"}>{job.description}</Collapsible>
                )}
                <Collapsible label={"Responsibilities"}>
                  <div className="mx-9 text-sm text-left font-telex overflow-auto whitespace-pre-wrap">
                    {"• " + job.responsibilities.join("\n• ")}
                  </div>
                </Collapsible>
              </CardModal>
            </div>
          ))}
        </HorizontalCarousel>
      </div>
    </Section>
  );
}
