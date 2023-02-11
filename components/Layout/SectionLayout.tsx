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
    <div className="flex min-h-screen w-screen flex-col items-center">
      <div className="absolute top-0 left-0 -z-30 h-screen w-screen overflow-hidden bg-blue transition-colors duration-500 ease-in-out dark:bg-black" />
      <div
        className={classNames(
          "flex h-screen w-[90%] max-w-[90%] flex-col md:max-w-7xl",
          className
        )}
      >
        <Header />
        <div ref={ref} className="hidden w-full flex-1 items-center">
          {children}
        </div>
      </div>
    </div>
  );
}
