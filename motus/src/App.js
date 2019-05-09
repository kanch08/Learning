import React ,{ Component } from 'react';
import Header from './component/Header';
import FormRender from './component/FormRender';
import Footer from './component/Footer';

class App extends Component {

render(){
    return (
        <div className="App">
            <Header />

            <FormRender />
            <Footer/>
        </div>
    )
}

}
export default App;
