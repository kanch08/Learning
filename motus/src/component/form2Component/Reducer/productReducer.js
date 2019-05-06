

export const productReducer = (state = {} , action ) => {
    switch(action.type){
        case "onChange" : {
            let tempState = {...state};
            tempState[action.data.name] = action.data.value;
            console.log(tempState);
            return tempState;
            break;
        }
        default : {
            return state;
        }
    }
}

export default productReducer;