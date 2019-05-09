import React from 'react';
import DemoCompanyForm from "./form1Component/Form1";
import ApplyProduct from "./form2Component/ApplyProduct";
import Detail from "./form3Component/Detail";

export const RendenringForm = (props) => {

    const { formNumber } = props;

    if(formNumber === 1){
        return <DemoCompanyForm />
    }
    else if(formNumber === 2){
        return <ApplyProduct />
    }
    else if(formNumber === 3){
        return <Detail />
    }
    else{
        return <DemoCompanyForm/>
    }
}
