import axios from 'axios';

export const FETCH_DOGS_START = 'FETCH_DOGS_START';
export const FETCH_DOGS_SUCCESS = 'FETCH_DOGS_SUCCESS';
export const FETCH_DOGS_FAIL = 'FETCH_DOGS_FAIL';

export const getDogs = api => dispatch => {
    dispatch({ type: FETCH_DOGS_START });
    axios
        .get(api)
        .then(response => {
            console.log('axios good boi', response.data.message);
            dispatch({
                type: FETCH_DOGS_SUCCESS,
                payload: response.data.message
            });
        })
        .catch(error => {
            console.log('axios bad, very bad', error);
            dispatch({ type: FETCH_DOGS_FAIL, payload: error.message });
        });
};