import * as React from "react";
import { atomicClassNames } from "@/utils";
import { GridContainer, Spacer } from "@/shared/components";

export interface IFooterProps {}

export const Footer: React.FC<IFooterProps> = () => {
  return (
    <footer
      className={atomicClassNames({ backgroundColor: "neutrals-4" })}
      data-plum-nav="footer"
    >
      <Spacer size={{ "@initial": 48, "@md": 64 }} />
      <GridContainer>Footer</GridContainer>
      <Spacer size={{ "@initial": 48, "@md": 64 }} />
    </footer>
  );
};

Footer.displayName = "Footer";
