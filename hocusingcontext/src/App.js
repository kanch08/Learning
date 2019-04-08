import React, { Component } from 'react';
import AuthProvider from "./component/authprovider";
import ChildComp from './component/checkAuth';

class App extends Component {

  render() {
    return (
            <AuthProvider>
                <ChildComp />
            </AuthProvider>
    );
  }
}

export default App;