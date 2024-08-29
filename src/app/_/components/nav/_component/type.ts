import { Dispatch, SetStateAction } from "react";

export type BodyProps = {
  selectedLink: {
    isActive: boolean;
    index: number;
  };
  setSelectedLink: Dispatch<
    SetStateAction<{ isActive: boolean; index: number }>
  >;
  setIsActive: Dispatch<SetStateAction<boolean>>;
};

export type LinkStateType = {
  isActive: boolean;
  index: number;
};

export type ThumbnailProps = {
  selectedLink: LinkStateType;
  isActive: boolean;
};
