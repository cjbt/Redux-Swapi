import { GET_PEOPLE, GET_PEOPLE_FAILURE, GET_PEOPLE_SUCCESS } from '../actions';
const initialState = {
  characters: [],
  isLoading: false,
  error: null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case GET_PEOPLE:
      return {
        ...state,
        isLoading: true
      };
    case GET_PEOPLE_SUCCESS:
      return {
        ...state,
        characters: action.payload,
        isLoading: false
      };
    case GET_PEOPLE_FAILURE:
      return {
        ...state,
        error: action.payload,
        idLoading: false
      };
    default:
      return state;
  }
};
