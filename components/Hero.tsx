import { SectionLayout } from "./Layout";
import SplitText from "./SplitText/SplitText";
import { Heading, SubHeading } from "./Typography";

export default function Home() {
  return (
    <SectionLayout>
      <div className="w-full md:max-w-2/3 flex flex-col items-center space-y-11">
        <SubHeading dark>frontend developer</SubHeading>

        <Heading dark className="text-center font-extrabold">
          <SplitText text="Marieflor" />
          <SplitText text="Bawanan" />
        </Heading>

        <p className="text-center whitespace-pre-line">
          {
            "Loves to work on the web. Passionate about building\nsimple and elegant solutions to complex problems."
          }
        </p>
      </div>
    </SectionLayout>
  );
}
