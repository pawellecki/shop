import React, { FC } from 'react'
import { Paper, Link, makeStyles } from '@material-ui/core'
import { Box } from '../../components'

type Props = {
    config: Array<{ path: string, title: string, }>
    m?: string
    p?: string
    boxClassName?: any
}

const useStyles = makeStyles((theme) => ({
    box: {
        height: '100%',
    },
    paper: {
        height: '100%',
        padding: theme.spacing(2),
        backgroundColor: theme.palette.secondary.light,
        '& li': {
            marginBottom: theme.spacing(1)
        },
        '& a': {
            color: theme.palette.secondary.contrastText,
            transition: '0.2s'
        }
    },
}))

const SidebarContainer: FC<Props> = ({ config, m, p, boxClassName }) => {
    const classes = useStyles()

    return (
        <Box m={m} p={p} className={`${classes.box} ${boxClassName}`}>
            <Paper className={classes.paper}>
                <ul>
                    {config.map(({ path, title }) =>
                        <li key={title}>
                            <Link href={path}>{title}</Link>
                        </li>
                    )}
                </ul>
            </Paper>
        </Box>
    )
}


export default SidebarContainer
