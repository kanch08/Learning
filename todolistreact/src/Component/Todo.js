import React,{Component} from 'react';
import Task from'./Task';
import './Todo.css';

export default class Todo extends Component{
    constructor(props) {
        super(props);
        this.state={
            taskString:[{
                value:''
            }],
            tempString:'',
            key:0
        }
    }
    valueChange=(event)=>{
        this.setState({
            tempString:event.target.value
        });
    }
    addItem=(event)=>{
        event.preventDefault();
        let newString=this.state.tempString;
        this.setState({
            tempString: '',
            taskString:[{str:newString}, ...this.state.taskString],
            key:++this.state.key
        })
        console.log(this.state.taskString);
    };

    delete=(index)=>{
        const newTask = this.state.taskString.filter((data, i)=>{
            console.log('index', index)
            return (index !== i)
        })
        console.log("newTask", newTask)
        this.setState({
            taskString:newTask
        })
    }


    render() {
        return(
            <div className='inputContainer'>
                <h3>To-Do App</h3>
                <form onSubmit={(event)=>this.addItem(event)}>
                    <input type={'text'}
                           placeholder={'Enter task to be in list'}
                           name={'task'}
                           onChange={this.valueChange}
                           value={this.state.tempString}/>
                    <button type={'submit'}>Add</button>
                </form>
                <Task str={this.state.taskString} index={this.state.key} remove={this.delete}/>
            </div>
        )
    }
}