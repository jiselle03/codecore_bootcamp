import React from "react";

import ProductShowPage from "./ProductShowPage";
import { ProductIndexPage } from "./ProductIndexPage";
import { render } from "react-dom";

const App = () => {
  return (
    <>
      <ProductShowPage />
      <ProductIndexPage />
    </>
  );
};

export default App;
