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

// 3
const refreshQuestions = () => Question.all().then(questions => renderQuestions(questions));

// 2
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

document.addEventListener("DOMContentLoaded", () => {
    // 1
    document.querySelector(".navbar").addEventListener("click", event => {
        event.preventDefault();
        const link = event.target.closest("[data-target]");
        if (link) {
            event.preventDefault();
            const targetPage = link.getAttribute("data-target");
            // 2
            navigateTo(targetPage, link);
        }
    });
});