import React, { FC } from 'react';
import paper1 from "../../assets/paper1.jpg"
import paper2 from "../../assets/paper2.jpg"
import paper3 from "../../assets/paper3.jpg"
import { Gallery, PapersRow } from "../../components"

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

const AllProducts: FC = () =>
    <>
        <Gallery images={[paper1, paper2, paper3]} />
        <PapersRow config={papersRowConfig} />
    </>


export default AllProducts