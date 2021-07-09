import{
    FETCH_EMAIL_REQUEST,
    FETCH_EMAIL_SUCCESS,
    FETCH_EMAIL_FAILURE
} from "./EmailTypes.js";

export const fetchEmailRequest = () => {
    return{
        type: FETCH_EMAIL_REQUEST
    }
};

export const fetchEmailSuccess = (message) => {
    return{
        type: FETCH_EMAIL_SUCCESS,
        payload: message
    }
};

export const fetchEmailFailure = (errors) => {
    return{
        type: FETCH_EMAIL_FAILURE,
        payload: errors
    }
};
