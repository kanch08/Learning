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
                                <input type="radio" id="test1" name="radio-group" />
                                <label htmlFor="test1">Direct Deposit</label>
                            </p>
                            <p>
                                <input type="radio" id="test2" name="radio-group" />
                                <label htmlFor="test2">Concur</label>
                            </p>
                            <p>
                                <input type="radio" id="test3" name="radio-group" />
                                <label htmlFor="test3">Payroll File</label>
                            </p>
                        </div>
                        <div className="driver">
                            <h3>Driver Management</h3>
                            <p>
                                <input type="radio" id="drive1" name="driver-group" />
                                <label htmlFor="drive1">Self-Service</label>
                            </p>
                            <p>
                                <input type="radio" id="drive2" name="driver-group" />
                                <label htmlFor="drive2">HRIS Feed</label>
                            </p>
                            <p>
                                <input type="radio" id="drive3" name="driver-group" />
                                <label htmlFor="drive3">Motus API</label>
                            </p>
                        </div>
                        <div className="driver">
                            <h3>Fixed Payment Schedule</h3>
                            <span>Applies to Fixed & Variable Rate product only.</span>
                            <p>
                                <input type="radio" id="pay1" name="payment-group" />
                                <label htmlFor="pay1">Prior Month(Arrears)</label>
                            </p>
                            <p>
                                <input type="radio" id="pay2" name="payment-group" />
                                <label htmlFor="pay2">Current Month(Upfront)</label>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Payment;