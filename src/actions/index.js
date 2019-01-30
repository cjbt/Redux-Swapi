import axios from 'axios';
export const GET_PEOPLE = 'GET_PEOPLE';
export const GET_PEOPLE_SUCCESS = 'GET_PEOPLE_SUCCESS';
export const GET_PEOPLE_FAILURE = 'GET_PEOPLE_FAILURE';

// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

const url = 'https://swapi.co/api/people';

export const getPeople = () => dispatch => {
  dispatch({ type: GET_PEOPLE, payload: true });
  return axios
    .get(url)
    .then(res =>
      dispatch({
        type: GET_PEOPLE_SUCCESS,
        characters: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PEOPLE_FAILURE,
        payload: err
      })
    );
};
// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
