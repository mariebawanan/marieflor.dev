import { SectionLayout } from "./Layout";
import { Heading, SubHeading } from "./Typography";

export default function Home() {
  return (
    <SectionLayout>
      <div className="w-full md:max-w-1/2 flex flex-col items-center space-y-11">
        <SubHeading dark>frontend developer</SubHeading>
        <Heading dark className="text-center">
          marieflor bawanan
        </Heading>
        <p className="text-center w-4/5 md:w-2/3">
          Loves to work on the web. Passionate about building simple and elegant solutions
          to complex problems.
        </p>
      </div>
    </SectionLayout>
  );
}
