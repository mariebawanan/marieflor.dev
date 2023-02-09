import { useMediaQuery } from "react-responsive";
import { about } from "../Float/config";
import Float from "../Float/Float";
import { SectionLayout } from "../Layout";
import { Heading, SubHeading } from "../Typography";
import { Align } from "../Typography/types";
import TechList from "./TechList";

export default function About() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <SectionLayout className="items-start w-full">
      <div className="w-full md:max-w-2/3 flex flex-col items-center space-y-4 md:space-y-11 text-sm  md:text-lg">
        <SubHeading dark align={Align.Left}>
          About
        </SubHeading>

        <Heading size={isMobile ? "xs" : "sm"} dark className="font-extrabold">
          a frontend developer with affinity for design, intuitive user
          experience and pixel-perfect user interfaces
        </Heading>

        <div className="flex flex-col md:space-x-12 leading-relaxed md:flex-row space-y-4 md:space-y-0">
          <p className="w-full md:w-1/2 whitespace-pre-line">
            {`I am a frontend-focused software engineer with  6+ years of professional development experience, holding a degree of BS Computer Science from the University of the Philippines.
            \nI have been employed by leading tech companies and emerging amazing startup companies throughout my career thus far.`}
          </p>

          <div className="w-full md:w-1/2">
            Currently, I am a Senior Software Engineer,{" "}
            <span className="font-bold">focusing on the frontend</span>. On a
            daily basis, I work with <TechList />
            among others, in building and maintaining web applications and
            design systems —
            <span className="font-bold">all built from the ground up</span>.
          </div>
        </div>
      </div>
      <Float config={about} />
    </SectionLayout>
  );
}
