import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

interface Props {
  isActive: boolean;
  onHover?: React.ReactNode;
  children: React.ReactNode;
  url: string;
}

export default function NavItem({ isActive, onHover, children, url }: Props) {
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
        <div className="absolute -left-6 top-1.5 w-4 h-4">
          <Image src="/icons/half.svg" fill alt="active" />
        </div>
      )}
      {children}
      {onHover}
    </Link>
  );
}
