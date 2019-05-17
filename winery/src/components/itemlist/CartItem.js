import React , {Component} from 'react';
import '../stylesheet/tableItem.css';
import { connect } from 'react-redux';

class CartItem extends Component{
    render(){
        const {label} = this.props.label;
        return(
            <div className="cartItem">
                <table>
                    <thead>
                    <tr>
                        <th>item</th>
                        <th>quantity</th>
                        <th colSpan="2">Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>CELL</td>
                    </tr>
                    <tr>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>CELL</td>
                    </tr>
                    <tr>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>Cell</td>
                        <td>CELL</td>
                    </tr>
                    </tbody>
                </table>
                <div className="tableButton">
                {
                    this.props.label.map(item =>{
                        return(
                            <label>
                                <button>{item}</button>
                            </label>
                        )
                    })
                }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        label : state.reducer.label
    }
}


export default connect(mapStateToProps,'')(CartItem);