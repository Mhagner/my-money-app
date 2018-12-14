import { stat } from "fs";

const userKey = '_mymoney_user'

const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem(userKey)),
    validadToken: false
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'TOKEN_VALIDATED':
            if(action.payload){
                return {...state, validadToken: true}
            }else{
                localStorage.removeItem(userKey)
                return {...state, validadToken: false, user: null}
            }
        case 'USER_FETCHED':
            localStorage.setItem(userKey, JSON.stringify(action.payload))
            return {...state, user: action.payload, validadToken: true}
    }
}
