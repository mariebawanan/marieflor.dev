import { useMemo } from "react";
import { useMediaQuery } from "react-responsive";
import { ShapeConfig } from "./types";

interface Props {
  config: ShapeConfig[];
}

export default function useShapes({ config }: Props) {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return useMemo(() => {
    return config.map((item) => {
      const { bottom, top, left, width, right, rotate } = item;
      return {
        ...item,
        bottom: bottom ? `${bottom}%` : undefined,
        top: top ? `${top - (isMobile ? 8 : 0)}%` : undefined,
        left: left ? `${left - (isMobile ? 16 : 0)}%` : undefined,
        right: right ? `${right - (isMobile ? 4 : 0)}%` : undefined,
        width: `${width + (isMobile ? 18 : 0)}%`,
        transform: `rotate(${rotate || 0}deg)`,
      };
    });
  }, [config, isMobile]);
}
