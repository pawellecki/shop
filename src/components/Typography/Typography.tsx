import React, { FC } from 'react'
import { Typography } from '@material-ui/core'
import { Box } from '../../components'

type Props = {
    variant?: "button" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "inherit" | "subtitle1" | "subtitle2" | "body1" | "body2" | "overline" | "srOnly"
    m?: string
    p?: string
    boxClassName?: any
    className?: any
    children?: string
}

const TypographyContainer: FC<Props> = ({ variant, m, p, boxClassName, className, children }) => (
    <Box m={m} p={p} className={boxClassName}>
        <Typography variant={variant} className={className}>
            {children}
        </Typography>
    </Box>
)

export default TypographyContainer
