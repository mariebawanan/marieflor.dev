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
        "inline-flex items-center justify-center rounded-3xl bg-tuscan py-0.5 px-3 text-sm tracking-wider text-blue dark:bg-tuscan/50",
        {
          "space-x-2": icon,
          "text-xs": size === "sm",
          "border transition hover:cursor-pointer hover:border-tuscan hover:bg-blue hover:text-tuscan dark:border-none":
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
