import { combinedReducers } from 'redux';
// import todosReducer from './todos_reducer.js';

const rootReducer = combinedReducers({
  todos: todosReducer;
});

export default rootReducer;
