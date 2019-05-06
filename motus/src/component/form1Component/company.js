import React , { Component } from 'react';
import {handleOnChange} from './handlingEvent';
import {connect} from 'react-redux';
import companyAction from './Action/companyAction';


class Company extends Component{
  
    render(){
        const {companyAction} = this.props;
        console.log("printing props in company product",this.props)
        const {cName,cAlias}=this.props.company;
        return(
            <div className="company">
                <label>Company Name</label>
                <input onChange={(event)=>handleOnChange(event,companyAction)} value={cName} type="text" name="cName" placeholder="Enter Company Name"/>
                <label>Company Alias</label>
                <input onChange={(event)=>handleOnChange(event,companyAction)} value={cAlias} type="text" name="cAlias" placeholder="Enter Company Name"/>
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