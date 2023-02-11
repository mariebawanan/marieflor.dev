import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
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
    <div className="mt-10 flex w-full items-center justify-between md:mt-20">
      <SiteTitle isHome={currentPath === "/"} />
      {isMobile && (
        <div className="absolute top-10 right-5">
          <ModeToggle theme={theme} setTheme={setTheme} />
        </div>
      )}

      <nav className="absolute bottom-4 left-1/2 z-20 w-[90%] -translate-x-1/2 rounded-3xl bg-pink px-8 py-2 dark:bg-orange/50 md:relative md:bottom-0 md:left-0 md:w-auto md:translate-x-0 md:bg-transparent dark:md:bg-transparent">
        <ul className="flex items-center justify-around space-x-6 md:justify-end md:space-x-14">
          {isMobile && (
            <NavItem
              url="/"
              isActive={currentPath === "/"}
              icon={<AiOutlineHome />}
              extra="home"
            >
              home
            </NavItem>
          )}
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
