import React, {Component} from 'react';


class DriverManagement extends Component{
    render(){
        return(
            <div className="payment applyProduct">
                <form>
                    <div className="driver">
                        <h3>Driver Management</h3>
                        <p>
                            <input type="radio" id="drive1" name="driver-group" value="Self-Service"  required="required"/>
                            <label htmlFor="drive1">Self-Service</label>
                        </p>
                        <p>
                            <input type="radio" id="drive2" name="driver-group"  value="HRIS Feed" required="required"/>
                            <label htmlFor="drive2">HRIS Feed</label>
                        </p>
                        <p>
                            <input type="radio" id="drive3" name="driver-group" value="Motus API" required="required"/>
                            <label htmlFor="drive3">Motus API</label>
                        </p>
                    </div>

                </form>
            </div>
        )
    }
}

export default DriverManagement;