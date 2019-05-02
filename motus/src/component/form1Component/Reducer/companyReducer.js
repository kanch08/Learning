

const companyReducer = (state = {},action)=>{
    switch(action.type){
        case "onChange":{
            let tmpState={...state};
            tmpState[action.data.name]=action.data.value;
            console.log("printing tmpState",state);

            return tmpState
            break;
        }
        default:{
            return state
        }
    }
}

export default companyReducer;