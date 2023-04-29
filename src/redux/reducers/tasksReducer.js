const intiState= [
    // {description : "work on the final project " , id :1 , isDone:false},
    // {description : "go somewhere " , id :2 , isDone:false},
    // {description : "do play  " , id :3 , isDone:false}
]
const tasksReducer = (state = intiState, action)=> {
    switch (action.type){
        case "ADD_TASK" :
            return [...state , action.payload];
        case "DELETE_TASK" : 
            return state.filter(task => task.id !== action.payload);
        case "EDIT_TASK" :
            return state.map(task => {
                if (task.id === action.payload.id){
                    return {...task , description : action.payload.description}
                }
                    return task ;
            }) ;
        case "TOGGLE_TASK" : 
            return state.map(task =>{
                if (task.id === action.payload){
                    return {...task , isDone : !task.isDone}
                }
                    return task
            }) 
        default : 
            return state;   
    }

}

export default tasksReducer ;