import React from "react";

import ProductShowPage from "./ProductShowPage";
import { ProductIndexPage } from "./ProductIndexPage";
import { render } from "react-dom";

const App = () => {
  return (
    <div className="ui container">
      <ProductShowPage />
      <ProductIndexPage />
    </div>
  );
};

export default App;
