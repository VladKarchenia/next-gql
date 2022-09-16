import React from "react";

import { PlumComponentProps } from "@/utils/types";

import { SGridContainer } from "./GridContainer.styles";

export type IGridContainerProps = PlumComponentProps<typeof SGridContainer>;

export const GridContainer = React.forwardRef<HTMLDivElement, IGridContainerProps>((props, ref) => {
  return <SGridContainer ref={ref} {...props} />;
});

GridContainer.displayName = "GridContainer";
