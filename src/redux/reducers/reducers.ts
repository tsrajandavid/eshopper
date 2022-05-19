import {
    GET_PRODUCT_BY_ID_REQUEST,
    GET_PRODUCT_BY_ID_SUCCESS,
    GET_PRODUCT_BY_ID_FAIL,
    GET_PRODUCTS_BULK_REQUEST,
    GET_PRODUCTS_BULK_SUCCESS,
    GET_PRODUCTS_BULK_FAIL
} from '../actionTypes/constants'


const reducer = (state: any, action: any) => {
    switch (action.type) {
        case GET_PRODUCT_BY_ID_REQUEST:
            return {
                ...state,
                byId: {
                    isLoading: true,
                    error: null,
                    data: null
                }
            }
        case GET_PRODUCT_BY_ID_SUCCESS:
            return {
                ...state,
                byId: {
                    isLoading: false,
                    error: false,
                    data: action.payload
                }
            }
        case GET_PRODUCT_BY_ID_FAIL:
            return {
                ...state,
                byId: {
                    isLoading: false,
                    error: action.payload,
                    data: false
                }
            }

        case GET_PRODUCTS_BULK_REQUEST:
            return {
                ...state,
                byBulk: {
                    isLoading: true,
                    error: null,
                    data: null
                }
            }
        case GET_PRODUCTS_BULK_SUCCESS:
            return {
                ...state,
                byBulk: {
                    isLoading: false,
                    error: false,
                    data: action.payload
                }
            }
        case GET_PRODUCTS_BULK_FAIL:
            return {
                ...state,
                byBulk: {
                    isLoading: false,
                    error: action.payload,
                    data: false
                }
            }
        default: return state;
    }
}

export default reducer;