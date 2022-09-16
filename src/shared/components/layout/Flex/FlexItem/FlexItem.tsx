import React from "react";

import { PlumComponentProps } from "@/utils";

import { SFlexItem } from "./FlexItem.styles";

export interface IFlexItemProps extends PlumComponentProps<typeof SFlexItem> {}

export const FlexItem = React.forwardRef<HTMLDivElement, IFlexItemProps>((props, ref) => (
  <SFlexItem ref={ref} {...props} />
));

FlexItem.displayName = "FlexItem";
