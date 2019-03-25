import React,{Component} from 'react'
import './css/main.css';

class main extends Component{
    render(){
        return(
            <main>
                <p>This is main Content</p>
                <button onClick={this.props.function}>Click Me!</button>
            </main>
        )
    }
}

export default main;