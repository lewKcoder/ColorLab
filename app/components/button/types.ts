import { FunctionComponent } from "react";

type Props = {
  isThreeColors: boolean;
  onClick: () => void;
};

export type Component = FunctionComponent<Props>;
