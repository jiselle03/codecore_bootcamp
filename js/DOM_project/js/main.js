// Query Selectors
const toxicTim = document.querySelector('#toxic-tim');
const teamSalmonSelector = '.team.salmon';

const teamSalmon = document.querySelector(teamSalmonSelector);
const lastDoggoTeamSalmon = teamSalmon.querySelector('.doggo:last-child');

const allDoggoFighters = document.querySelectorAll('.doggo.fighter');
const divs = document.querySelectorAll('div');

const bumbleBertha = document.getElementById("bumble-bertha");

// Exercise
// 1. Select MoneyBags Michael & Larry The Lion
const MoneybagsAndLarry = document.querySelectorAll('#larry-the-lion, #moneybags-michael');

// 2. Select all team teal doggos but first
const allTeamTealDoggosButFirst = document.querySelectorAll('.team.teal .doggo:not(first-child)');

// 3. Select the second doggo in every team
const secondDoggos = document.querySelectorAll('.team .roster .doggo:nth-child(2)');

// allDoggoFighters.forEach(doggo => console.log(doggo));

const inbreadDog = document.querySelector('#inbread-dog');
inbreadDog.nextElementSibling; // gets Larry the Lion
inbreadDog.previousElementSibling; // returns null because there are no previous siblings

teamSalmon.children[1]; // div.roster
teamSalmon.children[1].children; // roster children

document
  .querySelector(".team.salmon .roster")
  .children.namedItem("nina-the-ninja");

toxicTim.parentElement; // roster
toxicTim.parentElement.parentElement; // team salmon
toxicTim.parentElement.parentElement.parentElement; // teams

document.querySelector('html').firstElementChild; // returns the first child to HTML
document.querySelector('html').lastElementChild; // returns the last child to HTML

// Matches
toxicTim.matches('h1'); // false
toxicTim.matches("#toxic-tim"); // true
toxicTim.matches("div"); // true
toxicTim.matches(".doggo.fighter"); // true
toxicTim.matches(".dsalfkjsalkf"); // false

// Closest
// <node>.closest('css-selector');
// The above 👆🏼searches for all the ancestors of (beginning with itself)
// for the first node that matches the line. If no matching ancestor node, then
// returns null. It can be thought as a reverse query selector.

toxicTim.closest("div"); // <div id="toxic-tim" class="doggo fighter">...</div>
toxicTim.closest(".team"); // <div class="team salmon">...</div>

// Styling nodes with JavaScript
toxicTim.style.border = "10px solid black"; 
// Styling each div in document
// divs.forEach(div => div.style.border = "10px solid brown");

// Styling for elements using bracket notation
toxicTim.style["background-color"] = "maroon";

getComputedStyle(toxicTim); // to get the actual computed style of a node

// Changing the content of nodes
// There are 4 properties that we use to change DOM content they are:
// .innerHTML, .innerText, .outerHTML, .outerText

teamSalmon.innerHTML; // returns the innerHTML of teamSalmon node
teamSalmon.innerText; // returns all of the content within the HTML tags

// The versions with .outer are nearly the same, except they include the node itself as well

// Updating IDs and Classes
toxicTim.id; // // #toxic-tim 
toxicTim.classList; //  ["doggo", "fighter", value: "doggo fighter"]
toxicTim.className; // "doggo fighter"
toxicTim.href; // undefined because toxicTim doesn't have 'href' attribute

// changing (updating) attributes
// toxicTim.id = 'what-so-ever';

document.querySelectorAll("label")[0].classList.add("selected"); // this will add selected class to the classlist of first label

toxicTim.classList.add("dead"); // adds "dead" class to the list of toxicTim's classes
toxicTim.classList.remove("dead"); // removes "dead" class from toxicTim's classes

// adding multiple classes
toxicTim.classList.add("first", "second");

// remove multiple classes
toxicTim.classList.remove("first", "second");

// getAttribute, setAttribute
toxicTim.getAttribute("class"); // returns toxicTim class attribute
// toxicTim.setAttribute("class", "dead"); // sets toxicTim class to dead

// hasAttribute
toxicTim.hasAttribute("class"); // true
toxicTim.hasAttribute("href"); // false

// removeAttribute
// toxicTim.removeAttribute("class"); // removes toxicTim's class attribute

// Remove nodes (elements)
// toxicTim.remove(); // that will remove toxicTim completely from DOM

// Exercise: Vandalise the Arena 
// 1. Change the color of all teams fo fuchsia
document.querySelectorAll(".team").forEach(team => (team.style.backgroundColor = "fuchsia"));

// 2. Rename all doggos to Rob the Slob
document.querySelectorAll(".doggo").forEach(doggo => (doggo.innerHTML = "<h1>Rob the Slob</h1>"));

// 3. Change all doggo pictures to that of a cat
document.querySelectorAll(".doggo").forEach(doggo => {
    doggo.style.backgroundImage = "url(https://pbs.twimg.com/profile_images/1080545769034108928/CEzHCTpI_400x400.jpg)";
});

// Create, clone, append
const drillBitDarel = document.createElement("div");
drillBitDarel.className = "doggo fighter";
drillBitDarel.id = "drill-bit-darel";
drillBitDarel.style.backgroundImage = "url(../images/drill-bit-darel.jpg)";

const teamTealRoster = document.querySelector(".team.teal .roster");
teamTealRoster.prepend("Hello World");
