import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { RiChat1Line, RiCodeLine, RiUserHeartLine } from "react-icons/ri";
import { useMediaQuery } from "react-responsive";
import ModeToggle from "./ModeToggle";
import NavItem from "./NavItem";
import SiteTitle from "./SiteTitle";

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const currentPath = router.pathname;
  const isMobile = useMediaQuery({ maxWidth: 768 });

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex w-full mt-10 md:mt-20 items-center justify-between">
      <SiteTitle isHome={currentPath === "/"} />
      {isMobile && (
        <div className="absolute top-10 right-5">
          <ModeToggle theme={theme} setTheme={setTheme} />
        </div>
      )}

      <nav className="absolute bottom-4 w-[90%] md:w-auto left-1/2 -translate-x-1/2 md:translate-x-0 md:left-0 md:relative bg-pink dark:bg-orange/50 dark:md:bg-transparent md:bg-transparent rounded-3xl px-8 py-2">
        <ul className="flex space-x-6 md:space-x-14 justify-around md:justify-end items-center">
          <NavItem
            url="/about"
            isActive={currentPath === "/about"}
            icon={<RiUserHeartLine />}
            extra="more of me"
          >
            about
          </NavItem>
          <NavItem
            url="/projects"
            isActive={currentPath === "/projects"}
            icon={<RiCodeLine />}
            extra="my work"
          >
            projects
          </NavItem>
          <NavItem
            url="/contact"
            isActive={currentPath === "/contact"}
            icon={<RiChat1Line />}
            extra="say hi :)"
          >
            contact
          </NavItem>

          {!isMobile && <ModeToggle theme={theme} setTheme={setTheme} />}
        </ul>
      </nav>
    </div>
  );
}
