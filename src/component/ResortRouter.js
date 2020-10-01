import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from '../pages/Home';
import Room from '../pages/Room';
import SingleRoom from '../pages/SingleRoom';
import Error from '../pages/Error';

const ResortRouter = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={ Home } />
                <Route exact path="/rooms" component={ Room } />
                <Route exact path="/rooms/:slug" component={ SingleRoom } />
                <Route component={ Error } />
            </Switch>
        </>
    );
};

export default ResortRouter;