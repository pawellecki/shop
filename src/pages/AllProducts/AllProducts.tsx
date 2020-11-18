import React, { FC, useState, useEffect } from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core'
import paper1 from "../../assets/paper1.jpg"
import paper2 from "../../assets/paper2.jpg"
import paper3 from "../../assets/paper3.jpg"
import { Sidebar, Gallery, PapersRow, Select, Button, Collapse } from "../../components"
import { CartItem } from "../../utils/types"

const papersRowConfig = [
    {
        background: paper1,
        title: 'Paper is awesome!',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.'
    },
    {
        background: paper2,
        title: 'Paper is awesome 2!',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.'
    },
    {
        background: paper3,
        title: 'Paper is awesome 3!',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet la.'
    },
]

const sidebarConfig = [
    { path: '#', title: 'Paper clips' },
    { path: '#', title: 'Post-it notes' },
    { path: '#', title: 'Staples' },
    { path: '#', title: 'Hole punches' },
    { path: '#', title: 'Binders' },
    { path: '#', title: 'Staplers' },
    { path: '#', title: 'Laminators' },
    { path: '#', title: 'Writing utensils' },
    { path: '#', title: 'Computer' },
    { path: '#', title: 'Printers' },
    { path: '#', title: 'Fax machines' },
    { path: '#', title: 'Photocopiers' },
    { path: '#', title: 'Cash registers' },
    { path: '#', title: 'Office furniture' },
    { path: '#', title: 'Chairs' },
    { path: '#', title: 'Cubicles' },
    { path: '#', title: 'Filing cabinet' },
    { path: '#', title: 'Armoire desks' },
]

const useStyles = makeStyles((theme) => ({
    sidebar: {
        [theme.breakpoints.down("sm")]: {
            display: 'none',
        }
    },
    form: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    galleryMobile: {
        [theme.breakpoints.up("md")]: {
            display: 'none',
        }
    },
    galleryDesktop: {
        [theme.breakpoints.down("sm")]: {
            display: 'none',
        }
    },
}))

type Props = {
    handleSetCart: (item: CartItem) => void
}

type MockedItem = {
    name: string
    value: number
}

const mockedItem = {
    name: 'Best paper ever',
    value: 2137.00
}

const AllProducts: FC<Props> = ({ handleSetCart }) => {
    const [colorValue, setColorValue] = useState('black')
    const [item, setItem] = useState<MockedItem>({ name: '', value: 0 })

    useEffect(() => {
        setItem(mockedItem)
    }, [])

    const classes = useStyles();

    const handleSelectChange = (event: React.ChangeEvent<{ name?: string | undefined; value: unknown; }>) => setColorValue(event.target.value as string)

    const handleAddToCart = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        const customizedItem = { ...item, color: colorValue }
        return (
            handleSetCart(customizedItem)
        )
    }

    const renderGallery = <Gallery images={[paper1, paper2, paper3]} />

    return (
        <Grid container spacing={2} >
            <Grid item md={3}>
                <Sidebar config={sidebarConfig} boxClassName={classes.sidebar} />
            </Grid>
            <Grid item xs={9}  >
                <Grid container spacing={2} >
                    <Grid item xs={12} md={4}>
                        <span className={classes.galleryDesktop} >{renderGallery}</span>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Typography variant='h6'>{item.name}</Typography>
                        <form className={classes.form} >
                            <Typography>{item.value.toFixed(2).replace('.', ',')} Kr</Typography>
                            <Select config={['black', 'red', 'white']} value={colorValue} onChange={handleSelectChange} />
                            <Button type='submmit' onClick={handleAddToCart}>Buy</Button>
                        </form>
                        <span className={classes.galleryMobile} >{renderGallery}</span>
                        <Collapse>
                            <Typography> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                            </Typography>
                        </Collapse>
                    </Grid>
                </Grid>
                <PapersRow config={papersRowConfig} />
            </Grid>
        </Grid>
    )
}

export default AllProducts
