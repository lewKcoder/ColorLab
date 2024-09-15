import { FunctionComponent } from "react";

type Props = {
  color1: string;
  color2: string;
  resultColor: string;
  isThreeColors: boolean;
  setColor1: (arg: string) => void;
  setColor2: (arg: string) => void;
  setIsThreeColors: (arg: boolean) => void;
};

export type Component = FunctionComponent<Props>;
