import { MotionValue } from "framer-motion";

export type CardProps = {
  title: string;
  description: string;
  src: string;
  github: string;
  figma: string;
  velog?: string;
  color: string;
  i: number;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
};
