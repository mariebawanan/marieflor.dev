import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import ExtraOnHover from "./ExtraOnHover";

interface Props {
  isActive: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
  extra: string;
  url: string;
}

export default function NavItem({
  isActive,
  icon,
  extra,
  children,
  url,
}: Props) {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <Link
      href={url}
      className={classNames(
        "group relative before:content-[''] before:absolute before:block before:w-full before:h-3 before:bottom-1 before:left-0 before:bg-pink/40 before:hover:scale-y-100 before:scale-y-0 before:origin-bottom before:transition before:ease-in-out before:duration-200 hover:text-red",
        {
          "text-red": isActive,
        }
      )}
    >
      {isActive && (
        <div className="absolute left-3 -bottom-3 md:-left-6 md:top-1.5 w-4 h-4 rotate-180">
          <Image src="/icons/half.svg" fill alt="active" />
        </div>
      )}
      <div className="flex flex-col items-center justify-center">
        {isMobile && icon}
        {children}
      </div>
      {!isMobile && <ExtraOnHover icon={icon} text={extra} />}
    </Link>
  );
}
