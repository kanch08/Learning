import React , { Component } from 'react';
import {handleOnChange} from './HandlingEvent';
import {connect} from 'react-redux';
import companyAction from './Action/companyAction';


class Company extends Component{
  
    render(){
        const {companyAction} = this.props;
        const {cName,cAlias}=this.props.company;
        return(
            <div className="company">
                <label>Company Name
                <input
                    onChange={(event)=>handleOnChange(event,companyAction)}
                    value={cName}
                    type="text"
                    name="cName"
                />
                </label>
                <label>Company Alias
                <input
                    onChange={(event)=>handleOnChange(event,companyAction)}
                    value={cAlias}
                    type="text"
                    name="cAlias"
                />
                </label>
            </div>
        )
    }
}
const mapStateToProps=(store)=>{
    return {
        company:store.form1rootReducers.form1companyReducer
    }
}
const mapDispatchToProps = {
    companyAction
}


export default connect(mapStateToProps,mapDispatchToProps)(Company);