import classNames from "classnames";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { Header } from "../Header";

interface Props {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export default function SectionLayout({ children, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { display: "none", translateY: 100 },
        {
          display: "flex",
          translateY: 0,
          stagger: 0.1,
          duration: 1,
          ease: "power2.out",
        }
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen w-screen flex items-center flex-col">
      <div className="bg-blue dark:bg-black absolute w-screen h-screen overflow-hidden top-0 left-0 -z-30 " />
      <div
        className={classNames(
          "max-w-[90%] w-[90%] md:max-w-7xl flex flex-col h-screen",
          className
        )}
      >
        <Header />
        <div ref={ref} className="flex-1 items-center hidden">
          {children}
        </div>
      </div>
    </div>
  );
}
