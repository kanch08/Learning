
export const handleOnChange=(event,companyAction)=>{
    companyAction(
        {
            "name":event.target.name,
            "value":event.target.value
        }
    )
}