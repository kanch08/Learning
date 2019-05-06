import React , { Component } from 'react';
import { handleOnChange } from './handlingEvent';
import { DetailAction } from './Action/detailAction';
import { connect } from 'react-redux';

class DetailForm extends Component{
    render(){
        const { formNumber ,handleDelete } = this.props;
        const {DetailAction}=this.props;
        const {FirstName , LastName , Email , date2 , FinanceContact } = this.props.company;
        return(
            <div className="detail detailForm">
                <form>
                    <ul className="progressHeading">
                        <li>
                            <input type="text" name="FirstName" value={FirstName} onChange={(event) =>handleOnChange(event,DetailAction)} required="required" />
                        </li>
                        <li>
                            <input type="text" name="LastName" value={LastName} onChange={(event) =>handleOnChange(event,DetailAction)}  required="required"/>
                        </li>
                        <li>
                            <input type="text" name="Email" value={Email} onChange={(event) =>handleOnChange(event,DetailAction)}  required="required"/>
                        </li>
                        <li>
                            <input type="date" name="date2" value={date2} onChange={(event) =>handleOnChange(event,DetailAction)} required="required"/>
                        </li>
                        <li>
                            <input type="radio" name="FinanceContact" value={FinanceContact} required="required" onChange={(event) =>handleOnChange(event,DetailAction)}/>
                        </li>
                        <li>
                            {formNumber > 0 ? <div className="crossButton"><button type="submit" onClick={handleDelete}>X</button></div> : null }
                        </li>
                    </ul>
                </form>
            </div>
        )
    }
}

const mapStateToProps =(store) => {
    return{
        company:store.form1rootReducers.form1companyReducer
    };
}

const mapDispatchToProps =()=>({
    DetailAction
})

export default connect(mapStateToProps,mapDispatchToProps())(DetailForm);