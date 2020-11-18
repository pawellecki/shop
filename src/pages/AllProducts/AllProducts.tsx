import React, { FC } from 'react';
import { Grid } from '@material-ui/core'
import paper1 from "../../assets/paper1.jpg"
import paper2 from "../../assets/paper2.jpg"
import paper3 from "../../assets/paper3.jpg"
import { Sidebar, Gallery, PapersRow } from "../../components"
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

type Props = {
    cart: CartItem[]
}

const AllProducts: FC<Props> = ({ cart }) =>
    <Grid container spacing={2} >
        <Grid item xs={3} >
            <Sidebar config={sidebarConfig} />
        </Grid>
        <Grid item xs={9}  >
            <Gallery images={[paper1, paper2, paper3]} />
            <PapersRow config={papersRowConfig} />
        </Grid>
    </Grid>

export default AllProducts
