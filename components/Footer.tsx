import { SiGithub, SiLinkedin } from "react-icons/si";
import { Badge } from "./Badge";

export default function Footer() {
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="py-11 flex w-full justify-between px-8 lg:px-44 text-sm md:items-end mt-44 flex-col space-y-8 md:space-y-0 md:flex-row">
      <div className="flex items-center space-x-4 flex-col space-y-2 md:flex-row md:space-y-0">
        <span>2023 &#x2022; marieflor.dev</span>
        <div className="flex">
          <Badge
            size="sm"
            icon={<SiLinkedin />}
            onClick={() => openInNewTab("https://linkedin.com/in/maribwnn")}
          >
            Linkedin
          </Badge>
          <Badge
            size="sm"
            icon={<SiGithub />}
            onClick={() => openInNewTab("https://github.com/mariebawanan")}
          >
            Github
          </Badge>
        </div>
      </div>
      <div className="flex flex-col space-y-1 items-center md:items-end justify-center text-center text-xs md:text-sm">
        <span>Built & designed with NextJS, TypeScript, Tailwind & Figma</span>
        <span>Site is still in the works. Check back often.</span>
      </div>
    </div>
  );
}
