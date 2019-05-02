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
                            <li><p>(Required for this product)</p></li>
                        </ul>
                    </div>
                    <div>
                        <input type="checkbox" value="Vehicle Information" name="vehicleInformation" />
                        <ul>
                            <li>Vehicle Information</li>
                            <li><p>(Required for this product)</p></li>
                        </ul>
                    </div>
                    <div>
                        <input type="checkbox" value="Insurance Declaration" name="vehicleInformation" />
                        <ul>
                            <li>Motor Vehicle Records(MVR)</li>

                        </ul>
                    </div>
                </form>
            </div>
        )
    }
}

export default FilterVariable;