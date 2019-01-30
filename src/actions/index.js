import axios from 'axios';
export const GET_PEOPLE = 'GET_PEOPLE';

// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

const url = 'https://swapi.co/api/people';

export const getPeople = () => dispatch => {
  return axios
    .get(url)
    .then(res =>
      dispatch({
        type: GET_PEOPLE,
        payload: res.data.results
      })
    )
    .catch(err => console.log(err));
};
// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
