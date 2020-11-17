import React, { FC } from "react";
import { AppBar } from "@material-ui/core"

type Props = {
  className: any;
  children: React.ReactNode;
};

const AppBarContainer: FC<Props> = ({ className, children }) =>
  <AppBar className={className}>{children}</AppBar>

export default AppBarContainer;
