import React, { Fragment } from "react";
import Jumbotron from "./home/jumbotron";
import Info from './home/info';
import ListAktor from './home/listAktor';

const home = () => {
    return (
        <Fragment>
            <Jumbotron></Jumbotron>
            <Info></Info>
            <ListAktor></ListAktor>
        </Fragment>
    )
}

export default home;