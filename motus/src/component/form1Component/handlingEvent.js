
export const handleOnChange=(event,companyAction)=>{
    // console.log("handle on change called")
    let data={"name":event.target.name, "value":event.target.value}
    companyAction({"name":event.target.name, "value":event.target.value})
    //this.props.dispatch({type:"onChange",data});
}