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
    delete(id) {
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
