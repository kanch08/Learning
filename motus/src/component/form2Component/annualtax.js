import React , {Component} from 'react';
import { connect } from 'react-redux';
import companyAction from '../form1Component/Action/companyAction';
import {handleOnChange} from './handlingEvent';

class AnnualTax extends Component{
    render(){
        const { companyAction } = this.props;
        return(
            <div className="annualTax">
                <p>How often should we calculate incurred tax?</p>
                <select name="tax" onChange={(event) => handleOnChange(event,companyAction)}>
                    <option value="Annually">Annually</option>
                    <option value="Quaterly">Quaterly</option>
                    <option value="Monthly">Monthly</option>
                </select>
                <h5>What month does tax reporting start?</h5>
                <p><input type="radio" name="month" value="November"  onClick={(event) => handleOnChange(event,companyAction)}/>November </p>
                <p><input type="radio" name="month" value="December"  onClick={(event) => handleOnChange(event,companyAction)}/>December </p>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return store;
}
const mapDispatchToProps = {
    companyAction
}

export default connect(mapStateToProps,mapDispatchToProps)(AnnualTax);