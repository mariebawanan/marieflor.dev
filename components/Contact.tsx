import { Clipboard } from "./Clipboard";
import { SectionLayout } from "./Layout";
import { Heading, SubHeading } from "./Typography";

export default function Contact() {
  return (
    <SectionLayout className="flex flex-col space-y-20">
      <Heading dark className="font-bold text-center">
        Let’s keep in touch!
      </Heading>
      <p className="w-full md:w-1/2">
        If you have an exciting opportunity for me, or if you just simply want to say
        hello, feel free to reach out!
      </p>

      <div className="flex flex-col space-y-4">
        <SubHeading dark>Send an email to</SubHeading>
        <Clipboard text="marie.bawanan@gmail.com">
          <Heading
            dark
            size="xs"
            className="transition ease-in-out delay-150 hover:-translate-y-1"
          >
            marie.bawanan@gmail.com
          </Heading>
        </Clipboard>
      </div>
    </SectionLayout>
  );
}
