import React, { useEffect ,useDispatch, useSelector} from "react";
import { getProductsData } from "../Redux/actions";
import { Select, Grid } from "./Styled";

export const Products = () => {
  // const dispatch = useDispatch()
  // const {isLoading} = useSelector((state)=> state.isLoading.isLoading);

  useEffect(() => {
    // fetch ProductsData using redux-thunk on every mount
  
      
  }, []);
  const handleSort = (e) => {
    // dispatch sort products on change
  };


  return (
    <>
      <h2>Products</h2>
      <Select data-testid="product-sort-order" onChange={handleSort}>
        <option>Sort by--</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </Select>
      <Grid data-testid="products-container">
        {/* iterate data and show each POroduct card */}
      </Grid>
    </>
  );
};
