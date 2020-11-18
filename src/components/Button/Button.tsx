import React, { FC } from "react";
import { Box, Button } from "@material-ui/core";

type Props = {
  color?: "inherit" | "default" | "primary" | "secondary" | undefined
  variant?: 'contained' | 'outlined' | 'text'
  type?: string
  m?: string
  p?: string
  boxClassName?: any
  children?: string
  onClick?: (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>) => any
}

const ButtonContainer: FC<Props> = ({ color = 'primary', variant = 'contained', type = 'button', m, p, boxClassName, children, onClick }) =>
  <Box m={m} p={p} className={boxClassName}>
    <Button color={color} variant={variant}  onClick={onClick}>
      {children}
    </Button>
  </Box>

export default ButtonContainer;
