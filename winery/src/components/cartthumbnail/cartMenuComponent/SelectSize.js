import React , { Component } from 'react';


class SelectSize extends Component{
    render(){
        return(
            <select>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
            </select>
        )
    }
}

export default SelectSize;