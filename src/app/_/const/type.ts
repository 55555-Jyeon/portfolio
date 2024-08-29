// project type
export type ProjectDataType = {
  title: string;
  description: string;
  src: string;
  github: string;
  figma: string;
  velog?: string;
  color: string;
}[];

// navigation link type
export type NavLinkType = {
  title: string;
  href: string;
  src: string;
};

// animation type
export type Transition = {
  duration: number;
  ease?: number[];
};
export type Animation = {
  // any : Any CSS property
  initial: {
    [key: string]: any;
  };
  open?: {
    [key: string]: any;
    transition: Transition;
  };
  enter?: {
    [key: string]: any;
    transition: Transition;
  };
  exit?: {
    [key: string]: any;
    transition: Transition;
  };
  closed?: {
    [key: string]: any;
    transition: Transition;
  };
};
export type ByCharacter = {
  initial: {
    [key: string]: any;
  };
  enter: (i: number[]) => {
    [key: string]: any;
    transition: Transition;
  };
  exit: (i: number[]) => {
    [key: string]: any;
    transition: Transition;
  };
};
