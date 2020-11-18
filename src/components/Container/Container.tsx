import React, { FC } from 'react'
import { Container } from '@material-ui/core'
import { Box } from '../../components'

type Props = {
    maxWidth?: false | "xs" | "sm" | "md" | "lg" | "xl" | undefined
    children?: React.ReactNode
}

const ContainerContainer: FC<Props> = ({ maxWidth, children }) => (
    <Container maxWidth={maxWidth}>
        {children}
        <Box height={40} />
    </Container>
)

export default ContainerContainer
