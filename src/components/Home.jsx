import React, { Fragment } from "react";
import Jumbotron from "./home/jumbotron";
import Sinopsis from './home/sinopsis';
import ListAktor from './home/listAktor';

const home = () => {
    return (
        <Fragment>
            <Jumbotron></Jumbotron>
            <Sinopsis></Sinopsis>
            <ListAktor></ListAktor>
        </Fragment>
    )
}

export default home;