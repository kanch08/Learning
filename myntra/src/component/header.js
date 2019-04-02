import React,{Component} from 'react';
import Menu from './header_component/menu';
import './header_component/stylesheet/header.css';

class Header extends Component{
    render(){
        return(
            <header>
                <div>
                    <Menu />
                </div>
            </header>
            

        )
    }
}

export default Header;