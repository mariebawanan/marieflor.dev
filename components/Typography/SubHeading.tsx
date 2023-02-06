import classNames from "classnames";
import { Align } from "./types";

interface Props {
  dark?: boolean;
  children: React.ReactNode | React.ReactElement;
  align?: Align;
  className?: string;
}

export default function SubHeading({ dark = false, children, align, className }: Props) {
  return (
    <h2
      className={classNames(
        "text-base md:text-xl tracking-widest font-extralight uppercase",
        {
          "text-tuscan": dark,
          "text-pink": !dark,
          "text-center": !align,
          "text-left": align === Align.Left,
          "text-right": align === Align.Right,
        },
        className
      )}
    >
      {children}
    </h2>
  );
}
