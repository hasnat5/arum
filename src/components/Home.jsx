import React, { Fragment } from "react";
import Jumbotron from "./home/jumbotron";
import Sinopsis from './home/sinopsis';
import ListAktor from './home/listAktor';
import Ucapan from "./home/ucapan";

const home = () => {
    return (
        <Fragment>
            <Jumbotron></Jumbotron>
            <Sinopsis></Sinopsis>
            <ListAktor></ListAktor>
            <Ucapan></Ucapan>
        </Fragment>
    )
}

export default home;