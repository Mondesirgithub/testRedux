import { BUY_PHONE } from "./type"

const initialStatePhone = {
    phones : 5
}

const reducerPhone = (state = initialStatePhone , action) => {
    switch(action.type){
        case BUY_PHONE:
            return {
                ...state,
                phones : state.phones - action.number
            }
        
        default: return state
    }
}

export default reducerPhone