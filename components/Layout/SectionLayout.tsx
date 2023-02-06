import classNames from "classnames";

interface Props {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export default function SectionLayout({ children, className, dark }: Props) {
  return (
    <div
      className={classNames("min-h-screen w-screen flex justify-center items-center", {
        "bg-tuscan": dark,
      })}
    >
      <div
        className={classNames(
          "max-w-[90%] md:max-w-7xl flex justify-center items-center",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}
