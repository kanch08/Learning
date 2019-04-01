import React, { Component } from 'react';
import './main.css';


class fruitcart extends Component{
    constructor(props){
        super(props);
        this.state = {
            total:"",
            ...this.props,
        }
    }
   
    render(){
        const {items=[],increase,decrease} = this.props;
        console.log("Props Array",this.props);
        return(
                <div className="cart">

                    <table>
                    <tr>
                        <th>Fruit</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Amount</th>
                        <th>Add</th>
                        <th>Subtract</th>
                    </tr>
                        {
                            items.map((item) => {
                                return (
                                    <tr>
                                        <td>
                                        {item.name}
                                        </td>
                                        <td>
                                            {item.quantity}
                                        </td>
                                        <td>
                                            {item.price}
                                        </td>
                                        <td>
                                            {(item.quantity) * (item.price)}
                                        </td>
                                        <td>
                                            <button onClick={() => increase(item.id)}>+</button>
                                        </td>
                                        <td>
                                            <button onClick={() => decrease(item.id)}>-</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </table>
               <p> Total:   {
                                               
                                               items.reduce((accumulator,item)=>{
                                                   accumulator=accumulator+ (item.quantity*item.price);
                                                   return accumulator;
                                               },0)
                                           }</p>
                </div>
              )
          
    }
}

export default fruitcart;