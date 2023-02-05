import classNames from "classnames";

interface Props {
  children: React.ReactNode | React.ReactElement;
  dark?: boolean;
  size?: "sm";
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
          "text-8xl": !size,
          "text-6xl": size === "sm",
        },
        className
      )}
    >
      {children}
    </h2>
  );
}
