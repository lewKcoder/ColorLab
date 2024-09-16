import { FunctionComponent } from "react";

type Props = {
  color1: string;
  color2: string;
  isThreeColors: boolean;
  resultColor: string;
  setColor1: (arg: string) => void;
  setColor2: (arg: string) => void;
  setIsThreeColors: (arg: boolean) => void;
  setResultColor: (color: string) => void;
};

export type Component = FunctionComponent<Props>;
