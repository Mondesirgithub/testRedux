import { LOAD_COMMMENTS, LOAD_COMMMENTS_ERROR, LOAD_COMMMENTS_SUCCESS } from './type'
import axios from 'axios'


export const loadApiComments = () => {
    return {
        type : LOAD_COMMMENTS,
    }
}

export const loadApiCommentsSuccess = comments => {
    return {
        type : LOAD_COMMMENTS_SUCCESS,
        payload : comments
    }
}  

export const loadApiCommentsError = error => {
    return {
        type : LOAD_COMMMENTS_ERROR,
        payload : error
    }
}


export const apiCall = () => {
    return dispatch => {
        dispatch(loadApiComments())
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then( response => dispatch(loadApiCommentsSuccess(response.data)))
        .catch( error => dispatch(loadApiCommentsError(error)) )
    }
}