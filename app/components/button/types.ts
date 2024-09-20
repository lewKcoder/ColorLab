import { FunctionComponent } from "react";

type Props = {
  resultColor: string;
  onClick: () => void;
  disabled?: boolean;
  isIncreasing?: boolean;
};

export type Component = FunctionComponent<Props>;
