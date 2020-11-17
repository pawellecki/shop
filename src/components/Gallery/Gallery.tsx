import React, { FC, useState } from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import { Box } from '../../components'

type Props = {
    images: any
    maxImagesLength?: number
    maxWidth?: number
    m?: string
    p?: string
    boxClassName?: any
}

const useStyles = makeStyles((theme) => ({
    box: {
        maxWidth: 300
    },
    main: {
        width: '100%',
        marginBottom: 6
    },
    thumbnails: {
        '& img': {
            width: '100%',
            cursor: 'pointer'
        }
    }
}))

const Gallery: FC<Props> = ({ images, maxImagesLength = 3, m, p, boxClassName }) => {
    const [chosenImageIndex, setChosenImageIndex] = useState(0)
    const classes = useStyles()

    const handleSetChosenImageIndex = (index: number) => setChosenImageIndex(index)

    return (
        <Box m={m} p={p} className={`${classes.box} ${boxClassName}`}>
            <img src={images[chosenImageIndex]} className={classes.main} alt='main' />
            <Grid container spacing={1} className={classes.thumbnails}>
                {images.map((image: any, index: number) =>
                    index < maxImagesLength ? (
                        <Grid item xs={4}>
                            <img src={image} onClick={() => handleSetChosenImageIndex(index)} alt='thumbnail' />
                        </Grid>
                    ) : null
                )}
            </Grid>
        </Box>
    )
}


export default Gallery
