import React from 'react';
import CartContainer from './components/cartthumbnail/CartContainer';
import './components/stylesheet/main.css';
import cart from './components/assets/cart.svg';
import {BrowserRouter as Router , Route , NavLink} from "react-router-dom";
import CartItem from './components/itemlist/CartItem';


function App() {
    return (
        <Router>
            <div className="App">
                <div className="cart">
                    <NavLink to="/Cart">
                        <img
                            src={cart}
                            alt="cart"
                        />
                    </NavLink>
                </div>
                <div className="cartcontainer">
                    <Route
                        path="/cart"
                        component={CartItem}
                    />
                    <Route
                        exact path="/"
                        component={CartContainer}
                    />
                </div>
            </div>
        </Router>
    );
}

export default App;
