import React from "react";

import { breakpoints } from "@/config";

import { PlumComponentProps } from "@/utils/types";
import { atomicClassNames } from "@/utils";

import { SHidden } from "./Hidden.styles";

type Breakpoint = keyof typeof breakpoints;
export interface IHiddenProps extends PlumComponentProps<typeof SHidden> {
  above?: Breakpoint;
  below?: Breakpoint;
}

export const Hidden = React.forwardRef<HTMLDivElement, IHiddenProps>(
  ({ above, below, ...props }, ref) => {
    return (
      <SHidden
        ref={ref}
        className={atomicClassNames({
          display: {
            ...(above && { [`@${above}`]: "none" }),
            ...(below && { [`@max-${below}`]: "none" }),
          },
        })}
        {...props}
      />
    );
  }
);

Hidden.displayName = "Hidden";
