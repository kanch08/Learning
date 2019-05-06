import React , {Component} from 'react';
import DemoCompanyForm from "./form1Component/form1";
import NextButton from "./footerButton";
import ApplyProduct from './form2Component/applyProduct';
import Detail from './form3Component/Detail';
import CarProgress from "./carprogress";


class FormRender extends Component{
    constructor(props){
        super(props);
        this.state={
            formNumber : 1,
            progress:26,
            completed:"first"
        }
    }


    increaseFormNo=()=>{
        console.log("increase form no called")
        let nextProgress=this.state.progress+26;
        let nextCompleted;
        if(nextProgress===52){
            nextCompleted="second"
        }
        else if(nextProgress===78){
            nextCompleted="third"
        }
        this.setState({
            formNumber:++this.state.formNumber,
            progress:nextProgress,
            completed:nextCompleted
        })
    }

    decreaseFormNo=()=>{
        let prevProgress=this.state.progress-26;
        let prevCompleted;
        if(prevProgress===52){
            prevCompleted="second"
        }
        else if(prevProgress===26){
            prevCompleted="first"
        }
        this.setState({
            formNumber:this.state.formNumber-1,
            progress:prevProgress,
            completed:prevCompleted
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
            return <Detail />
        }
        else{
            return <DemoCompanyForm/>
        }
    }



    render(){
        return (
            <div className="App">
                <CarProgress progress={this.state.progress} completed={this.state.completed} />
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