import React , {Component} from 'react';
import DemoCompanyForm from "./form1Component/form1";
import NextButton from "./footerButton";
import ApplyProduct from './form2Component/applyProduct';


class FormRender extends Component{
    constructor(){
        super();
        this.state={
            formNumber : 1
        }
    }

    increaseFormNo=()=>{
        console.log("increase form no called")
        this.setState({
            formNumber:++this.state.formNumber
        })
    }

    decreaseFormNo=()=>{
        this.setState({
            formNumber:this.state.formNumber-1
        })
    }
    FormRendering = () => {
        console.log('formRendering Function')


        if(this.state.formNumber === 1){
            return <DemoCompanyForm />
        }
        else if(this.state.formNumber === 2){
            return <ApplyProduct />
        }
        else if(this.state.formNumber === 3){
            return <DemoCompanyForm />
        }
        else{
            return <DemoCompanyForm/>
        }
    }



    render(){
        return (
            <div className="App">
                <this.FormRendering/>

                <NextButton
                    decreaseFormNo={this.decreaseFormNo}
                  //  FormRendering={this.FormRendering}
                    increaseFormNo={this.increaseFormNo}

                />
            </div>
        )
    }

}

export default FormRender;