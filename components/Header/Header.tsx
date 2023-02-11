import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { RiChat1Line, RiCodeLine, RiUserHeartLine } from "react-icons/ri";
import ModeToggle from "./ModeToggle";
import NavItem from "./NavItem";
import SiteTitle from "./SiteTitle";

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const currentPath = router.pathname;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="mt-10 flex w-full items-center justify-between md:mt-20">
      <SiteTitle isHome={currentPath === "/"} />

      <div className="absolute top-10 right-5 flex md:hidden">
        <ModeToggle theme={theme} setTheme={setTheme} />
      </div>

      <nav className="absolute bottom-4 left-1/2 z-20 w-[90%] -translate-x-1/2 rounded-3xl bg-pink px-8 py-2 dark:bg-orange/50 md:relative md:bottom-0 md:left-0 md:w-auto md:translate-x-0 md:bg-transparent dark:md:bg-transparent">
        <ul className="flex items-center justify-around space-x-6 md:justify-end md:space-x-14">
          <div className="flex md:hidden">
            <NavItem
              url="/"
              isActive={currentPath === "/"}
              icon={<AiOutlineHome />}
              extra="home"
            >
              home
            </NavItem>
          </div>
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

          <div className="hidden md:flex">
            <ModeToggle theme={theme} setTheme={setTheme} />
          </div>
        </ul>
      </nav>
    </div>
  );
}
