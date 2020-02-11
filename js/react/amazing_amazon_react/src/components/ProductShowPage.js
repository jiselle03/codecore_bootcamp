import React, { useEffect, useReducer } from "react";
import { Link } from "react-router-dom";

import "./css/ProductShowPage.css"
import { ProductDetails } from "./ProductDetails";
import { ReviewList } from "./ReviewList";
import { Product } from "../api/product";
import { Spinner } from "./Spinner";

const initialState = {
  product: null,
  isLoading: true
};

const reducer = (state, action) => {
  switch(action.type) {
    case 'FETCH_PRODUCT':
      return {
        product: action.payload,
        isLoading: false
      };
    
    case 'DELETE_PRODUCT':
      return {
        product: null,
        isLoading: true
      };
    
    case 'DELETE_REVIEW':
      return {
        ...state,
        product: action.payload
      };
  };
};

export const ProductShowContext = React.createContext();

const ProductShowPage = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const currentProductId = props.match.params.id;

  const deleteProduct = () => {
    Product.destroy(state.product.id).then(data => {
      dispatch({ type: 'DELETE_PRODUCT' });
      props.history.push("/products");
    });
  };

  const deleteReview = id => {
    const newReviews = state.product.reviews.filter(r => r.id !== id);
    const payload = {
      ...state.product,
      reviews: newReviews
    };

    dispatch({ type: 'DELETE_REVIEW', payload });
  };

  useEffect(() => {
    Product.one(currentProductId).then(product => {
      dispatch({ type: 'FETCH_PRODUCT', payload: product })
    });
  }, [currentProductId]);

  if(state.isLoading) {
    return(
      <Spinner message="Product does not exist!" />
    );
  };

  return (
    <div 
      style={{margin:"0 3em"}}
      className="Page">
      <ProductDetails 
        {...state.product}
      />
      <button
        style={{margin:"0 3em"}}
        className="ui small right floated red button"
        onClick={() => deleteProduct()}>Delete</button>
      
      <Link exact to={`/products/${state.product.id}/edit`}><button
        className="ui small right floated orange button"
        >Edit</button></Link>
      <br /><br />
      <ProductShowContext.Provider value={deleteReview} >
        <ReviewList reviews={state.product.reviews} />
      </ProductShowContext.Provider>
    </div>
  );
};

export default ProductShowPage;
