import React from "react";

import { PlumComponentProps } from "@/utils/types";

import { SDivider } from "./Divider.styles";

export interface IDividerProps extends PlumComponentProps<typeof SDivider> {}

export const Divider = ({ ...props }: IDividerProps) => {
  return <SDivider {...props}></SDivider>;
};
