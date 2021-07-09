import axios from "axios";
import { fetchEmailFailure, fetchEmailRequest, fetchEmailSuccess } from "../actions/EmailActions"
import responseStatus from "../../apis/responseStatus.js";
import { toast } from "react-toastify";

export const SendMail = (message) =>{
    return async dispatch =>{
        dispatch(fetchEmailRequest());

        const url = process.env.REACT_APP_API_SEND_MAIL;

        if(url === undefined || url === null) return dispatch(fetchEmailFailure("Error api"));

        const options = {
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        };

        const response = await axios.post(url, message, options)
            .catch(error => {
                return responseStatus(error.response.status, error.message, "", error.response.data);
            });
        
        if(response.code > 204){
            toast.error(response.message);
            return dispatch(fetchEmailFailure(response.message));
        }
        else{
            toast.success("Send email successly");
            return dispatch(fetchEmailSuccess("OK"));
        }
    }
}