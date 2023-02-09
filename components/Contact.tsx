import { SiLinkedin } from "react-icons/si";
import { Badge } from "./Badge";
import { Clipboard } from "./Clipboard";
import { contact } from "./Float/config";
import Float from "./Float/Float";
import { openInNewTab } from "./helper";
import { SectionLayout } from "./Layout";
import { SplitText } from "./SplitText";
import { Heading, SubHeading } from "./Typography";
import { Align } from "./Typography/types";

export default function Contact() {
  return (
    <SectionLayout className="items-start w-full">
      <div className="w-full md:max-w-2/3 flex flex-col space-y-8 items-start">
        <SubHeading dark align={Align.Left}>
          Contact
        </SubHeading>

        <div>
          <Heading size="sm" dark className="font-extrabold">
            <SplitText text="Let’s keep in touch." />
          </Heading>

          <p>
            If you have an exciting opportunity for me, or if you just simply
            want to say hello, feel free to reach out!
          </p>
        </div>

        <Clipboard text="marie.bawanan@gmail.com">
          <Heading dark size="xs">
            marie.bawanan@gmail.com
          </Heading>
        </Clipboard>

        <div>
          Alternatively, you can also send me a message on
          <Badge
            size="sm"
            icon={<SiLinkedin />}
            onClick={() => openInNewTab("https://linkedin.com/in/maribwnn")}
            className="ml-1"
          >
            Linkedin
          </Badge>
        </div>

        <p className="whitespace-pre-line text-sm font-bold">
          {`This site is still in the works, check back often. `}
          &#9786;
        </p>
      </div>
      <Float config={contact} />
    </SectionLayout>
  );
}
