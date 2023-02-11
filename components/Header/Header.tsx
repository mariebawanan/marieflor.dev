import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Menu from "./Menu";
import ModeToggle from "./ModeToggle";
import SiteTitle from "./SiteTitle";
import { Page } from "./types";

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
      <SiteTitle isHome={currentPath === Page.Home} />

      <div className="items-center md:flex md:space-x-2">
        <nav className="absolute bottom-4 left-1/2 z-20 w-[90%] -translate-x-1/2 items-center rounded-3xl bg-pink px-8 py-2 dark:bg-orange/50 md:relative md:bottom-0 md:left-0 md:w-auto md:translate-x-0 md:bg-transparent dark:md:bg-transparent">
          <Menu currentPath={currentPath} />
        </nav>

        <ModeToggle theme={theme} setTheme={setTheme} />
      </div>
    </div>
  );
}
