import { FunctionComponent } from "react";

type Props = {
  color1: string;
  color2: string;
  color3: string;
  isThreeColors: boolean;
  resultColor: string;
  setColor1: (arg: string) => void;
  setColor2: (arg: string) => void;
  setColor3: (arg: string) => void;
  setIsThreeColors: (arg: boolean) => void;
  setResultColor: (arg: string) => void;
};

export type Component = FunctionComponent<Props>;
