

const companyReducer = (state = {},action)=>{
    switch(action.type){
        case "onChange":{
            return {...state, [action.data.name]:action.data.value}
        }
        default:{
            return state
        }
    }
}

export default companyReducer;