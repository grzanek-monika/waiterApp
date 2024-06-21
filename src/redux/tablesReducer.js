import { API_URL } from "../config";

//selectors
export const getAllTables = (state => state.tables);


// actions
const createActionName = actionName => `app/tables/${actionName}`;
const UPDATE_TABLES = createActionName('UPDATE_TABLES');

// action creators
const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLES: 
      return [...action.payload];
    default:
      return statePart;
  };
};

export const updateTables = payload => ({type: UPDATE_TABLES, payload});
export const fetchTables = () => {
  return (dispatch) => {
    fetch(API_URL + '/tables')
      .then(res => res.json())
      .then(tables => dispatch(updateTables(tables)));
  }
}


export default tablesReducer;
