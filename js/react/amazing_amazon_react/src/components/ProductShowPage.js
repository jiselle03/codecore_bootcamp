import React from "react";
import "./css/ProductShowPage.css"
import { ProductDetails } from "./ProductDetails";
import { ReviewList } from "./ReviewList";
import oneProductData from "../oneProductData";

const ProductShowPage = (props) => {
    return (
        <div className="Page">
          <ProductDetails 
            title="Small aluminum shoes"
            description="We have no choice, General Calrissian! Our cruisers can't repel firepower of that magnitude!"
            seller="Augustine Grimes"
            price={49.24}
            created_at="2020-01-06T00:00:00.000Z"
          />
          <ReviewList reviews={oneProductData.reviews} />
        </div>
      );
};

export default ProductShowPage;