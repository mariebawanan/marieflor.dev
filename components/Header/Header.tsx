import { useRouter } from "next/router";
import { RiChat1Line, RiPencilLine, RiUserHeartLine } from "react-icons/ri";
import ExtraOnHover from "./ExtraOnHover";
import NavItem from "./NavItem";
import SiteTitle from "./SiteTitle";

export default function Header() {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <div className="flex w-full mt-20 items-center justify-between">
      <SiteTitle isHome={currentPath === "/"} />

      <nav>
        <ul className="flex space-x-14">
          <NavItem
            url="/about"
            isActive={currentPath === "/about"}
            onHover={
              <ExtraOnHover icon={<RiUserHeartLine />} text="more of me" />
            }
          >
            about
          </NavItem>
          <NavItem
            url="/writing"
            isActive={currentPath === "/writing"}
            onHover={<ExtraOnHover icon={<RiPencilLine />} text="thoughts" />}
          >
            writing
          </NavItem>
          <NavItem
            url="/contact"
            isActive={currentPath === "/contact"}
            onHover={<ExtraOnHover icon={<RiChat1Line />} text="say hi :)" />}
          >
            contact
          </NavItem>
        </ul>
      </nav>
    </div>
  );
}
