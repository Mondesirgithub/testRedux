const initialStatePhones = {
    phones : 5,
    tablets : 10,
}

const initialStateTv = {
    tv : 20
}

const buy_phone = () => {
    return {
        type : 'BUY_PHONE'
    }
}

const buy_tablet = () => {
    return {
        type : 'BUY_TABLET'
    }
}

const buy_tv = () => {
    return {
        type : 'BUY_TV'
    }
}

const reducer1 = (prevState = initialStatePhones, action) => {
    switch(action.type){
        case 'BUY_PHONE':
            return {
                ...prevState,
                phones : prevState.phones - 1
            }
        
        case 'BUY_TABLET':
            return {
                ...prevState,
                tablets : prevState.tablets - 1 
            }
         
        default: return prevState
    }
}

const reducer2 = (prevState = initialStateTv, action) => {
    switch(action.type){
        case 'BUY_TV':
            return {
                ...prevState,
                tv : prevState.tv - 1
            }

        default: return prevState
    }
}

const reducers = Redux.combineReducers({
    phone : reducer1,
    tv : reducer2
})

const store = Redux.createStore(reducers)

console.log(store.getState())

const availablePhones = document.querySelector("#count-phones")
const availableTablets = document.querySelector("#count-tablets")
const availableTv = document.querySelector("#count-tv")

availablePhones.innerText = store.getState().phone.phones
availableTablets.innerText = store.getState().phone.tablets
availableTv.innerText = store.getState().tv.tv

document.querySelector("#acheter-phone").addEventListener('click', () => {
    store.dispatch(buy_phone())
})

document.querySelector("#acheter-tablet").addEventListener('click', () => {
    store.dispatch(buy_tablet())
})

document.querySelector("#acheter-tv").addEventListener('click', () => {
    store.dispatch(buy_tv())
})

store.subscribe(() => {
    availablePhones.innerText = store.getState().phone.phones
    availableTablets.innerText = store.getState().phone.tablets
    availableTv.innerText = store.getState().tv.tv
})