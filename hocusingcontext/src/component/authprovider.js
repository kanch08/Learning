import React, {Component} from 'react';

import SetContext from './setcontext';

 class AuthProvider extends Component{

    render(){
        return(
            <SetContext.Provider value={{isAuthenticated : true}} >
                {this.props.children}
            </SetContext.Provider>
        )
    }
}

export default AuthProvider;