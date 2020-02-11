import WebpackLogo from "./images/webpack_logo.png";

document.addEventListener("DOMContentLoaded", () => {
    const img = document.createElement("img");
    img.src = WebpackLogo;

    document.body.append(img);
});


console.log("Hello, Universe!");