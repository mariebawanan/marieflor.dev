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
        "group flex flex-col items-center justify-center relative before:content-[''] before:absolute before:block before:w-full before:h-3 before:bottom-1 before:left-0 before:bg-pink/40 before:hover:scale-y-100 before:scale-y-0 before:origin-bottom before:transition before:ease-in-out before:duration-200 hover:text-red",
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
          className="absolute left-1/2 -translate-x-1/2 top-10 md:-left-4 md:top-2.5 rotate-180 md:rotate-0"
        />
      )}

      {isMobile && icon}
      {children}
      {!isMobile && <ExtraOnHover icon={icon} text={extra} />}
    </Link>
  );
}
