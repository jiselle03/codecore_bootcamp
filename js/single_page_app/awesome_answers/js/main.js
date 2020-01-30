// JS Single Page Application
// Helper module to create a session

// Requests
const Question = {
    // Fetch all questions
    all() {
        return fetch(`${baseUrl}/questions`, {
            credencials: "include"
        }).then(res => res.json());
    },
    // Fetch a single question
    one(id) {
        return fetch(`${baseUrl}/questions/${id}`, {
            credentials: "include"
        }).then(res => res.json());
    },
    // Create a question
    create(params) {
        // params is an object that represents a question
        return fetch(`${baseUrl}/questions`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
        }).then(res => res.json());
    },
    // Update a question
    update(id, params) {
        return fetch(`${baseUrl}/questions/${id}`, {
            method: "PATCH",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
        }).then(res => res.json());
    },
    // Delete a question
    destroy(id) {
        return fetch(`${baseUrl}/questions/${id}`, {
            method: "DELETE",
            credentials: "include"
        }).then(res => res.json());
    }
};

const baseUrl = "http://localhost:3000/api/v1";
const Session = {
    create(params) {
        // params is an object that represents a user
        // { email: 'someone@domain.com', password: 'userpassword' }
        return fetch(`${baseUrl}/session`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
        }).then(res => res.json());
    }
};

// For testing purposes - never do this!
Session.create({ email: "js@winterfell.gov", password: "supersecret" });
// Session.create({ email: process.argv[2], password: process.argv[3] });

// Testing Endpoints
// Get all questions
// Question.all().then(questions => console.info(questions));
// Get a single question
// Question.one(180).then(question => console.info(question));

// Create a question
const newQuestion = {
    title: "New Question Title",
    body: "New Question Body"
};

// Question.create(newQuestion);

const updateQuestion = {
    title: "Updated Question Title",
    body: "Updated Question Body"
};  

// Question.update(205, updateQuestion);

// Delete a question
// Question.destroy(205);

// Listing all questions on the page
// 1. Add event listener to Questions link in navbar
// 2. Handle navigation
// 3. Fetch all questions when user clicks on Questions link in navigation bar
// 4. Render the questions page with fetched questions

// Listing single question
// Add an event listener to questions container to grab the clicked question
// Get the id of the question and send a get request to get the question
// Navigate to question show and render the fetched question

// Creating a question
// 1. Add an event listener to new question form
// 2. Get the form data with 'FormData' and use it to create a new question
// 3. reset the form and display the newly created question

// Update a question
// 1. Add an event listener to `edit` button in question-show container
// 2. Populate question-edit-form with current question data
// 3. add an event listener to question-edit-form
// 4. get the updated question data from the form and update the question
// 5. clear the form and display the updated question

// Delete a question
// 1. Add delete button question question show page
// 2. Add an event listener to it(we already have an event listener on question-show that we are using for 'edit' and we gonna add 'delete' as well)
// 3. Delete the question and redirect to questions index page


// Render the questions page with fetched questions
const renderQuestions = questions => {
    const questionsContainer = document.querySelector("div.question-list");
    const htmlString = questions.map(question => {
        return `
            <a class="item question-link" data-id="${question.id}" href="">
                <span>${question.id} - </span>
                ${question.title}
            </a>
        `
    }).join("");
    questionsContainer.innerHTML = htmlString;
};

// Fetch all questions when user clicks on Questions link in navigation bar
const refreshQuestions = () => Question.all().then(questions => renderQuestions(questions));

// Handle navigation 
const navigateTo = (id, clickedLink) => {
    if (id === "question-index") {
        // Get all questions
        refreshQuestions();
    }

    document.querySelectorAll(".page").forEach(node => {
        node.classList.remove("active");
    });

    document.querySelector(`.page#${id}`).classList.add("active");

    if (clickedLink) {
        document.querySelectorAll(".navbar a").forEach(link => {
            link.classList.remove("active");
        });

        clickedLink.classList.add("active");
    };
};

// Render a single question on the page
const renderQuestionDetails = question => {
    const questionDetailsContainer = document.querySelector("#question-show");
    const htmlString = `
        <div class="ui segment question-show-container">
            <div class="ui header">${question.title}</div>
            <p>${question.body}</p>
            <small>Asked by: ${question.author.full_name}</small>
            <a class="ui small right floated orange button link" data-target="question-edit" data-id="${question.id}" href="">Edit</a>
            <a class="ui small right floated red button link" data-target="question-delete" data-id="${question.id}" href ="">Delete</a>
            <div class="ui segment">
            <h3 class="ui horizontal divider">Answers</h3>
                <ul class="ui relaxed divided list">
                    ${question.answers
                        .map(answer => `<div class="item">${answer.body}</div>`)
                        .join("")}
                </ul>
            </div>
        </div>
    `;
    questionDetailsContainer.innerHTML = htmlString;
};

// Getting a single question and navigate to question show page
const getAndDisplayQuestion = id => {
    Question.one(id).then(question => {
        renderQuestionDetails(question);
        navigateTo("question-show");
    });
};

// Update a question
// Populate edit form with the question
const populateForm = id => {
    Question.one(id).then(question => {
        document.querySelector('#edit-question-form [name="id"]').value = question.id;
        document.querySelector('#edit-question-form [name="title"]').value = question.title;
        document.querySelector('#edit-question-form [name="body"]').value = question.body;
    });
};

// Add event listener
document.addEventListener("DOMContentLoaded", () => {
    // Getting all questions
    document.querySelector(".navbar").addEventListener("click", event => {
        event.preventDefault();
        const link = event.target.closest("[data-target]");
        if (link) {
            event.preventDefault();
            const targetPage = link.getAttribute("data-target");
            // Navigation
            navigateTo(targetPage, link);
        }
    });

    // For questions container to get a single question
    const questionsContainer = document. querySelector("div.question-list");
    questionsContainer.addEventListener("click", event => {
        const questionLink = event.target.closest("a.question-link");
        if (questionLink) {
            event.preventDefault();
            const { id } = questionLink.dataset;
            getAndDisplayQuestion(id);
        }
    });

    // Create a question
    const newQuestionForm = document.querySelector("#new-question-form");
    newQuestionForm.addEventListener("submit", event => {
        event.preventDefault();
        const fd = new FormData(event.currentTarget);
        const newQuestion = {
            title: fd.get("title"),
            body: fd.get("body")
        };

        Question.create(newQuestion).then(question => {
            // reset form
            newQuestionForm.reset();
            // display the newly created question
            getAndDisplayQuestion(question.id);
        });
    });

    // Update a question
    document.querySelector("#question-show").addEventListener("click", event => {
        const link = event.target.closest("[data-target]");
        if (link) {
            event.preventDefault();
            const targetPage = link.getAttribute("data-target");
            if (targetPage === "question-delete") {
              // Delete question
              Question.destroy(link.getAttribute("data-id")).then(() => {
                // Then navigate to question index
                navigateTo("question-index");
              });
            } else {
              // populate question edit form
              populateForm(link.getAttribute("data-id"));
              // navigate to question-edit page
              navigateTo(targetPage);
            }
          }
    });

    const editQuestionForm = document.querySelector("#edit-question-form");
    editQuestionForm.addEventListener("submit", event => {
        event.preventDefault();

        const fd = new FormData(event.currentTarget);
        const updatedQuestion = {
            title: fd.get("title"),
            body: fd.get("body")
        };

        Question.update(fd.get("id"), updatedQuestion).then(question => {
            // Clear the form
            editQuestionForm.reset();

            // Display updated question
            getAndDisplayQuestion(question.id);
        });
    });

});