import React,{Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './stylesheet/header.css';

class Search extends Component{
    render(){
        return(
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
        )
    }
}

export default Search;