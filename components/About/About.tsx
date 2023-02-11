import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { about } from "../Float/config";
import Float from "../Float/Float";
import { SectionLayout } from "../Layout";
import { Heading, SubHeading } from "../Typography";
import { Align } from "../Typography/types";
import TechList from "./TechList";

export default function About() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [mounted, setMounted] = useState(false);
  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <SectionLayout className="w-full items-start">
      <div className="md:max-w-2/3 mb-20 flex w-full flex-col items-center space-y-4 text-sm md:space-y-11 md:pb-0 md:text-lg">
        <SubHeading dark align={Align.Left}>
          About
        </SubHeading>

        <Heading size={isMobile ? "xs" : "sm"} dark className="font-extrabold">
          a frontend developer with affinity for design, intuitive user
          experience and pixel-perfect user interfaces
        </Heading>

        <div className="flex flex-col space-y-4 leading-relaxed md:flex-row md:space-x-12 md:space-y-0">
          <p className="w-full whitespace-pre-line md:w-1/2">
            {`I am a frontend-focused software engineer with  6+ years of professional development experience, holding a degree of BS Computer Science from the University of the Philippines.
            \nI have been employed by leading tech companies and emerging amazing startup companies throughout my career thus far.`}
          </p>

          <div className="w-full md:w-1/2">
            Currently, I am a Senior Software Engineer,{" "}
            <span className="font-bold">focusing on the frontend</span>. On a
            daily basis, I work with <TechList /> among others, in building and
            maintaining web applications and design systems —
            <span className="font-bold">all built from the ground up</span>.
          </div>
        </div>
      </div>
      <Float config={about} />
    </SectionLayout>
  );
}
