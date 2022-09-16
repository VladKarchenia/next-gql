import React from "react";
import { PlumComponentProps } from "@/utils";
import { SHeaderNav } from "./Header.styles";

export interface IHeaderNavWrapper
  extends PlumComponentProps<typeof SHeaderNav> {}

export const HeaderNavWrapper = React.forwardRef<
  HTMLElement,
  IHeaderNavWrapper
>(({ children, ...props }, ref) => (
  <SHeaderNav {...props} ref={ref}>
    {children}
  </SHeaderNav>
));

HeaderNavWrapper.displayName = "HeaderNavWrapper";
