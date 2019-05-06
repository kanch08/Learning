
export const handleOnChange=(event,companyAction)=>{
    console.log("handle on change called");
    console.log(typeof companyAction)
    companyAction(
        {
            "name":event.target.name,
            "value":event.target.value
        }
    )
    //this.props.dispatch({type:"onChange",data});
}