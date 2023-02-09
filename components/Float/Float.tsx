import gsap from "gsap";
import { CSSProperties, useEffect, useRef } from "react";
import { home } from "./config";
import useShapes from "./useShapes";

export default function Float() {
  const ref = useRef<HTMLDivElement>(null);
  const items = useShapes({ config: home });

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
    <div ref={ref} className="overflow-hidden -z-10">
      {items.map((item, i) => (
        <div
          key={`${item}-${i}`}
          className="absolute shape "
          style={{ ...(item as CSSProperties) }}
          data-lag={item.lag}
        >
          {item.icon}
        </div>
      ))}
    </div>
  );
}
