import React , {Component} from 'react';
import { connect } from 'react-redux';
import companyAction from '../form1Component/Action/companyAction';
import {handleOnChange} from './HandlingEvent';

class Annualtax extends Component{
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
                <div className="payment">
                    <p>
                        <input
                            type="radio"
                            name="month"
                            value="November"
                            id="nov"
                            onClick={(event) => handleOnChange(event,companyAction)}
                        />
                        <label htmlFor="nov">November</label>
                    </p>
                    <p>
                        <input
                            type="radio"
                            name="month"
                            id="dec"
                            value="December"
                            onClick={(event) => handleOnChange(event,companyAction)}
                        />
                        <label htmlFor="dec">December</label>
                    </p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return{
        companyAction:store
    }
}
const mapDispatchToProps = {
    companyAction
}

export default connect(mapStateToProps,mapDispatchToProps)(Annualtax);