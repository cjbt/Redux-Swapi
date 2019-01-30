import { GET_PEOPLE } from '../actions';
const initialState = {
  characters: []
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case GET_PEOPLE:
      return {
        characters: action.payload
      };
    default:
      return state;
  }
};
