import classNames from "classnames";
import { Header } from "../Header";

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
      <div className="bg-blue absolute w-screen h-screen overflow-hidden top-0 left-0 -z-30" />
      <Header />

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
