import { createStore , combineReducers}  from "redux" ;
import tasksReducer from "./reducers/tasksReducer";
import filterReducer from "./reducers/filterReducer";


const rootReducer = combineReducers({
    tasks : tasksReducer,
    filter : filterReducer
});

const store = createStore(rootReducer);

export default store ; 