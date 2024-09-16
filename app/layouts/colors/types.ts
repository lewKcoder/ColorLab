import { FunctionComponent } from "react";

type Props = {
  colors: string[];
  isThreeColors: boolean;
  resultColor: string;
  setColors: (arg: string[]) => void;
  setIsThreeColors: (arg: boolean) => void;
  setResultColor: (color: string) => void;
};

export type Component = FunctionComponent<Props>;
