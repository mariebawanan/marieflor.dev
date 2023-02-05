import { SectionLayout } from "./Layout";
import { Heading } from "./Typography";

export default function About() {
  return (
    <SectionLayout dark className="text-pink flex flex-col space-y-20">
      <Heading size="sm">
        {"I build beautiful web applications\nusing modern web technologies."}
      </Heading>
      <div className="flex space-x-12 justify-center">
        <p className="w-1/3">
          I am a frontend-focused software engineer with over 6 years of professional
          development experience, holding a degree of BS Computer Science from the
          University of the Philippines.
        </p>

        <p className="w-1/3">
          I have been employed by leading tech companies and emerging amazing startup
          companies throughout my career thus far.
        </p>
      </div>
    </SectionLayout>
  );
}
