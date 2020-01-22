// Go to the Wikipedia page on Pugs. Open up a console, and hack away with JavaScript:

    // Change the title of the article to your name
    // Hide the body of the article
    // Replace the Wikipedia logo with another picture


document.querySelector(".firstHeading").innerText = "Jiselle";
document.querySelector("#bodyContent").style.visibility = "hidden";
// document.querySelector("#bodyContent").style.display = "none";
document.querySelector(".mw-wiki-logo").style.backgroundImage = "url(https://pbs.twimg.com/profile_images/1080545769034108928/CEzHCTpI_400x400.jpg)";

// Stretch: Replace the word "pug" in every p tag with "spud".
let paragraphs = document.getElementsByTagName('p');
for (let p of paragraphs) {
    const pText = p.innerText;
    const newText = pText
        .split('pug')
        .join('spud');
    p.innerText = newText;   
};


// Go to Vancouver's Craiglist page and hack away with JavaScript:

    // Get the href attribute of the first link on the page.
    // Get the number of links on this page.
    // Change the text for all links to be your name.
    // Make Craigslist's logo link to http://www.google.com
    // Make of all the text use the Papyrus font.

document.querySelector("body a:first-child").href;
document.querySelectorAll("a").length;
document.querySelectorAll("a").forEach(a => a.innerText = "Jiselle");
document.querySelector("#logo").innerHTML = '<a href = "http://www.google.com">craigslist</a>'
document.querySelector('html body').style.fontFamily = "Papyrus";

// Stretch
// Make the event calendar alternate the background colour of each day square like a chess board.
// Remove all p and a nodes that contain the substring "es"

document.querySelectorAll('td');
document.querySelectorAll('td').forEach((node, index) => { 
    if(index % 2 !== 0) {
        node.style.backgroundColor = "maroon";
    } else {
        node.style.backgroundColor = "grey";
    }
});

document.querySelectorAll('p, a').forEach(node => {
    if(node.innerText.includes('es')) {
        let parent = node.parentElement;
        parent.remove(node);
    }
});


// Go to the Johnny Five Javascript library's Githup repo.

    // Change the text color of all file name and directory name links to red.
    // Delete all file and directory icons from the file explorer (the big box below the Clone or download button).
    // Clone the johnny five logo (the big yellow square with a robot inside) and use it to replace the Github logo at the very top left of the page. 
    // Also, resize the cloned johnny five logo to be about the same size as the replaced Github logo.
    // Replace all topic tags (e.g. javascript, arduino, chip. etc) with the first tags, javascript

document.querySelectorAll(".js-navigation-open").forEach(link => link.style.color = "red");
document.querySelectorAll(".icon").forEach(icon => icon.style.display = "none");
document.querySelector("svg:first-child").outerHTML = '<img src="https://github.com/rwaldron/johnny-five/raw/master/assets/sgier-johnny-five.png" height=32 width=32">';

const tags = document.querySelectorAll(".topic-tag-link");
tags.forEach(tag => tag.innerText = tags[0].innerText);


// Create a function, H, that takes a tagName as argument and returns a new node of tagName type.
   H('div') // returns a div element (i.e. <div></div>)
   H('span') // returns a span element (i.e. <span></span>)
   H('a') // returns a a element (i.e. <a></a>)

const H = function(tagName) {
    return document.createElement(tagName);
};

// Add support for another argument to pass in html attributes as a plain old object like so:
   H('div', {id: 'four-fists-phil', class: 'doggo fighter'})
   // returns a node like <div id="four-fists-phil" class="doggo fighter"></div>
   H('li', {id: 'product_42', 'data-url':'/product/42'})
   // returns a node like <li id="product_42" data-url="/product/42"></li>
   H('form', {action: '/', method: 'post'})
   // returns a node like <form action="/" method="post"></form>

const H = function(tagName, attr) {
    let tag = document.createElement(tagName);
    for (let key in attr) {
        tag.setAttribute(key, attr[key]);
    };
    return tag;
};

// Add support for a third argument to add text content to the created node.
  H('h1', null, 'Hi-Ho, neighbour!');
  // returns a node like <h1>Hi-Ho, neighbour!</h1>
  H('span', {class: 'note'}, "These are not the droids you're looking for.");
  // returns a node like <span class="note">These are not the droids you're 
  // looking for.</span>

const H = function(tagName, attr, content) {
    let tag = document.createElement(tagName);
    for (let key in attr) {
        tag.setAttribute(key, attr[key]);
    };
    tag.innerText = content;
    return tag;
};