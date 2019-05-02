import React , {Component} from 'react';

class AnnualTax extends Component{
    render(){
        return(
            <div className="annualTax">
                <p>How often should we calculate incurred tax?</p>
                <select name="tax">
                    <option value="Annually">Annually</option>
                    <option value="Quaterly">Quaterly</option>
                    <option value="Monthly">Monthly</option>
                </select>
                <h5>What month does tax reporting start?</h5>
                <p><input type="radio" name="month" value="November" />November </p>
                <p><input type="radio" name="month" value="December" />December </p>
            </div>
        )
    }
}

export default AnnualTax;