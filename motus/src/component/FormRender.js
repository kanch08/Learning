import React , {Component} from 'react';
import NextButton from "./NextButton";
import ProgressBar from "./CarProgressBar";
import { RendenringForm } from "./RenderingForm";
import './stylesheet/index.scss';
import {HandleSubmit} from "./HandleSubmit";
import { connect } from 'react-redux';

class FormRender extends Component{
    constructor(props){
        super(props);
        this.state={
            formNumber : 1,
            progress:23,
            completed:"first",
            field : {},
            error : {},
        }
    }

    increaseFormNo=()=>{
        let nextProgress=this.state.progress + 26;
        let nextCompleted;
        if(nextProgress===52){
            nextCompleted="second"
        }
        else if(nextProgress===78){
            nextCompleted="third"
        }
        this.setState({
            formNumber:this.state.formNumber + 1 ,
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

    render(){
        return (
            <div className="FormRendering">
                <ProgressBar
                    formNumber = {this.state.formNumber}
                    progress={this.state.progress}
                    completed={this.state.completed}
                />
                <form onSubmit={HandleSubmit}>
                    <RendenringForm
                        formNumber = {this.state.formNumber}
                    />
                    <NextButton
                        decreaseFormNo={this.decreaseFormNo}
                        formNumber = { this.state.formNumber}
                        increaseFormNo={this.increaseFormNo}
                        field = { this.state.field }
                        error = { this.state.error }
                    />
                </form>
            </div>
        )
    }

}

const mapStateToProps = (store) => {
    return{
        formData : store.form1rootReducers.form1companyReducers
    }
}

export default connect(mapStateToProps)(FormRender);