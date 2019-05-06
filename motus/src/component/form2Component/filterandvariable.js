import React ,{ Component } from 'react';
import { handleOnChange} from "../form2Component/handlingEvent";
import companyAction from '../form1Component/Action/companyAction';
import { connect } from 'react-redux';

class FilterVariable extends Component {
    render(){
        const {InsuranceDeclaration,vehicleInformation,MotorVehicleRecords}=this.props.product;
        const { companyAction } = this.props;
        return(
            <div className="fixedVariableRate">
                <form>
                    <h5>Select Required Forms : </h5>
                    <div>
                        <input type="checkbox" value="Insurance Declaration" defaultChecked={InsuranceDeclaration ? true : false}  required="required" onChange={(event)=>handleOnChange(event,companyAction)}  name="InsuranceDeclaration" />
                        <ul>
                            <li>Insurance Declaration</li>
                            <li><p>(Required for this product)</p></li>
                        </ul>
                    </div>
                    <div>
                        <input type="checkbox" value="Vehicle Information" defaultChecked={vehicleInformation ? true : false}  required="required" onChange={(event)=>handleOnChange(event,companyAction)}  name="vehicleInformation" />
                        <ul>
                            <li>Vehicle Information</li>
                            <li><p>(Required for this product)</p></li>
                        </ul>
                    </div>
                    <div>
                        <input type="checkbox" value="Motor Vehicle Records(MVR)"  defaultChecked={MotorVehicleRecords ? true : false} required="required" onChange={(event)=>handleOnChange(event,companyAction)}  name="MotorVehicleRecords" />
                        <ul>
                            <li>Motor Vehicle Records(MVR)</li>

                        </ul>
                    </div>
                </form>
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