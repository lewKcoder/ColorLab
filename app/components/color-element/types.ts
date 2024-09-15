import { ChangeEvent, FunctionComponent } from "react";

type Props = {
  id: string;
  onChange: (args: ChangeEvent<HTMLInputElement>) => void;
  color: string;
};

export type Component = FunctionComponent<Props>;
