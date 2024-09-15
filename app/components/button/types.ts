import { FunctionComponent } from "react";

type Props = {
  isCompactMode: boolean;
  onClick: () => void;
};

export type Component = FunctionComponent<Props>;
