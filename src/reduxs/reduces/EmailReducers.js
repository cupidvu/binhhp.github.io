
import {
    FETCH_EMAIL_REQUEST,
    FETCH_EMAIL_SUCCESS,
    FETCH_EMAIL_FAILURE
} from "../actions/EmailTypes.js";

const initialState = {
    loading: false,
    data: "",
    error: ""
};

export const EmailReducers = (state = initialState, action) =>{
    switch(action.type){
        case FETCH_EMAIL_REQUEST:
            return{
                ...state,
                loading: true
            };
        case FETCH_EMAIL_SUCCESS:
            return{
                loading: false,
                data: action.payload,
                error: ''
            };
        case FETCH_EMAIL_FAILURE:
            return{
                loading: false,
                data: "",
                error: action.payload
            };
        default: return state;
    }
}