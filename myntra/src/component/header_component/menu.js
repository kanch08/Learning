import React,{Component} from 'react';
//import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import './stylesheet/header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Menu extends Component{
    render(){
        return(
            
            <div className="menu">
                <div className="logo">

                </div>
                <ul>
                    <li>Men</li>
                    <li>Women</li> 
                    <li>kids</li>
                    <li>home & living</li>
                    <li>discover</li>
                </ul>
                <div className="search"> 
                    <div>
                    <FontAwesomeIcon icon="search" />
                        <input type="text" placeholder="Search for products, brands and more"/>
                    </div>
                    <ul>
                        <li>Profile</li>
                        <li>Wishlist</li>
                        <li>Bag</li>   
                    </ul>

                    </div>
            </div>
            
        )
    }
}

export default Menu;