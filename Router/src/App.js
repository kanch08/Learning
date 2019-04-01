import React, { Component } from 'react';
import Form from './component/form';
import Books from './component/books';
import { withRouter, Route , Redirect , Switch} from 'react-router-dom';
import './component/main.css';

class App extends Component {
  constructor(props){
    super(props); 
   /* this.books = [
      {id:1,name:'Fault in our Stars',author:'John Green',price:300,category:'motivation'},
      {id:2,name:'Story of my life',author:'Stephen Hawking',price:400,category:'innovating'},
      {id:3,name:'In Heaven',author:'William blake',price:500,category:'Horror Story'},
      {id:4,name:'five point Someone',author:'Chetan Bhagat',price:550,category:'Inspirational'},
    ];*/
      this.state = {
          isAuthenticate: !true,
          userName:"Test",
          password:"Test",
         // component:{User},
      }
  }
  handleSubmit = (item) => {
    const {userName,password} = this.state;
    if(item.username === userName && item.password === password){
      console.log('#############')
      this.setState({
        isAuthenticate : true,
      }, () => {
        this.props.history.push('/books')
      });
    }
    else{
      this.setState({
        isAuthenticate : false,
      });
    }//else statement terminate
  }//handleSubmit function terminate

  toggleAuthenticate = () => {
    this.setState({
      isAuthenticate: !this.state.isAuthenticate,
    })
  }

  // componentDidMount(){
  //   const {match : { params }} = this.initialState.Username;
  // }
  render() {
    return (
      <div>
          <Switch>
            <PrivateComponent 
              path="/books"
              isAuthenticate={this.state.isAuthenticate}
              component={Books}
            />
            <Route 
              path="/Form"
              render= {() => (<Form handleSubmit={this.handleSubmit} />)}
            />
            <Route 
              exact
              path = "/"
              render={() => 
                <div>
                  <p>Books will be displayed after logging in</p>
                  <Form handleSubmit={this.handleSubmit} />
                </div>
              }
            />
          </Switch>
        
      </div>
    );
  }
}

export default withRouter(App);
//const isAuthenticated = !true;
const PrivateComponent = ({ component: Component,isAuthenticate, ...rest }) => (
  <Route
  {...rest} 
  render = { props => (
    isAuthenticate ? (
      <Component {...props} /> 
    ) : (
      <Redirect
       to={
            {
              pathname: '/Form',
              state: isAuthenticate
            }
          }
      />
        )
    )   
  }
  />
)

