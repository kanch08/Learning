import React , {Component } from 'react';
import RadioButton from './cartMenuComponent/RadioButton';
import '../stylesheet/radio.css';
import SelectSize from './cartMenuComponent/SelectSize';


class CartMenuOption extends Component{
    constructor(props){
        super(props);
        this.state = {
            displayColorButton : false,
            currentColor: 'red',
        }
    }

    colorButton = (event) => {
        event.stopPropagation();
        console.log("Color Button Function Called in CartMenuOption");

       // this.props.onRadioChange();
        this.setState({
            displayColorButton : !this.state.displayColorButton
        });
        console.log("ColorBUtton",event.target);
    }
    handleRadioChange=(e)=>{
        e.stopPropagation();
        this.props.onRadioChange(e);
    }
    render(){
        const {imageKeys} = this.props;
        let btn = this.state.displayColorButton ? "displayBlock" : "hideBlock";
        return(
            <div>
                <div className={`${btn} cartmenu`}>
                    <RadioButton
                        name={this.props.name}
                        colorButtonToggle = {this.colorButton}
                        imageKeys = { imageKeys }
                        onRadioChange ={this.handleRadioChange}
                    />
                </div>
                <div>
                    <SelectSize />
                </div>
                <div>
                    <button value="Add To Cart">Add To Cart</button>
                </div>
            </div>
        )
    }
}

export default CartMenuOption;