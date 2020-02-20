import React from 'react';
import ReactDOM from 'react-dom';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

import WebpackLogo from "./images/webpack_logo.png";

const position = [49.2123581,-122.9219133];
const App = () => {
    return (
      <main>
        <Map center={position} zoom={13}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />
          <Marker position={position}>
            <Popup>CodeCore College<br />New Westminster, BC V3M 6Z1</Popup>
          </Marker>
        </Map>
        <h1 style={{ fontFamily: "sans-serif" }}>Webpack Logo</h1>
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
