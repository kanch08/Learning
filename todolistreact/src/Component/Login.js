import React,{Component} from 'react';
import { withRouter } from 'react-router';
import './Todo.css';
class Login extends Component{
    state=  {
        user:"Test",
        pass:'Test',
        temp_u: "",
        temp_p:"",
        valid:0


    }

    onHandleChange=(event)=>{
        this.setState({
            temp_u:event.target.value

        });
    };
    passInput=(event)=>{
        this.setState({
            temp_p:event.target.value
        })
    }


    onLogin=(event)=>{
        event.preventDefault();
        const { user, temp_u,pass,temp_p} = this.state;

        const u_matches = user === temp_u;

        const p_matches= pass===temp_p;

        u_matches && p_matches?this.setState({valid:true}):alert("Username or Password may be Incorrect");
        this.props.history.push('/todo')

        console.log(this.props);
    }

    render() {
        return(
            <div className="login">
                <h1>
                    Login Here
                </h1>
                <form onSubmit={(event)=>this.onLogin(event)} className={'loginForm'}>
                    <label>Enter Username</label>
                    <input type={'text'}
                           placeholder={"Username"}
                           name={"username"}
                           onChange={this.onHandleChange}
                    />
                    <label>Enter Password</label>
                    <input type={'password'}
                           placeholder={'Password'}
                           name={"password"}
                           onChange={this.passInput}
                    />
                    <button type={'submit'}>Login</button>
                </form>
                <p>Username is Test</p>
                <p>Password is Test</p>
            </div>
        )
    }
}

export default withRouter(Login);