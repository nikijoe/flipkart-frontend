import { userConstants } from "../actions/constants"

const initState = {
    address: [],
    orders: [],
    orderDetails: {},
    error: null,
    loading: false,
    orderFetching: false
}

export default function userReducer(state = initState, action) {
    switch(action.type){
        case userConstants.GET_USER_ADDRESS_REQUEST:
        case userConstants.ADD_USER_ADDRESS_REQUEST:
            state = {
                ...state,
                loading: true,
                error: null
            }
            break
        case userConstants.GET_USER_ADDRESS_SUCCESS:
        case userConstants.ADD_USER_ADDRESS_SUCCESS:
            state = {
                ...state,
                address: action.payload.address,
                loading: false,
                error: null
            }
            break
        case userConstants.GET_USER_ADDRESS_FAILURE:
        case userConstants.ADD_USER_ADDRESS_FAILURE:
            state = {
                ...state,
                loading: false,
                error: action.payload.error
            }
            break
        case userConstants.GET_USER_ORDER_REQUEST:
            state = {
                ...state,
                orderFetching: true,
            }
            break
        case userConstants.GET_USER_ORDER_SUCCESS:
            state = {
                ...state,
                orders: action.payload.orders,
                orderFetching: false,
            }
            break
        case userConstants.GET_USER_ORDER_FAILURE:
            state = {
                ...state,
                orderFetching: false,
                error: action.payload.error
            }
            break
        case userConstants.GET_USER_ORDER_DETAILS_REQUEST:
            state = {
                ...state,
                loading: true,
            }
            break
        case userConstants.GET_USER_ORDER_DETAILS_SUCCESS:
            state = {
                ...state,
                orderDetails: action.payload.order,
                loading: false,
            }
            break
        case userConstants.GET_USER_ORDER_DETAILS_FAILURE:
            state = {
                ...state,
                loading: false,
                error: action.payload.error
            }
            break
        default:
            break
    }
    return state
}