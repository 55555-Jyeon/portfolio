type Transition = {
  duration: number;
  ease?: number[];
};

type Animation = {
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

type ByCharacter = {
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

const transition: Transition = { duration: 1, ease: [0.76, 0, 0.24, 1] };

export const opacity: Animation = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: { duration: 0.35 },
  },
  closed: {
    opacity: 0,
    transition: { duration: 0.35 },
  },
};

export const height: Animation = {
  initial: {
    height: 0,
  },
  enter: {
    height: "auto",
    transition,
  },
  exit: {
    height: 0,
    transition,
  },
};

export const background: Animation = {
  initial: {
    height: 0,
  },
  open: {
    height: "100vh",
    transition,
  },
  closed: {
    height: 0,
    transition,
  },
};

export const blur: Animation = {
  initial: {
    filter: "blur(0px)",
    opacity: 1,
  },
  open: {
    filter: "blur(4px)",
    opacity: 0.6,
    transition: { duration: 0.3 },
  },
  closed: {
    filter: "blur(0px)",
    opacity: 1,
    transition: { duration: 0.3 },
  },
};

export const translate: ByCharacter = {
  initial: {
    y: "100%",
    opacity: 0,
  },
  enter: (i) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 1, delay: i[0] },
  }),
  exit: (i) => ({
    y: "100%",
    opacity: 1,
    transition: { duration: 0.7, delay: i[1] },
  }),
};
