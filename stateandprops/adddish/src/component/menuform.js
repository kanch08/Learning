import React,{Component} from 'react';

class AddDish extends Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            desc:'',
            price:'',
            status:'',
        }
    }

   handleOnChange = (event) => {
               
        //    let newDish={};
        //     newDish[event.target.name]=event.target.value;
            
            //console.log(newDish);
            this.setState({
                [event.target.name]:event.target.value,
            });
  
  
    }
    
    render(){
        return(
            <div className="add_dish">
            <form className="add_dish_form" onSubmit={(event)=>this.props.handleAddDish(event,this.state)}> 
             <label>name</label>
             <input onChange={this.handleOnChange} type="text"  name="name"/>
             <label>description</label>
             <input onChange={this.handleOnChange} type="text"  name="desc"/>
             <label>price</label>
             <input  onChange={this.handleOnChange} type="text" name="price"/> 
             <label>status</label>
             <input onChange={this.handleOnChange} type="text"  name="status"/>
             <input  type="submit"/>
             </form>
           </div>
        );

    }
}
export default AddDish;