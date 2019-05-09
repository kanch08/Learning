import React, {Component} from 'react';


class Fixedpaymentschedule extends Component{
    render(){
        return(
            <div className="payment applyProduct">
                <form>
                        <div className="driver">
                            <h3>Fixed Payment Schedule</h3>
                            <span>Applies to Fixed & Variable Rate product only.</span>
                            <p>
                                <input type="radio" id="pay1" value="Prior Month" name="payment-group"  required="required"/>
                                <label htmlFor="pay1">Prior Month(Arrears)</label>
                            </p>
                            <p>
                                <input type="radio" id="pay2" value="Current Month(Upfront)" name="payment-group"  required="required"/>
                                <label htmlFor="pay2">Current Month(Upfront)</label>
                            </p>
                        </div>
                    </form>
            </div>
        )
    }
}

export default Fixedpaymentschedule;