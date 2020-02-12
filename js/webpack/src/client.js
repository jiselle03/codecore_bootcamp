import React from 'react';
import ReactDOM from 'react-dom';

import WebpackLogo from "./images/webpack_logo.png";

const App = () => {
    return (
      <main>
        <h1 style={{ fontFamily: "sans-serif" }}>Here's the logo!</h1>
        <img
          src={WebpackLogo}
          alt="Webpack Logo"
          style={{
            borderRadius: "20px",
            filter: "blur(0px) sepia(1) hue-rotate(50deg)",
            height: "400px"
          }}
        />
      </main>
    );
  };
  
  document.addEventListener("DOMContentLoaded", () => {
    const root = document.createElement("div");
    document.body.append(root);
  
    ReactDOM.render(<App />, root);
  });
