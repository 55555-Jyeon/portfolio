import { Dispatch, SetStateAction } from "react";

export type NavbarProps = {
  setIsActive: Dispatch<SetStateAction<boolean>>;
};
