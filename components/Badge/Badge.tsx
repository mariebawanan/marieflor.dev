import classNames from "classnames";
import { Size } from "../Typography/types";

interface Props {
  children: React.ReactNode | React.ReactElement;
  className?: string;
  icon?: React.ReactNode;
  size?: Size;
  onClick?: () => void;
}

export default function Badge({
  children,
  className,
  icon,
  size,
  onClick,
}: Props) {
  return (
    <div
      onClick={onClick}
      className={classNames(
        "rounded-3xl inline-flex bg-tuscan text-blue py-1 px-3 text-sm items-center justify-center tracking-wider",
        {
          "space-x-2": icon,
          "text-xs": size === "sm",
          "hover:cursor-pointer hover:border-tuscan border hover:bg-blue transition hover:text-tuscan":
            onClick,
        },
        className
      )}
    >
      {icon}
      <div className={classNames({ "mt-0.5": icon })}>{children}</div>
    </div>
  );
}
