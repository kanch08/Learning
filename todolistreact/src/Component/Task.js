import React,{Component} from 'react';
import './taskstyle.css';


export default class Task extends Component{
    render(){
        const {str} = this.props;
        return(
            <div className={'taskcontainer'}>
                {str.map((data, i) =>
                    <div className={'todoTask'}>
                        {data.str}
                        <button className={'buttonDel'}
                                onClick={()=>this.props.remove(i)} >X</button>
                    </div>)
                }
            </div>
        )
    }


}