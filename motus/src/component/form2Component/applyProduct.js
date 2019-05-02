import React, {Component} from 'react';
import FilterVariable from './filterandvariable';
import AnnualTax from './annualtax';
import Payment from './payment';
class ApplyProduct extends Component {
    constructor(){
        super();
        this.state = {
            fixedChecked: false,
            centChecked : false,
            techChecked : false,
        }
    }

    markCheckbox = (event) => {
        console.log("Event Name############## " ,event.target.name);
        if((event.target.name) == "fixedandVariableBar"){
            this.setState({
                fixedChecked : !this.state.fixedChecked,
            })
        }
        else if((event.target.name) == "centPerMile"){
            this.setState({
                centChecked : !this.state.centChecked,
            })
        }
        else if((event.target.name) == "technology"){
            this.setState({
                techChecked : !this.state.techChecked,
            })
        }

        console.log("Checked Value " ,this.state.centChecked);
    }


    render(){
        return(
            <div className="applyProduct">
                <div>
                    <h3>Enabled Products</h3>
                    <form>
                        <label className="container">
                            <p>Fixed and Variable Bar</p>
                            <input type="checkbox" onClick={this.markCheckbox} name="fixedandVariableBar" />

                            <span className="checkmark"></span>
                        </label>
                        {this.state.fixedChecked ?<div> <FilterVariable/> <AnnualTax /></div>: ''}
                        <label className="container">
                            <p>Cent Per Mile</p>
                            <input type="checkbox" onClick={this.markCheckbox} name="centPerMile" />
                            <span className="checkmark"></span>
                        </label>
                        {this.state.centChecked ? <FilterVariable/> : ''}
                        <label className="container">
                            <p>Technology Only</p>
                            <input type="checkbox" onClick={this.markCheckbox} name="technology" />

                            <span className="checkmark"></span>
                        </label>
                        {this.state.techChecked ? <FilterVariable/> : ''}
                    </form>
                </div>



                <Payment />


                
            </div>

        )
    }

}

export default ApplyProduct;