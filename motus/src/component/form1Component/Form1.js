import React , {Component} from 'react';
import Account from './Account';
import Country from './Country';
import Company from './Company';

class DemoCompanyForm extends Component{
    render(){
        return(
            <div className="form1">
                <div className="formRendering">
                    <p className="demoCompany">
                        <label className="demo">
                            <input type="checkbox"/>
                            This is a demo Company
                        </label>
                    </p>
                </div>
                <div className="form">
                    <form>
                        <Company/>
                        <Account />
                        <Country/>
                    </form>
                </div>
            </div>
        )
    }

}
export default DemoCompanyForm;