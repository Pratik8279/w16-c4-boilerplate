import { FILTER_PRODUCTS, GET_FAILURE, GET_PRODUCTS_DATA, GET_REQUEST, GET_SUCCESS, SORT_PRODUCTS } from "./actionTypes";

const initState = {
  data: [],
  isLoading: false,
  isError: false,
  filterData: [],
  products: [],
};

const reducer = (state = initState, { type, payload }) => {
     switch (type){
       case GET_REQUEST:{
         return{
             ...state,
             data: [],
             isloading: true,
             isError: false, 
         }
       }
       case GET_SUCCESS:{
         return{
              ...state,
              data: payload,
              isloading: false,
              isError: false,  
         }
       }
       case GET_FAILURE:{
         return{
          ...state,
          data: [],
          isloading: false,
          isError: true, 
         }
       }
       case SORT_PRODUCTS:{
         return{
            ...state,
            products: state.products.sort((a,b)=> {return a-b})
         }
       }
       case FILTER_PRODUCTS:{
         return{
            ...state,
            products: state.products.filter((item)=> {return item.includes()})
         }
       }
     }
     


};
export { reducer };
