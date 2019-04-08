import React , { Component } from 'react';
import SetContext from './setcontext';
import AddAuth from './addauth';

class CheckAuth extends Component{
    render(){
        return(
            <div>
                <h1>Authentication Checked through Child { this.props.isAuthenticated.toString()}</h1>
            </div>
        )
    }
}

CheckAuth.contextType = SetContext;
export default AddAuth(CheckAuth);