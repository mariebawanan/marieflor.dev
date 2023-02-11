import classNames from "classnames";
import { Size } from "./types";

interface Props {
  children: React.ReactNode | React.ReactElement;
  dark?: boolean;
  size?: Size;
  className?: string;
}

export default function Heading({ dark, children, size, className }: Props) {
  return (
    <h2
      className={classNames(
        "whitespace-pre-line dark:text-blue",
        {
          "text-tuscan": dark,
          "text-pink": !dark,
          "text-5xl sm:text-7xl md:text-8xl": !size,
          "text-md xs:text-2xl md:text-6xl": size === "sm",
        },
        className
      )}
    >
      {children}
    </h2>
  );
}
