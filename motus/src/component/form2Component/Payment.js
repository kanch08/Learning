import React, {Component} from 'react';
import { handleOnChange } from "./HandlingEvent";
import {companyAction} from './Action/productAction';
import { connect } from 'react-redux';

class Payment extends Component{
    render(){
        return(
            <div className="payment applyProduct">
                <div className="driver">
                    <h3>Payment Method</h3>
                    <span>
                        Applies to Fixed  & Rate
                        and Cents per Mile products only.
                     </span>
                    <form>
                        <div className="driver">
                            <p>

                                <input
                                    type="radio"
                                    onClick={(event) => handleOnChange(event,companyAction)}
                                    id="test1"
                                    value="Direct Deposit"
                                    name="radio-group"
                                    required="required"
                                />
                                <label htmlFor="test1">
                                    Direct Deposit
                                </label>
                            </p>
                            <p>
                                <input
                                    type="radio"
                                    onClick={(event) => handleOnChange(event,companyAction)}
                                    id="test2"
                                    value="Concur"
                                    name="radio-group"
                                    required="required"
                                />
                                <label htmlFor="test2">
                                    Concur
                                </label>

                            </p>
                            <p>

                                <input
                                    type="radio"
                                    onClick={(event) => handleOnChange(event,companyAction)}
                                    value="Payroll File"
                                    id="test3"
                                    name="radio-group"
                                    required="required"
                                />
                                <label htmlFor="test3">
                                    Payroll File
                                </label>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return{
        company:store.form1rootReducers.form1companyReducer
    };
}

const mapDispatchToProps = () => ({
    companyAction
})

export default connect(mapStateToProps,mapDispatchToProps())(Payment);