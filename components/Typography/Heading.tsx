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
        "font-extrabold whitespace-pre-line",
        {
          "text-tuscan": dark,
          "text-pink": !dark,
          "text-7xl md:text-8xl": !size,
          "text-2xl md:text-6xl": size === "sm",
          "text-xl md:text-4xl": size === "xs",
        },
        className
      )}
    >
      {children}
    </h2>
  );
}
