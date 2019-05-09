import React, {Component} from 'react';
import { handleOnChange } from './HandlingEvent';
import {connect} from 'react-redux';
import companyAction from './Action/companyAction';

class Account extends Component{
    render(){
        const {companyAction} = this.props;
        const { industry , accountManager , date} = this.props.company;
        return(
            <div className="account">
                <h2>Account Information</h2>
                <label>
                    Industry
                    <select name="industry" value={industry} onChange={(event)=>handleOnChange(event,companyAction)}>
                        <option value="">Select</option>
                        <option value="ParleG"> ParleG</option>
                        <option value="BMW">BMW</option>
                        <option value="patanjali">Patanjali</option>
                    </select>
                </label>
                <label>Account Manager
                    <select name="accountManager" value={accountManager} onChange={(event)=>handleOnChange(event,companyAction)}>
                        <option value="">Select</option>
                        <option value="a1"> ParleG</option>
                        <option value="BMWa2">BMW</option>
                        <option value="patanjalia3">Patanjali</option>
                    </select>
                </label>
                <label>
                    Start Date<br/>
                    <input type="date" name="date" value={date} onChange={(event)=>handleOnChange(event,companyAction)}/>
                </label>
            </div>

        )
    }

}
const mapStateToProps=(store)=>{
    return {
        company:store.form1rootReducers.form1companyReducer
    }
}
const mapDispatchToProps = {
    companyAction
}


export default connect(mapStateToProps,mapDispatchToProps)(Account);