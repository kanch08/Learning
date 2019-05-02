import React ,{ Component } from 'react';

class FilterVariable extends Component {
    render(){
        return(
            <div className="fixedVariableRate">
                <form>
                    <h5>Select Required Forms : </h5>
                    <div>
                        <input type="checkbox" value="Insurance Declaration" name="fixedVariable" />
                        <ul>
                            <li>Insurance Declaration</li>
                            <li>(Required for this product)</li>
                        </ul>
                    </div>
                    <div>
                        <input type="checkbox" value="Vehicle Information" name="vehicleInformation" />
                        <ul>
                            <li>Vehicle Information</li>
                            <li>(Required for this product)</li>
                        </ul>
                    </div>
                    <div>
                        <input type="checkbox" value="Insurance Declaration" name="vehicleInformation" />
                        <ul>
                            <li>Motor Vehicle Records(MVR)</li>

                        </ul>
                    </div>
                    <h5>How often should we calculate incurred tax?
                    </h5>
                    <select name="tax">
                        <option value="Annually">Annually</option>
                        <option value="Quaterly">Quaterly</option>
                        <option value="Monthly">Monthly</option>
                    </select>
                    <h5>What month does tax reporting start?</h5>
                </form>
            </div>
        )
    }
}