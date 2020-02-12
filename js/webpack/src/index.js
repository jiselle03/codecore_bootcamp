import React from 'react';
import ReactDOM from 'react-dom';

import WebpackLogo from "./images/webpack_logo.png";

document.addEventListener("DOMContentLoaded", () => {
    const root = document.createElement("div");
    document.body.append(root);

    ReactDOM.render(
        <img 
            style={{
                borderRadius: "20px",
                border: "3px solid grey"
                }}
            src={WebpackLogo}
        />
    );

});


console.log("Hello, Universe!");
