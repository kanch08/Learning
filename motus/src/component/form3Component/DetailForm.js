import React , { Component } from 'react';
import { handleOnChange } from './HandlingEvent';
import { DetailAction } from './Action/detailAction';
import { connect } from 'react-redux';
import cross from '../assets/cross.png';

class DetailForm extends Component{
    render(){
        const { formNumber=0 ,handleDelete } = this.props;
        const {DetailAction}=this.props;
        const {FirstName , LastName , Email , date2  } = this.props.company;
        return(
            <div className="detail detailForm">
                    <ul className="progressHeading">
                        <li>
                            <input
                                type="text"
                                name={formNumber+"-FirstName"}
                                value={FirstName}
                                onChange={(event) =>handleOnChange(event,DetailAction)}
                                required="required"
                            />
                        </li>
                        <li>
                            <input
                                type="text"
                                name={formNumber+"-LastName"}
                                value={LastName}
                                onChange={(event) =>handleOnChange(event,DetailAction)}
                                required="required"
                            />
                        </li>
                        <li>
                            <input
                                type="text"
                                name={formNumber+"-Email"}
                                value={Email}
                                onChange={(event) =>handleOnChange(event,DetailAction)}
                                required="required"/>
                        </li>
                        <li>
                            <input
                                type="date"
                                name={formNumber+"-date2"}
                                value={date2}
                                onChange={(event) =>handleOnChange(event,DetailAction)}
                                required="required"
                            />
                        </li>
                        <li>
                            <input
                                type="radio"
                                name="FinanceContact"
                                value={formNumber}
                                required="required"
                                onChange={(event) =>handleOnChange(event,DetailAction)}
                            />
                        </li>
                        <li>
                            {formNumber > 0 ?
                                <div className="crossButton">
                                    <img
                                        src={cross}
                                        width="20px"
                                        alt="cross"
                                        onClick={handleDelete}
                                    />
                                </div>
                                :
                                null
                            }
                        </li>
                    </ul>
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