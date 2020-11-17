import React, { FC } from 'react'
import { Grid, Typography, Paper, makeStyles } from '@material-ui/core'
import { Box } from '../../components'

type ConfigPaper = {
    background: any
    title: string
    description: string
}

type Props = {
    config: ConfigPaper[]
    m?: string
    p?: string
    boxClassName?: any
}

const useStyles = makeStyles((theme) => ({
    paper: {
        height: '100%',
        padding: theme.spacing(2)
    },
}))

const PapersRow: FC<Props> = ({ config, m, p, boxClassName }) => {
    const classes = useStyles()

    return (
        <Box m={m} p={p} className={boxClassName}>
            <Grid container spacing={2}>
                {config.map(({ background, title, description }: ConfigPaper) =>
                    <Grid key={title} item xs={4}>
                        <Paper style={{ backgroundImage: `url(${background})` }} className={classes.paper}>
                            <Typography variant="h6">{title}</Typography>
                            <Typography>{description}</Typography>
                        </Paper>
                    </Grid>
                )}
            </Grid>
        </Box>
    )
}


export default PapersRow
