const InitState = "ALL";

const filterReducer = (state = InitState , action) => {
    switch (action.type){
        case "SET_FILTER" :
            return action.payload ; 
        default : 
            return state;
    }
}

export default filterReducer ;