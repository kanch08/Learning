import React , { Component } from 'react';
import DetailForm from './detailForm';

class Detail extends Component {
    constructor(){
        super();
        this.state={
            formNumber:0,
            componentRender:[<DetailForm/>]
        }
    }
    handleClick=()=>{
        const { formNumber , componentRender} = this.state;
        componentRender.push(<div><DetailForm formNumber={formNumber + 1} handleDelete={event => this.handleDelete(event)}/></div>)
        if(formNumber <2){
            this.setState({
                formNumber: formNumber + 1,
                componentRender
            })
            console.log("componentRender",componentRender);
        }
    }
    handleDelete = (event) => {
        let componentArray = [...this.state.componentRender];
        let index = this.state.componentRender.indexOf(<DetailForm/>,1);
        this.state.componentRender.splice(index);
        this.setState({
            formNumber: this.state.formNumber-1,
            componentRender:this.state.componentRender
        })
        console.log("Component Render Updated Index",this.state.componentRender.length)
    }


    render(){
        console.log('this >>> ' , this.state.componentRender);
        return(
            <div className="detail">
                <ul className="progressHeading">
                    <li>First Name</li>
                    <li>Last Name</li>
                    <li>Email</li>
                    <li>Start Date</li>
                    <li>Finance Contact</li>
                </ul>

                {
                    this.state.componentRender.map(item => {
                        return item;
                    })
                }

                {
                    this.state.formNumber < 2 ?
                        <div className="addButtonWrapper">
                            <div className="addButton">
                                <button
                                    onClick={this.handleClick}
                                >+
                                </button>
                            </div>
                        </div>
                        :
                        ''
                }


            </div>
        )
    }
}

export default Detail;