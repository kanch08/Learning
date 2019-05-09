import React , { Component } from 'react';
import DetailForm from './DetailForm';
import add from '../assets/add.png';

class Detail extends Component {
    getDrivedStateFromProps(prevProps,nextState) {
        //get no of forms from redux
        let noOfForms=3;
        for(let i=0;i<noOfForms;i++) {
            nextState.componentRender.push(DetailForm)
        }
    }

    constructor(props){
        super(props);
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
        }
    }
    handleDelete = (event) => {
        let index = this.state.componentRender.indexOf(<DetailForm/>,1);
        this.state.componentRender.splice(index);
        this.setState({
            formNumber: this.state.formNumber-1,
            componentRender:this.state.componentRender
        })
    }


    render(){
        return(
            <div className="detail">
                <ul className="progressHeading">
                    <li>First Name</li>
                    <li>Last Name</li>
                    <li>Email</li>
                    <li>Start Date</li>
                    <li>Finance Contact</li>
                </ul>
                <form>
                {
                    this.state.componentRender.map(item => {
                        return item;
                    })
                }
                </form>

                {
                    this.state.formNumber < 2 ?
                        <div className="addButtonWrapper">
                            <div className="addButton">
                                <img src={add} alt="add" onClick={this.handleClick} width="20px"/>
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