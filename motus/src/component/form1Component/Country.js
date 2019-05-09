import React, {Component} from 'react';
import companyAction from './Action/companyAction';
import { handleOnChange } from './HandlingEvent';
import {connect} from 'react-redux';

class Country extends Component{

    render(){
        const {companyAction} = this.props;
        const { BillingAddress1 , BillingAddress2 , city , PhoneNumber} = this.props.company;
        return(
            <div className="country account">
                <h2>Contact Information</h2>
                <label htmlFor="countryname">Country
                    <select name="countryName" id="countryname" onChange={(event)=>handleOnChange(event,companyAction)}>
                        <option value="">Select</option>
                        <option value="US"> United States</option>
                        <option value="UK">United Kingdom</option>
                        <option value="Europe">Europe</option>
                    </select>
                </label>
                <div className="billing">
                    <label htmlFor="billing1">Billing Address Line 1
                        <input
                            type="text"
                            id="billing1"
                            name="BillingAddress1"
                            value={BillingAddress1}
                            onChange={(event)=>handleOnChange(event,companyAction)}
                            placeholder="Street Address, PO, Box"
                        />
                    </label>
                    <label htmlFor="billing2">Billing Address Line 2
                        <input
                            type="text"
                            id="billing2"
                            name="BillingAddress2"
                            value={BillingAddress2}
                            onChange={(event)=>handleOnChange(event,companyAction)}
                            placeholder="Building Suite, Floor etc"
                        />
                    </label>
                    <label htmlFor="city">City
                        <input
                            type="text"
                            id="city"
                            name="city"
                            value={city}
                            onChange={(event)=>handleOnChange(event,companyAction)}
                        />
                    </label>
                    <label htmlFor="phonenumber">Phone Number
                        <input
                            type="text"
                            id="phonenumber"
                            maxLength="10"
                            name="PhoneNumber"
                            value={PhoneNumber}
                            onChange={(event)=>handleOnChange(event,companyAction)}
                        />
                    </label>
                </div>
            </div>
        )
    }
}



const mapStateToProps = (store) => {
    return {
        company:store.form1rootReducers.form1companyReducer
    };
}

const mapDispatchToProps = {
    companyAction
}

export default connect(mapStateToProps,mapDispatchToProps)(Country);