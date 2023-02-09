import classNames from "classnames";
import Link from "next/link";

interface Props {
  isActive: boolean;
  extraHover?: React.ReactNode;
  children: React.ReactNode;
  url: string;
}

export default function NavItem({
  isActive,
  extraHover,
  children,
  url,
}: Props) {
  return (
    <Link
      href={url}
      className={classNames({
        "bg-red-300": isActive,
      })}
    >
      {children}
    </Link>
  );
}
