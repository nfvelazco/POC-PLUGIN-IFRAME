import React, { Component } from 'react';
//import logo from '../../images/logo.png';
import Typography from '@material-ui/core/Typography';
import './home.css';
class Home extends Component {
    render() {
        return (
            <div className={'home-container'}>
                
                <Typography variant="h4" gutterBottom>
                    Bienvenido a la Tienda Snoop
                </Typography>
                
            </div>
        );
    }
}

export default (Home);