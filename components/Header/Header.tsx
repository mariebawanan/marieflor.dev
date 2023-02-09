import { useRouter } from "next/router";
import { RiChat1Line, RiPencilLine, RiUserHeartLine } from "react-icons/ri";
import NavItem from "./NavItem";
import SiteTitle from "./SiteTitle";

export default function Header() {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <div className="flex w-full mt-10 md:mt-20 items-center justify-between">
      <SiteTitle isHome={currentPath === "/"} />

      <nav className="absolute bottom-4 w-[90%] left-1/2 -translate-x-1/2 md:relative bg-pink rounded-3xl px-8 py-2">
        <ul className="flex space-x-6 md:space-x-14 justify-around">
          <NavItem
            url="/about"
            isActive={currentPath === "/about"}
            icon={<RiUserHeartLine />}
            extra="more of me"
          >
            about
          </NavItem>
          <NavItem
            url="/writing"
            isActive={currentPath === "/writing"}
            icon={<RiPencilLine />}
            extra="thoughts"
          >
            writing
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
