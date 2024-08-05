import React from 'react';
import {
    ROUTES
} from '../constants/router';
import { Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Box, CssBaseline, CircularProgress, Typography } from '@material-ui/core/';




const RouterApp = ({location}) => {
    const currentKey = location? (location.pathname.split("/")[1] || "/"):"";
	const timeout = { enter: 10, exit: 500 };

    return (
        <div>
            <CssBaseline />
            <div className="container-route">
                <Box className="loader">
                    <CircularProgress className="circularProgress" size={ 50 } color="inherit" />
                    <Typography component="div" variant="caption" className="label">Iniciando...</Typography>
                </Box>
                <TransitionGroup className="transition-group"> 
                    <CSSTransition
                        key={currentKey}
                        timeout={timeout}
                        classNames="fade"
                        appear
                    >
                        <Switch location={location}>
                            {
                                ROUTES.map((route,index)=>(<Route key={`Rout-${index}`} exact path={route.PATH} component={ route.COMPONENT } />))
                            }
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        </div>
    );
};

export default RouterApp;