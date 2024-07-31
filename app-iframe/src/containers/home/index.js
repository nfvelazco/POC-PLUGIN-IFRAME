import React, { Component } from 'react';
import logo from '../../images/logo.png';
import Typography from '@material-ui/core/Typography';
import './home.css';
class Home extends Component {

    

    render() {
        const urlParams = new URLSearchParams(window.location.search);
        const urlOrigen = urlParams.get('product_id');
        return (
            <div className={'home-container'}>
                <img src={logo} className="App-logo" alt="logo" />
                <Typography variant="h4" gutterBottom>
                    El Producto es: {urlOrigen}
                </Typography>
            </div>
        );
    }
}

export default (Home);