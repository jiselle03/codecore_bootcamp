// AJAX - Asynchronous JavaScript and XML
// A set of techniques to fetch data from a server asynchronously without 
// interfering with the display and behavior of existing page. While our page loads,
// the "AJAX" fetches data from a server in the background and makes it available for
// our use.

// JSON - JavaScript Object Notation
// The most common way of storing and working with data in JavaScript. It contains two 
// main things: objects and arrays. The only difference here is that JSON object keys
// need to be wrapped in double quotes. We access them the same way we've learned for
// JavaScript objects and arrays.

// The browser has a built-in tool called "XMLHttpRequest" that will do all the heavy 
// lifting for us. With it, we establish a connection with the 'url' that we want to send
// or receive from.

// To use it, we need to create an instance of it.

const students = new XMLHttpRequest();
students.open("GET", "http://localhost:3000/students");
// Open method accepts two arguments, the first to specify whether we want to send data
// or receive data using HTTP verbs ("GET", "POST", "PATCH", "DELETE", etc.) and the 
// second argument is the URL.

students.onload = () => {
    console.log("Students: ", JSON.parse(students.responseText)[0]);
};

// Since we've defined our request, we need to send it.
students.send();

// Send a request to get all departments
const departments = new XMLHttpRequest();
departments.open("GET", "http://localhost:3000/departments");
departments.onload = () => console.log("Departments: ", JSON.parse(departments.responseText));
departments.send();

// Sending a request with jQuery AJAX
const fetchDataButton = document.querySelector("#fetch-data");

// fetchDataButton.addEventListener("click", () => {
//     $.ajax({
//         url: "http://localhost:3000/students",
//         success: (responseData, responseStatus, xhrAjaxRequest) => {
//             // console.info(responseStatus);
//             console.info("Data: ", responseData);
//         }
//     });
// });

// Fetch data using 'fetch'
// fetchDataButton.addEventListener("click", () => {
//     const response = fetch("http://localhost:3000/departments")
//         .then(res => res.json())
//         .then(res => console.info(res));
// });

// fetchDataButton.addEventListener("click", async () => {
//     const response = await fetch("http://localhost:3000/departments");
//     const jsonData = await response.json();
//     console.info("Data: ", jsonData);
// });

// Axios
// fetchDataButton.addEventListener("click", async () => {
//     const response = await axios.get("http://localhost:3000/students");
//     console.log("Data: ", response.data);
// });

// Use superagent to send a request to fetch all departments

fetchDataButton.addEventListener("click", async () => {
    superagent
        .get('http://localhost:3000/departments')
        .then(res => console.log(JSON.parse(res.text)));
});