

export const handleOnChange=(event,DetailAction)=>{
    DetailAction(
        {
            "name":event.target.name,
            "value":event.target.value
        }
    )
}