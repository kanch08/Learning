import React, {Component} from 'react';
import companyAction from './Action/companyAction';
import { handleOnChange } from './handlingEvent';
import {connect} from 'react-redux';

class Country extends Component{

    render(){
        const {companyAction} = this.props;
        return(
            <div className="contact">
                <h2>Country</h2>
                <label>Country</label>
                <select name="countryName" onChange={(event)=>handleOnChange(event,companyAction)}>
                    <option value="">Select</option>
                    <option value="US"> United States</option>
                    <option value="UK">United Kingdom</option>
                    <option value="Europe">Europe</option>
                </select>
                <div className="billing">
                    <label>Billing Address Line 1</label>
                    <input type="text" name="Billing-Address-1"  onChange={(event)=>handleOnChange(event,companyAction)} placeholder="Street Address, PO, Box"/>
                    <label>Billing Address Line 2</label>
                    <input type="text" name="Billing-Address-2"  onChange={(event)=>handleOnChange(event,companyAction)} placeholder="Building Suite, Floor etc"/>
                    <label>City</label>
                    <input type="text" name="city" name="city"  onChange={(event)=>handleOnChange(event,companyAction)}/>
                    <label>Phone Number</label>
                    <input type="text" maxLength="10" name="Phone-Number"  onChange={(event)=>handleOnChange(event,companyAction)}/>
                </div>
            </div>
        )
    }
}



const mapStateToProps = (store) => {
    return {
        store
    };
}

const mapDispatchToProps = {
    companyAction
}

export default connect(mapStateToProps,mapDispatchToProps)(Country);