import React, { FC } from 'react';
import { Box, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, makeStyles } from "@material-ui/core";
import { Typography } from "../../components";
import { CartItem } from "../../utils/types"
import { sumObjectsValues } from "../../utils/reduce"

type Props = {
  cart: CartItem[]
  m?: string
  p?: string
  boxClassName?: any
}

const useStyles = makeStyles((theme) => ({
  typography: {
    textAlign: 'right'
  }
}))
const Cart: FC<Props> = ({ cart, m, p, boxClassName }) => {
  const valuesSum = sumObjectsValues(cart, 'value')
  const classes = useStyles();

  return (
    <Box m={m} p={p} className={boxClassName}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Color</TableCell>
              <TableCell align="left">Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart?.map(({ name, color, value }) => (
              <TableRow >
                <TableCell component="th" scope="row">{name}</TableCell>
                <TableCell component="th" scope="row">{color}</TableCell>
                <TableCell component="th" scope="row">{value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {valuesSum > 0 && <Typography className={classes.typography}>{`sum: ${valuesSum}`}</Typography>}
    </Box>
  )
}

export default Cart
