import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineHome } from "react-icons/ai";
import NavItem from "./NavItem";

export default function Header() {
  const router = useRouter();
  const currentPath = router.pathname;
  console.log(currentPath);

  return (
    <div className="flex w-full mt-20 items-center justify-between">
      <Link href="/" className="flex space-x-2 items-center">
        <span>marieflor.dev</span>
        {currentPath !== "/" && <AiOutlineHome />}
      </Link>
      <nav>
        <ul className="flex space-x-14">
          <NavItem url="/about" isActive={currentPath === "/about"}>
            about
          </NavItem>
          <NavItem url="/writing" isActive={currentPath === "/writing"}>
            writing
          </NavItem>
          <NavItem url="/contact" isActive={currentPath === "/contact"}>
            contact
          </NavItem>
        </ul>
      </nav>
    </div>
  );
}
