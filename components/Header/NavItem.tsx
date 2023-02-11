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
        "group relative flex flex-col items-center justify-center text-xs before:absolute before:bottom-1  before:left-0 before:block before:h-3 before:w-full before:origin-bottom before:scale-y-0 before:bg-pink/40 before:transition before:duration-200 before:ease-in-out before:content-[''] hover:text-red before:hover:scale-y-100 dark:before:hover:bg-orange/50 sm:text-lg",
        {
          "text-red": isActive,
        }
      )}
    >
      {isActive && (
        <Image
          src="/icons/half.svg"
          alt="active"
          width={16}
          height={16}
          className="absolute left-1/2 top-7 -translate-x-1/2 rotate-180 md:-left-4 md:top-2.5 md:rotate-0"
        />
      )}

      {isMobile && icon}
      {children}
      {!isMobile && <ExtraOnHover icon={icon} text={extra} />}
    </Link>
  );
}
