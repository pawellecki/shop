import React, { FC } from "react";
import { Box, Button, makeStyles } from "@material-ui/core";

type Props = {
  color?: "inherit" | "default" | "primary" | "secondary" | undefined
  variant?: 'contained' | 'outlined' | 'text'
  m?: string
  p?: string
  boxClassName?: any
  children?: string
  onClick?: () => void
}

const useStyles = makeStyles((theme) => ({
  button: {
  }
}))

const ButtonContainer: FC<Props> = ({ color = 'primary', variant = 'contained', m, p, boxClassName, children, onClick }) => {
  const classes = useStyles()

  return (
    <Box m={m} p={p} className={boxClassName}>
      <Button className={classes.button} variant={variant} color={color} onClick={onClick}>
        {children}
      </Button>
    </Box>

  );
};

export default ButtonContainer;
