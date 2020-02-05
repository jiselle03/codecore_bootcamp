import React, { Component } from "react";
import "./css/ProductShowPage.css"
import { ProductDetails } from "./ProductDetails";
import { ReviewList } from "./ReviewList";
import oneProductData from "../oneProductData";

class ProductShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: oneProductData
    }
  };

  deleteProduct(id) {
    this.setState({
      product: null
    });
  };

  deleteReview(id) {
    this.setState({
      product: {
        ...this.state.product,
        reviews: this.state.product.reviews.filter(r => r.id !== id)
      }
    });
  };

  render() {
    if(!this.state.product) {
      return(
        <div className="Page">
          <h3 className="ui red header">Product does not exist.</h3>
        </div>
      );
    };

    return (
      <div className="Page">
        <ProductDetails 
          {...this.state.product}
        />
        <ReviewList 
        reviews={this.state.product.reviews}
        onReviewDeleteClick={id => this.deleteReview(id)}
        />
      </div>
    );
  };

};

export default ProductShowPage;