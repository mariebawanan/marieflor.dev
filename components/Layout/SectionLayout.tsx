import classNames from "classnames";
import { Header } from "../Header";

interface Props {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export default function SectionLayout({ children, className }: Props) {
  return (
    <div className="min-h-screen w-screen flex  items-center flex-col">
      <div className="bg-blue absolute w-screen h-screen overflow-hidden top-0 left-0 -z-30 " />
      <div
        className={classNames(
          "max-w-[90%] w-[90%] md:max-w-7xl flex  items-start flex-col",
          className
        )}
      >
        <Header />
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}
