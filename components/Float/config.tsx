import {
  ArcOutline,
  FullFilled,
  FullOutline,
  HalfFilledV1,
  HalfFilledV2,
  HalfOutline,
  QuarterFilled,
} from "./Shapes";
import { Colors } from "./types";

export interface ShapeConfig {
  icon: React.ReactNode;
  bottom?: number;
  top?: number;
  left?: number;
  right?: number;
  width: number;
  lag: number;
  rotate?: number;
}

// Randomize shapes around the screen and make them responsive
const home: ShapeConfig[] = [
  {
    icon: <HalfFilledV1 color={Colors.Purple} />,
    bottom: 8,
    left: 30,
    width: 12,
    lag: 1,
  },
  {
    icon: <HalfOutline color={Colors.Purple} />,
    bottom: 9,
    left: 33,
    width: 14,
    lag: 2,
    rotate: -45,
  },
  {
    icon: <HalfFilledV2 color={Colors.Red} />,
    top: 43,
    left: 20,
    width: 13,
    lag: 1,
  },
  {
    icon: <ArcOutline color={Colors.Beige} />,
    top: 41,
    left: 22,
    width: 13,
    lag: 3,
  },
  {
    icon: <QuarterFilled color={Colors.Pink} />,
    top: 24,
    left: 40,
    width: 8,
    lag: 4,
  },
  {
    icon: <FullOutline color={Colors.Red} />,
    bottom: 35,
    left: 53,
    width: 15,
    lag: 4,
  },
  {
    icon: <FullFilled color={Colors.Orange} />,
    top: 32,
    right: 15,
    width: 10,
    lag: 1,
  },
  {
    icon: <HalfOutline color={Colors.Orange} />,
    top: 42,
    right: 16,
    width: 12,
    lag: 4,
    rotate: 34,
  },
  {
    icon: <HalfFilledV2 color={Colors.Teal} />,
    bottom: 22,
    right: 20,
    width: 12,
    lag: 1,
    rotate: 40,
  },
  {
    icon: <FullOutline color={Colors.Teal} />,
    bottom: 18,
    right: 24,
    width: 8,
    lag: 4,
    rotate: 40,
  },
];

export { home };
