import {HandleValidation} from "./HandleValidation";

export const HandleSubmit = (event) => {
    console.log("Handle Submit Called");
    event.preventDefault();
    if(HandleValidation(event)){
        alert("Form Submitted");
    }
    else{
        alert("Form has Errors");
    }
}