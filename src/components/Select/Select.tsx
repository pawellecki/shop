import React, { FC } from "react";
import { Box, FormControl, InputLabel, Select, MenuItem, makeStyles } from "@material-ui/core";

type Props = {
  config: string[]
  m?: string
  p?: string
  boxClassName?: any
  value: string
  onChange: (event: React.ChangeEvent<{ name?: string | undefined; value: unknown; }>) => void
}

const useStyles = makeStyles((theme) => ({
  formControl: {

  },
  select: {
  }
}))

const SelectContainer: FC<Props> = ({ config, value, m, p, boxClassName, onChange }) => {
  const classes = useStyles()

  return (
    <Box m={m} p={p} className={boxClassName}>
      <FormControl className={classes.formControl}>
        <InputLabel id="item-color-select">Color</InputLabel>
        <Select
          labelId="item-color-select"
          value={value}
          onChange={onChange}
        >
          {config?.map((value: string) => <MenuItem key={value} value={value}>{value}</MenuItem>)}
        </Select>
      </FormControl>
    </Box>

  );
};

export default SelectContainer;
