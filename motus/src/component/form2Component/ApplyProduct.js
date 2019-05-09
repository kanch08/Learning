import React, {Component} from 'react';
import FilterVariable from './Filterandvariable';
import AnnualTax from './Annualtax';
import Payment from './Payment';
import DriverManagement from './DriverManagement';
import Fixedpaymentschedule from './Fixedpaymentschedule';
import { handleOnChange} from "./HandlingEvent";
import companyAction from '../form1Component/Action/companyAction';
import { connect } from 'react-redux';

class ApplyProduct extends Component {
    constructor(props){
        super(props);
        this.state = {
            key:1,
            fixedChecked: props.product.fixedandVariableBar || false,
            centChecked : props.product.centPerMile || false,
            techChecked : props.product.Technology || false,
        }
    }


    markCheckbox = (event) => {
        if((event.target.name) === "fixedandVariableBar"){

            this.setState({
                fixedChecked : !this.state.fixedChecked,
            })
        }
        else if((event.target.name) === "centPerMile"){
            this.setState({
                centChecked : !this.state.centChecked,
            })
        }
        else if((event.target.name) === "Technology"){
            this.setState({
                techChecked : !this.state.techChecked,
            })
        }
        const {companyAction} = this.props;
        companyAction({...this.state});
    }
    render(){
        const { product , companyAction } = this.props;
        const { fixedandVariableBar , centPerMile , Technology } = this.props.product;
        return(
            <div className="applyProduct">
                <div>
                    <h3>Enabled Products</h3>
                    <form>
                        <label className="container">
                            <p>Fixed and Variable Bar</p>
                            <input
                                type="checkbox"
                                onClick={this.markCheckbox}
                                name="fixedandVariableBar"
                                onChange = {(event) => handleOnChange(event,companyAction)}
                                checked={this.state.fixedChecked}
                            />
                            <span className="checkmark"></span>
                        </label>

                        {this.state.fixedChecked ?
                            <div>
                                <FilterVariable
                                    formName="fixedAndVariableForm"
                                />
                                <AnnualTax />
                            </div>
                            : ''
                        }

                        <label className="container">
                            <p>Cent Per Mile</p>
                            <input
                                type="checkbox"
                                onClick={this.markCheckbox}
                                name="centPerMile"
                                checked={this.state.centChecked}
                            />
                            <span className="checkmark"></span>
                        </label>
                        {this.state.centChecked ?
                            <FilterVariable
                                formName="centpermileForm"
                            />
                            : ''
                        }
                        <label className="container">
                            <p>Technology Only</p>
                            <input
                                type="checkbox"
                                onClick={this.markCheckbox}
                                name="Technology"
                                checked={this.state.techChecked}
                            />

                            <span className="checkmark"></span>
                        </label>
                        {
                            this.state.techChecked ?
                                <FilterVariable
                                    formName = "technologyForm"
                                />
                                : ''
                        }
                    </form>
                </div>
                {fixedandVariableBar ? <Payment/> : ''}
                {centPerMile ? <DriverManagement/> : ''}
                {Technology ? <Fixedpaymentschedule/> : ''}
            </div>

        )
    }
}

const mapStateToProps = (store) => {
    return{
        product:store.form1rootReducers.form1companyReducer
    }
}

const mapDispatchToProps = {
    companyAction
}

export default connect(mapStateToProps,mapDispatchToProps)(ApplyProduct);