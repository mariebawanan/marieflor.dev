import gsap from "gsap";
import { CSSProperties, useEffect, useRef } from "react";
import { ShapeConfig } from "./types";
import useShapes from "./useShapes";

interface Props {
  config: ShapeConfig[];
}

export default function Float({ config }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const items = useShapes({ config });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".shape",
        { display: "none", scale: 0 },
        {
          display: "block",
          scale: 1,
          stagger: 0.1,
          duration: 0.5,
          ease: "power2.out",
        }
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e: MouseEvent) => {
    const container = ref.current;

    if (!container) {
      return;
    }

    const ctx = gsap.context(() => {
      const shapes = gsap.utils.toArray<HTMLElement>(
        container.querySelectorAll(".shape")
      );

      shapes.forEach((shape, i) => {
        const depth = 60;
        const moveX = (e.pageX - window.innerWidth / 2) / depth;
        const moveY = (e.pageY - window.innerHeight / 2) / depth;
        i++;

        let lag = shape.dataset.lag ?? `${i}`;

        gsap.to(shape, {
          x: moveX * parseInt(lag, 10),
          y: moveY * parseInt(lag, 10),
        });
      });
    }, ref);

    return () => ctx.revert();
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div ref={ref} className="-z-10 overflow-hidden opacity-80 dark:opacity-50">
      {items.map((item, i) => (
        <div
          key={`${item}-${i}`}
          className="shape absolute hidden"
          style={{ ...(item as CSSProperties) }}
          data-lag={item.lag}
        >
          {item.icon}
        </div>
      ))}
    </div>
  );
}
