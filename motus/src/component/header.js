import React , {Component} from 'react';
import './stylesheet/style.css';
import headerAction from '../Actions/headerAction';
import {connect} from 'react-redux';
import logo from './assets/logo.png';
import search from './assets/searchButton.png';

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            username : 'admin',
            password : 'admin'
        }
    }
    render(){
        return(
            <header>
                <div className="container">
                    <div className="logo">
                        <img src={logo} width="100%" title="motus"/>
                    </div>
                    <nav className="menu">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Customers</a></li>
                            <li><a href="#">Reports</a></li>
                            <li><a href="#">Help Center</a></li>
                        </ul>
                    </nav>

                </div>
                <div className="social">
                    <span><img src={search}/> </span>
                    <span><img src={search}/> </span>
                </div>
            </header>
        )
    }
}

export default Header;