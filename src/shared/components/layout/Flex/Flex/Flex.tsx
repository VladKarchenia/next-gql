import React from "react";
import { PlumComponentProps } from "@/utils";
import { SFlex } from "./Flex.styles";

export interface IFlexProps extends PlumComponentProps<typeof SFlex> {}

export const Flex = React.forwardRef<HTMLDivElement, IFlexProps>((props, ref) => (
  <SFlex ref={ref} {...props} />
));

Flex.displayName = "Flex";
