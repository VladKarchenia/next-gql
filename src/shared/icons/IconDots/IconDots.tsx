import * as React from "react";

import { PlumComponentProps } from "@/utils/types";

import { SIconDots } from "./IconDots.styles";

export interface IIconDotsProps extends PlumComponentProps<typeof SIconDots> {}

export const IconDots = ({ size = "sm", ...props }: IIconDotsProps) => (
  <SIconDots size={size} {...props}>
    <span />
  </SIconDots>
);
