

const companyReducer = (state = {},action)=>{
    console.log("Reducer Logged",action);
    switch(action.type){
        case "onChange":{
            console.log("inside on change reducer")
            // let tmpState={...state};
            // tmpState[action.data.name]=action.data.value;
            console.log("printing tmpState",state);
            return {...state, [action.data.name]:action.data.value}
        }
        default:{
            return state
        }
    }
}

export default companyReducer;