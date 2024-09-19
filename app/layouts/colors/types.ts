import { FunctionComponent } from "react";

type Props = {
  resultColor: string;
  setResultColor: (args: string) => void;
};

export type Component = FunctionComponent<Props>;
