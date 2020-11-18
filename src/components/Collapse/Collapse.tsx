import React, { FC, useState } from "react";
import { Box, Collapse, Button } from "@material-ui/core"

type Props = {
  collapsedHeight?: string | number
  m?: string
  p?: string
  boxClassName?: any
  children: React.ReactNode;
};

const CollapseContainer: FC<Props> = ({ collapsedHeight = '150px', m, p, boxClassName, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleSetIsOpen = () => setIsOpen(!isOpen)

  return (
    <Box m={m} p={p} className={boxClassName}>
      <Collapse in={isOpen} collapsedHeight={collapsedHeight}>{children}</Collapse>
      <Button variant='outlined' color='secondary' onClick={handleSetIsOpen}>{isOpen ? 'Hide' : 'Read more'}</Button>
    </Box>
  )
}

export default CollapseContainer;
