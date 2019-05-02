import React ,{ Component } from 'react';
import Header from './component/header';
import FormRender from './component/formRender';


class App extends Component {
   
render(){
    return (
        <div className="App">
            <Header />
            <FormRender />

        </div>
    )
}

}
export default App;
