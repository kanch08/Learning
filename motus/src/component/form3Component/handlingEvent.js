

export const handleOnChange=(event,DetailAction)=>{
  //  console.log("handle on change called");
    //console.log(typeof DetailAction)
    DetailAction(
        {
            "name":event.target.name,
            "value":event.target.value
        }
    )
}