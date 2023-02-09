import { SiGithub, SiLinkedin } from "react-icons/si";
import { Badge } from "./Badge";

export default function Footer() {
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex w-full justify-center items-center text-sm mt-44 mb-20 flex-col space-y-4">
      <span className="text-2xl font-semibold">Marieflor Bawanan</span>
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
      <div className="flex flex-col space-y-1 items-center text-center text-xs md:text-sm">
        <span>Built & designed with NextJS, TypeScript, Tailwind & Figma</span>
        <span>Site is still in the works. Check back often.</span>
      </div>
    </div>
  );
}
