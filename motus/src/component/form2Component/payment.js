import React, {Component} from 'react';


class Payment extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="payment applyProduct">
                <div className="driver">
                    <h3>Payment Method</h3>
                    <span>
                            Applies to Fixed  & Rate
                            and Cents per Mile products only.
                        </span>
                    <form>
                        <div className="driver">
                            <p>
                                <input type="radio" id="test1" value="Direct Deposit" name="radio-group"  required="required"/>
                                <label htmlFor="test1">Direct Deposit</label>
                            </p>
                            <p>
                                <input type="radio" id="test2" value="Concur" name="radio-group"  required="required"/>
                                <label htmlFor="test2">Concur</label>
                            </p>
                            <p>
                                <input type="radio" value="Payroll File" id="test3" name="radio-group"  required="required"/>
                                <label htmlFor="test3">Payroll File</label>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Payment;