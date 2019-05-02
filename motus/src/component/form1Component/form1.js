import React , {Component} from 'react';
import Account from './account';
import Country from './country';
import Company from './company';

class DemoCompanyForm extends Component{
    render(){
        return(
            <div className="form">
                <form>
                    <Company/>
                    <Account />
                    <Country/>
                </form>
            </div>
        )
    }
    
}
export default DemoCompanyForm;