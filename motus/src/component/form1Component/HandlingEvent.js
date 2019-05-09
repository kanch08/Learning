import {HandleValidation} from '../HandleValidation';

export const handleOnChange=(event,companyAction,props,fieldName)=>{
  //  let fields = props.field;
   // fields[fieldName] = event.target.value;
    companyAction(
        {
            "name":event.target.name,
            "value":event.target.value
        }
    )
}

