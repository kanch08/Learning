import React,{Component} from 'react';
import {Redirect} from "react-router-dom";
import "./main.css";

class Form extends Component{
    constructor(props){
        super(props);
        this.state = {
            username:"",
            password:"",
        }
    };
    handleChange = event => {
        this.setState({
            ...this.state,
            [event.target.name]:event.target.value
        });
    }
    render() {
        const {isAuthenticate, handleSubmit } = this.props;
        if(isAuthenticate){
            return <Redirect to="/books" />
        }
        return(
            <div>
                <form name="login">
                <label>Enter Username</label>
                <input 
                type="text" 
                name="username" 
                placeholder="Enter Username" 
                onChange={this.handleChange} 
                value={this.state.username}
                /><br/>
                <label> Enter Password   </label>
                <input 
                type="password" 
                name="password" 
                placeholder="Enter Password"  
                onChange={this.handleChange}
                value={this.state.password}
                /><br/>
                <input type="button" value="Submit" onClick={() => handleSubmit(this.state)}/>
                </form>
                <br/>

                <p>Username is Test</p>
                <p>Password is Test</p>
            </div>
            
        )
    }
}
export default Form;