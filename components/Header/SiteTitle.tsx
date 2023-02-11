import classNames from "classnames";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { useMediaQuery } from "react-responsive";

export default function SiteTitle({ isHome }: { isHome: boolean }) {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <Link
      href="/"
      className={classNames("flex", {
        "group relative before:absolute before:bottom-0 before:-left-4 before:-z-10 before:block before:h-7 before:w-[170px] before:origin-left before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:text-white before:hover:scale-x-100 md:before:rounded-2xl md:before:bg-red md:before:content-['']":
          !isHome,
      })}
    >
      <span className="w-[105px] md:w-[120px] md:group-hover:hidden">
        marieflor.dev
      </span>

      {!isMobile && (
        <span className="hidden w-[120px] text-white group-hover:block">
          go to home
        </span>
      )}

      {!isHome && <AiOutlineHome className="mt-0.5 md:mt-1" />}
    </Link>
  );
}
