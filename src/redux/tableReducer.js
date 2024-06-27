import { API_URL } from "../config";
import { nanoid } from "nanoid";

//selectors
export const getAllTables = (state => state.tables.data);
export const getTableById = ({tables}, id) => tables.data.find(table => table.id === id);
export const tableStatuses = ['Busy', 'Reserved', 'Free', 'Cleaning'];
export const getPending = (state => state.tables.pending);

// actions
const createActionName = actionName => `app/tables/${actionName}`;
const UPDATE_TABLES = createActionName('UPDATE_TABLES');
const EDIT_TABLE = createActionName('EDIT_TABLE');
const UPDATE_PENDING = createActionName('UPDATE_PENDING');
const ADD_TABLE = createActionName('ADD_TABLE');
const REMOVE_TABLE = createActionName('REMOVE_TABLE');

// action creators
const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLES: 
      return {...statePart, data: [...action.payload]};
    case EDIT_TABLE: 
      return {...statePart, data: statePart.data.map(table => (table.id === action.payload.id ? {...table, ...action.payload} : table))};
    case UPDATE_PENDING: 
      return {...statePart, pending: action.payload};
    case ADD_TABLE: 
      return {...statePart, data: [...statePart.data, {id: nanoid(), ...action.payload }]};
    case REMOVE_TABLE:
      return {...statePart, data: statePart.data.filter(table => table.id !== action.payload )};
    default:
      return statePart;
  };
};

export const updateTables = payload => ({type: UPDATE_TABLES, payload});
export const editTable = payload => ({ type: EDIT_TABLE, payload });
export const updatePending = payload => ({ type: UPDATE_PENDING, payload });
export const addTable = payload => ({ type: ADD_TABLE, payload });
export const removeTable = payload => ({ type: REMOVE_TABLE, payload });

export const fetchTables = () => {
  return (dispatch) => {
    dispatch(updatePending(true));
    fetch(`${API_URL}/tables`)
      .then(res => res.json())
      .then(tables => {
        dispatch(updateTables(tables));
        dispatch(updatePending(false));
      });
  }
}

export const editTableRequest = (newTable) => {
  return (dispatch) => {
    dispatch(updatePending(true));
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newTable)
  };
  fetch(`${API_URL}/tables/${newTable.id}`, options)
    .then(() => {
      dispatch(editTable(newTable));
      dispatch(updatePending(false));
    });
  };
}

export const addTableRequest = (newTable) => {
  return (dispatch) => {
    dispatch(updatePending(true));
    const options = {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(newTable)
    };
    fetch(`${API_URL}/tables`, options)
      .then(() => {
        dispatch(addTable(newTable));
        dispatch(updatePending(false));
      })
  }
}

export const removeTableRequest = (tableId) => {
  return(dispatch) => {
    dispatch(updatePending(true));
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(tableId)
    }
    fetch(`${API_URL}/tables/${tableId.id}`, options)
      .then(() => {
        dispatch(removeTable(tableId));
        dispatch(updatePending(false));
      })
  }
}


export default tablesReducer;
