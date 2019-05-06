import React ,{ Component } from 'react';
import Header from './component/header';
import FormRender from './component/formRender';
import ApplyProduct from './component/form2Component/applyProduct';
import Footer from './component/footer';

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
