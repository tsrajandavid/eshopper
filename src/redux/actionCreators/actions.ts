import { GenericAPIService } from '../../services';
import {
    GET_PRODUCT_BY_ID_REQUEST,
    GET_PRODUCT_BY_ID_SUCCESS,
    GET_PRODUCT_BY_ID_FAIL,
    GET_PRODUCTS_BULK_REQUEST,
    GET_PRODUCTS_BULK_SUCCESS,
    GET_PRODUCTS_BULK_FAIL
} from '../actionTypes/constants'

// Api Call from GenericAPIService

const getPostById = (dispatch: any, id: number) => {
    dispatch({ type: GET_PRODUCT_BY_ID_REQUEST });
    let url: any = `products/${id}`
    GenericAPIService.get(url)
        .then((response) => {
            dispatch({ type: GET_PRODUCT_BY_ID_SUCCESS, payload: response });
            // console.log(response);
        })
        .catch((error) => {
            dispatch({ type: GET_PRODUCT_BY_ID_FAIL, payload: error });
            console.log(error);
        })
};
// Api Call from GenericAPIService

const getPostBulk = async (dispatch: any) => {
    dispatch({ type: GET_PRODUCTS_BULK_REQUEST });
    let url: any = `products/`
    GenericAPIService.get(url)
        .then((response) => {
            dispatch({ type: GET_PRODUCTS_BULK_SUCCESS, payload: response });
            // console.log(response);
        })
        .catch((error) => {
            dispatch({ type: GET_PRODUCTS_BULK_FAIL, payload: error });
            console.log(error);
        })

};

// export get details to the inner components

export const getPostByIdFunc = (dispatch: any) => {
    return (id: number) => getPostById(dispatch, id);
}

export const getPostsBulkFunc = (dispatch: any) => {
    return () => getPostBulk(dispatch);
}