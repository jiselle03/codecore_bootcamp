import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./css/ProductShowPage.css"
import { ProductDetails } from "./ProductDetails";
import { ReviewList } from "./ReviewList";
import { Product } from "../api/product";
import { Spinner } from "./Spinner";

class ProductShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      isLoading: true
    }
  };

  deleteProduct = id => {
    Product.destroy(this.state.product.id).then(data => {
      this.props.history.push("/products");
    });
  };

  editProduct = (id, params) => {
    Product.update(id, params).then(data => {
      Product.one(this.props.match.params.id).then(product => {
        this.setState({ product, isLoading: false });
      });
    });
  };  

  deleteReview = id => {
    const { product } = this.state;
    this.setState({
      product: {
        ...product,
        reviews: product.reviews.filter(r => r.id !== id)
      }
    });
  };

  componentDidMount() {
    Product.one(this.props.match.params.id).then(product => {
      this.setState({ product, isLoading: false });
    });
  };

  render() {
    const { product } = this.state;
    if(!product) {
      return(
        <Spinner message="Product does not exist!" />
      );
    };

    return (
      <div 
        style={{margin:"0 3em"}}
        className="Page">
        <ProductDetails 
          {...product}
        />
        <button
          style={{margin:"0 3em"}}
          className="ui small right floated red button"
          onClick={() => this.deleteProduct()}>Delete</button>
        
        <Link exact to={`/products/${product.id}/edit`}><button
          className="ui small right floated orange button"
          >Edit</button></Link>
        <br /><br />
        <ReviewList 
        reviews={product.reviews}
        onReviewDeleteClick={id => this.deleteReview(id)}
        />
      </div>
    );
  };

};

export default ProductShowPage;