import { LOAD_COMMMENTS, LOAD_COMMMENTS_ERROR, LOAD_COMMMENTS_SUCCESS } from "./type"

const initialStateComments = {
    isLoading : false,
    comments : [],
    error : ''
}

const reducerComments = (state = initialStateComments , action) => {
    switch(action.type){
        case LOAD_COMMMENTS:
            return {
                ...state,
                isLoading : true
            }

        case LOAD_COMMMENTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                comments : action.payload,
                error : ''
            }

        case LOAD_COMMMENTS_ERROR:
            return {
                ...state,
                isLoading: false,
                comments : [],
                error : action.payload
            }

        default: return state
    }
}

export default reducerComments