export interface ShapeConfig {
  icon: React.ReactNode;
  bottom?: number;
  top?: number;
  left?: number;
  right?: number;
  width: number;
  lag: number;
  rotate?: number;
  opacity?: number;
}

export enum Page {
  Home = "home",
}

export enum Colors {
  Red = "#DE5055",
  Pink = "#B84A7E",
  Purple = "#7C528C",
  Orange = "#DF7410",
  Teal = "#2F4858",
  Beige = "#D9D9D9",
}
