import React , {Component} from 'react';
import './stylesheet/style.css';
import logo from './assets/logo.png';
import contact from './assets/contact.png';
import search from './assets/searchButton.png';
import { BrowserRouter as Router , Link } from "react-router-dom";

class Header extends Component{
    render(){
        return(
            <header>
                <Router>
                    <div className="container">
                        <div className="logo">
                            <Link to="/index">
                                <img
                                    src={logo}
                                    width="100%"
                                    alt="motus"
                                    title="motus"
                                />
                            </Link>
                        </div>
                        <nav className="menu">
                            <ul>
                                <li>
                                    <Link to="/home">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/Customers">
                                        Customers
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/Reports">
                                        Reports
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/Help">
                                        Help Center
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                    </div>
                    <div className="social">
                        <span>
                            <Link to="/Search">
                                <img
                                    src={search}
                                    alt="search"
                                />
                            </Link>
                        </span>
                        <span>
                            <Link to="Contact">
                                <img
                                    src={contact}
                                    alt="Contact"
                                />
                            </Link>
                        </span>
                    </div>
                </Router>
            </header>
        )
    }
}

export default Header;