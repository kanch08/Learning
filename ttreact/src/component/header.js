import React, { Component } from 'react';
import './css/main.css'
 
class header extends Component{
    
    render(){
        return (
           
            <header>
            <p>Header Section</p>
            <span>{this.props.counter}</span>
        </header>
        )
    }
}

export default header;