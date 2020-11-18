import React, { FC } from 'react'
import { Box } from '@material-ui/core'

type Props = {
    component?: any
    maxWidth?: number
    height?: number
    display?: string
    m?: string
    mt?: number
    mr?: number
    mb?: number
    ml?: number
    p?: string
    pt?: number
    pr?: number
    pb?: number
    pl?: number
    className?: string
    children?: React.ReactNode
}

const BoxContainer: FC<Props> = ({
    component,
    maxWidth,
    height,
    display,
    m,
    mt,
    mr,
    mb,
    ml,
    p,
    pt,
    pr,
    pb,
    pl,
    className,
    children
}) => (
        <Box
            component={component}
            maxWidth={maxWidth}
            height={height}
            display={display}
            m={m}
            mt={mt}
            mr={mr}
            mb={mb}
            ml={ml}
            p={p}
            pt={pt}
            pr={pr}
            pb={pb}
            pl={pl}
            className={className}
        >
            {children}
        </Box>
    )

export default BoxContainer
