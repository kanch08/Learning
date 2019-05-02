import React , { Component } from 'react';
import {handleOnChange} from './handlingEvent';
import {connect} from 'react-redux';
import companyAction from './Action/companyAction';


class Company extends Component{
  
    render(){
        const {companyAction} = this.props;
        return(
            <div className="company">
                <label>Company Name</label>
                <input onChange={(event)=>handleOnChange(event,companyAction)} type="text" name="cName" placeholder="Enter Company Name"/>
                <label>Company Alias</label>
                <input onChange={(event)=>handleOnChange(event,companyAction)} type="text" name="cAlias" placeholder="Enter Company Name"/>
            </div>
        )
    }
}
const mapStateToProps=(store)=>{
    return {
        store
    }
}
const mapDispatchToProps = {
    companyAction
}


export default connect(mapStateToProps,mapDispatchToProps)(Company);