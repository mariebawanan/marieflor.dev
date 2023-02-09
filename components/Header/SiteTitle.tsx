import classNames from "classnames";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";

export default function SiteTitle({ isHome }: { isHome: boolean }) {
  return (
    <Link
      href="/"
      className={classNames("flex", {
        "group relative before:content-[''] before:absolute before:block before:w-[170px] before:h-7 before:bottom-0 before:-left-4 before:bg-red before:rounded-2xl before:hover:scale-x-100 before:scale-x-0 before:origin-left before:transition before:ease-in-out before:duration-300 before:-z-10 hover:text-white":
          !isHome,
      })}
    >
      <span className="group-hover:hidden w-[120px]">marieflor.dev</span>

      <span className="hidden group-hover:block w-[120px] text-white">
        go to home
      </span>

      {!isHome && <AiOutlineHome className="mt-1" />}
    </Link>
  );
}
