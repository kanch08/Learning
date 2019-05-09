import React ,{ Component } from 'react';
import { handleOnChange} from "./HandlingEvent";
import companyAction from '../form1Component/Action/companyAction';
import { connect } from 'react-redux';

class FilterVariable extends Component {
    render(){
        const { companyAction ,formName} = this.props;
        const {InsuranceDeclaration,vehicleInformation,MotorVehicleRecords}=this.props.product;
        const {product}=this.props;
        console.log("trying to print product",product[formName+"_InsuranceDeclaration"])
        return(
            <div className="fixedVariableRate">
                <h5>Select Required Forms : </h5>
                <div>
                    <label htmlFor="container" className="container">
                        <input
                            type="checkbox"
                            id="container"
                            value="Insurance Declaration"
                            defaultChecked={product[formName+"_InsuranceDeclaration"]==="Insurance Declaration" ?true : false}
                            required="required"
                            onChange={(event)=>handleOnChange(event,companyAction)}
                            name={formName + "_InsuranceDeclaration"}
                        />
                        <span className="checkmark"></span>
                        <ul>
                            <li>Insurance Declaration</li>
                            <li>
                                <p>(Required for this product)</p>
                            </li>
                        </ul>
                    </label>
                </div>
                <div>
                    <label htmlFor="vehicle"  className="container">
                        <input
                            type="checkbox"
                            value="Vehicle Information"
                            defaultChecked={vehicleInformation ? true : false}
                            required="required"
                            id="vehicle"
                            onChange={(event)=>handleOnChange(event,companyAction)}
                            name={formName + "_vehicleInformation"}
                        />
                        <span className="checkmark"></span>
                        <ul>
                            <li>Vehicle Information</li>
                            <li>
                                <p>(Required for this product)</p>
                            </li>
                        </ul>
                    </label>
                </div>
                <div>
                    <label htmlFor="motor" className="container">
                        <input
                            id="motor"
                            type="checkbox"
                            value="Motor Vehicle Records(MVR)"
                            defaultChecked={MotorVehicleRecords ? true : false}
                            required="required"
                            onChange={(event)=>handleOnChange(event,companyAction)}
                            name = {formName + "_MotorVehicleRecords"}
                        />
                        <span className="checkmark"></span>
                        <ul>
                            <li>Motor Vehicle Records(MVR)</li>

                        </ul>
                    </label>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        product: store.form1rootReducers.form1companyReducer
    }
}

const mapDispatchToProps =  {
    companyAction
}

export default connect(mapStateToProps,mapDispatchToProps)(FilterVariable);