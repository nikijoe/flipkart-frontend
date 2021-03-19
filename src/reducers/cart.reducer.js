import {cartConstants} from '../actions/constants'

const initState = {
    cartItems: {},
    updatingCart: false,
    error: null
}

export default function cartReducer (state=initState, action) {
    switch(action.type){
        case cartConstants.REMOVE_FROM_CART_REQUEST:
        case cartConstants.ADD_TO_CART_REQUEST:
            state={
                ...state,
               updatingCart: true
            }
            break;
        case cartConstants.ADD_TO_CART_SUCCESS:
            state={
                ...state,
                cartItems: action.payload.cartItems,
                updatingCart: false
            }
            break;
        case cartConstants.REMOVE_FROM_CART_FAILURE:
        case cartConstants.ADD_TO_CART_FAILURE:
            state={
                ...state,
                updatingCart: false,
                error: action.payload.error
            }
            break;
        case cartConstants.RESET_CART:
            state=initState
            break;
        default:
            break
    }
    return state
}