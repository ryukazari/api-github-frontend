import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { map } from 'lodash';
import Routes from './configRoutes';
import { IGithubUser } from './../models/githubuser';

interface IProps{
    setRefreshPage: (bool: boolean) => void;
    user: IGithubUser;
}

const Routing = (props: IProps) => {
    const { setRefreshPage, user } = props;
    return (
        <Router>
            <Switch>
                {
                    map(Routes, (route, index) => (
                            <Route key={index} path={route.path} exact={route.exact}>
                                <route.page setRefreshPage={setRefreshPage} user={user}/>
                            </Route>
                    ))
                }
            </Switch>
        </Router>
    )
}

export default Routing;
