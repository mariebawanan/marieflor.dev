import { useRouter } from "next/router";
import { RiChat1Line, RiCodeLine, RiUserHeartLine } from "react-icons/ri";
import NavItem from "./NavItem";
import SiteTitle from "./SiteTitle";

export default function Header() {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <div className="flex w-full mt-10 md:mt-20 items-center justify-between">
      <SiteTitle isHome={currentPath === "/"} />

      <nav className="absolute bottom-4 w-[90%] md:w-auto left-1/2 -translate-x-1/2 md:translate-x-0 md:left-0 md:relative bg-pink md:bg-transparent rounded-3xl px-8 py-2">
        <ul className="flex space-x-6 md:space-x-14 justify-around md:justify-end">
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
        </ul>
      </nav>
    </div>
  );
}
