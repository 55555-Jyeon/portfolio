import { MotionValue } from "framer-motion";

export type CharactersProps = {
  value: string;
};
export type WordProps = {
  children: string;
  range: number[];
  progress: MotionValue<number>;
};
export type CharacterProps = {
  children: string;
  range: number[];
  progress: MotionValue<number>;
};
