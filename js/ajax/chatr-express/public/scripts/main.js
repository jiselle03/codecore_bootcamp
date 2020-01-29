// Write chatr code here!

// Basic GET Request to get all messages
// fetch("/messages")
//   .then(res => res.json())
//   .then(console.info);

// fetch("/messages")
//     .then(res => res.text())
//     .then(console.info);

const loadMessages = () => {
    fetch("/messages")
        .then(res => res.json())
        .then(messages => {
            const messagesContainer = document.querySelector("#messages");
            let htmlString = "";
            const flagFilter = document.querySelector("#flag-filter");

            if (flagFilter.getAttribute("class", "filtered")) {
                messages.filter(message => {
                    return message.flagged;
                }).forEach(message => {
                    htmlString += `
                        <li>
                            <small>${message.username}:</small>
                            ${message.body}
                            <i data-id=${message.id} class="delete-link">x</i>
                            <i data-id=${message.id} data-flagged=${message.flagged} class="fas fa-flag"></i>
                        </li>
                        `;   
                });
                messagesContainer.innerHTML = htmlString;
            } else {
                messages.forEach(message => {
                    let flag;
                    if (message.flagged) {
                        flag = "fas";
                    } else {
                        flag = "far";
                    };
    
                    htmlString += `
                    <li>
                        <small>${message.username}:</small>
                        ${message.body}
                        <i data-id=${message.id} class="delete-link">x</i>
                        <i data-id=${message.id} data-flagged=${message.flagged} class="${flag} fa-flag"></i>
                    </li>
                    `;
                });
                messagesContainer.innerHTML = htmlString;
            };
        });
};

const refreshIntervalms = 3000;
document.addEventListener("DOMContentLoaded", () => {
    loadMessages();
    setInterval(loadMessages, refreshIntervalms);

    const fd = new FormData();
    fd.set('body', 'Hello, World!');

    // fetch("/messages", {
    //     body: fd,
    //     method: "POST"
    //   });

    // const form = document.querySelector("#new-message");
    // form.addEventListener("submit", () => {
    //     fetch("/messages", {
    //     method: "POST",
    //     body: new FormData(form)
    //     });
    // });

    const newMessageForm = document.querySelector("#new-message");
    newMessageForm.addEventListener("submit", event => {
        event.preventDefault();
        const fd = new FormData(event.currentTarget);
        // create a message

        createMessage(fd);
    
    });

// Edit a message
    const messagesContainer = document.querySelector("#messages");
    messagesContainer.addEventListener("click", event => {
        if(event.target.matches("i.fa-flag")) {
            const { id, flagged } = event.target.dataset;
            editMessage(id, flagged);
        };
    });

//  Delete a message
    // const messagesContainer = document.querySelector("#messages");
    messagesContainer.addEventListener("click", event => {
        if(event.target.matches("i.delete-link")) {
            // Look for the id of the message to delete
            const { id } = event.target.dataset;
            // Send fetch request to delete the message
            deleteMessage(id);
        };
    });
    
    const flagFilter = document.querySelector("#flag-filter");
    flagFilter.addEventListener("click", () => {
            flagFilter.classList.toggle("filtered");
            if (flagFilter.getAttribute("class", "filtered")) {
                flagFilter.innerText = "All Messages";
            } else {
                flagFilter.innerText = "Flagged Messages";
            }
        });
});


// createMessage
const createMessage = message => {
    fetch("/messages", {
      method: "POST",
      body: message
    }).then(() => {
        loadMessages();
        document.querySelector("#new-message").reset();
    });
  };

// deleteMessage
const deleteMessage = id => {
    fetch(`/messages/${id}`, {
      method: "DELETE"
    }).then(() => {
      loadMessages();
    });
};

// editMessage
const editMessage = (id, flagged) => {
    if (flagged === "true") {
        fetch(`/messages/${id}`, {
            method: "PATCH",
            body: JSON.stringify({ "flagged": false }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(() => {
            loadMessages();
        });
    } else {
        fetch(`/messages/${id}`, {
            method: "PATCH",
            body: JSON.stringify({ "flagged": true }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(() => {
            loadMessages();
        });
    };
};

// Chat Battle

// 1. Create a new message with your first name and your favourite tv show as body.
// fetch('/messages', {
//     method: "POST",
//     body: JSON.stringify({ body: "Jiselle Legends of tomorrow" }),
//     headers: {
//         "Content-Type": "application/json"
//     }
// });

// 2. Use fetch to count all messages
// fetch("/messages").then(res => res.json()).then(messages => console.log(messages.length));

// 3. Replace the body of someone else's message with something else
// fetch("/messages/id", { // use correct id number
//     method: "PATCH",
//     body: JSON.stringify({ body: "Jiselle Legends of tomorrow" }),
//     headers: {
//         "Content-Type": "application/json"
//     }
// });

// 4. Delete a message
// fetch("/messages/id", { // use correct id number
//     method: "DELETE"
// }).then(() => console.log("Message Deleted!"));

// 5. Write a function that can copy a message using only its "ID" as argument
// const copyMessage = id =>
//     fetch("/messages")
//       .then(res => res.json())
//       .then(messages => messages.filter(message => message.id === id))
//       .then(message => message);

