import React, { FC } from 'react';
import paper1 from "../../assets/paper1.jpg"
import paper2 from "../../assets/paper2.jpg"
import paper3 from "../../assets/paper3.jpg"
import { Gallery } from "../../components"
type Props = {

}

const AllProducts: FC<Props> = () =>
    <Gallery images={[paper1, paper2, paper3]} />


export default AllProducts