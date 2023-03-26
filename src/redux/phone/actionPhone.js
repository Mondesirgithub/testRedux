import { BUY_PHONE } from './type'

export const buy_phone = number => {
    return {
        type : BUY_PHONE,
        number
    }
}