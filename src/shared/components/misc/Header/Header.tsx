import React from "react";
import {
  Box,
  HeaderNavItem,
  HeaderNavWrapper,
  Logo,
  Spacer,
} from "@/shared/components";

interface IHeaderProps {
  children?: React.ReactNode;
  hasShadow?: boolean;
  theme?: "default" | "cream" | "transparent";
}

export const Header: React.FC<IHeaderProps> = ({
  children = null,
  hasShadow = true,
  theme = "default",
}) => {
  return (
    <HeaderNavWrapper
      theme={theme}
      hasShadow={{ "@initial": false, "@md": hasShadow }}
    >
      <HeaderNavItem justify="start">
        <Spacer size={16} horizontal />
        <Logo />
      </HeaderNavItem>

      <HeaderNavItem>{children}</HeaderNavItem>

      <HeaderNavItem justify="end">
        <Box>123</Box>
      </HeaderNavItem>
    </HeaderNavWrapper>
  );
};
