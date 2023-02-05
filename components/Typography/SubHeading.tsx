import classNames from "classnames";

interface Props {
  dark?: boolean;
  children: React.ReactNode | React.ReactElement;
}

export default function SubHeading({ dark = false, children }: Props) {
  return (
    <h2
      className={classNames("text-xl tracking-widest font-light uppercase text-center", {
        "text-tuscan": dark,
        "text-pink": !dark,
      })}
    >
      {children}
    </h2>
  );
}
