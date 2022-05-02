// use axios for api call
import axios from "axios";
import {  FILTER_PRODUCTS, GET_FAILURE, GET_REQUEST, GET_SUCCESS, SORT_PRODUCTS } from "./actionTypes";

function getProductsData(dispatch,payload) {
    let res = axios.get("https://movie-fake-server.herokuapp.com/products");
    dispatch({
        type: GET_SUCCESS,
        payload: res
    })
}

export const getProducts_Loading = ()=>({
    type: GET_REQUEST
})

export const getProducts_Error = ()=>({
    type: GET_FAILURE
})

const sortProducts = (dispatch,payload) => {
    dispatch({
        type: SORT_PRODUCTS,
        payload
    })
};

const filterProducts = (dispatch,payload) => {
    dispatch({
        type: FILTER_PRODUCTS,
        payload
    })
};

export { getProductsData, sortProducts, filterProducts };
