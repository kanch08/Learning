import React , { Component } from 'react';

import SetContext from './setcontext';

export default (WrappedComponent) => {
    return  class AuthHoc extends Component{
        static contextType = SetContext;

        render(){
            return(
                <WrappedComponent
                    {...this.props}
                    type={this.context.type}
                    isAuthenticated={this.context.isAuthenticated}
                />
            )
        }
    }

}