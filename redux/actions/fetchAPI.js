import { FETCHING_API, FETCH_API_SUCCESS, FETCH_API_FAILURE } from './constants';


export function fetchAPI() {

    return (dispatch) => {
        dispatch(getAPI())
        return(fetch('https://services.ing.nl/api/securities/mobile/markets/stockmarkets/AEX'))
        .then(res => res.json())
        .then(json => {
            console.log('in action fetchAPI === ', json.instruments);
            var old = JSON.stringify(json.instruments).replace(/null/g, 0);
            var newArray = JSON.parse(old);
            return(dispatch(getAPISuccess(newArray)))
        })
        .catch(err => dispatch(getAPIFailure(err)))
    }
}

function getAPI() {

    return {
        type: FETCHING_API
    }
}

function getAPISuccess(data) {

    return {
        type: FETCH_API_SUCCESS,
        data
    }
}

function getAPIFailure() {
    return {
        type: FETCH_API_FAILURE
    }
}
