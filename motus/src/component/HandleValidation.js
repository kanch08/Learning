export const HandleValidation = (event) => {
    console.log("Handle Validation", event);
    let fields = [];
    let errors = {};
    let formIsValid = true;
    let fieldName = event.target.name;
    //Name
    if(!fields[fieldName]){
        formIsValid = false;
        errors[fieldName] = "Cannot be empty";
    }

    if(typeof fields[fieldName] !== "undefined"){
        if(!fields[event.target.name].match(/^[a-zA-Z]+$/)){
            formIsValid = false;
            errors[event.target.name] = "Only letters";
        }
    }

    //Email
    if(!fields[fieldName === "email"]){
        formIsValid = false;
        errors["email"] = "Cannot be empty";
    }

    if(typeof fields["email"] !== "undefined"){
        let lastAtPos = fields["email"].lastIndexOf('@');
        let lastDotPos = fields["email"].lastIndexOf('.');
        if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields[fieldName === "email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields[fieldName === "email"].length - lastDotPos) > 2)) {
            formIsValid = false;
            errors[fieldName === "email"] = "Email is not valid";
        }
    }

    return formIsValid;
}


