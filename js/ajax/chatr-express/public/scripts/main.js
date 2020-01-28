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
            messages.forEach(message => {
                htmlString += `
                <li>
                    ${message.body}
                    <i data-id=${message.id} class="delete-link">x</i>
                </li>
                `;
            });
            messagesContainer.innerHTML = htmlString;
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

//  Delete a message
    const messagesContainer = document.querySelector("#messages");
    messagesContainer.addEventListener("click", event => {
        if(event.target.matches("i.delete-link")) {
            // Look for the id of the message to delete
            const { id } = event.target.dataset;
            // Send fetch request to delete the message
            deleteMessage(id);
        };
    })

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

// Chat Battle

// 1. Create a new message with your first name and your favourite tv show as body.
fetch('/messages', {
    method: "POST",
    body: JSON.stringify({ body: "Jiselle Legends of tomorrow" }),
    headers: {
        "Content-Type": "application/json"
    }
});

// 2. Use fetch to count all messages
fetch("/messages").then(res => res.json()).then(messages => console.log(messages.length));

// 3. Replace the body of someone else's message with something else
fetch("/messages/id", { // use correct id number
    method: "PATCH",
    body: JSON.stringify({ body: "Jiselle Legends of tomorrow" }),
    headers: {
        "Content-Type": "application/json"
    }
});

// 4. Delete a message
fetch("/messages/id", { // use correct id number
    method: "DELETE"
}).then(() => console.log("Message Deleted!"));

// 5. Write a function that can copy a message using only its "ID" as argument
const copyMessage = id =>
    fetch("/messages")
      .then(res => res.json())
      .then(messages => messages.filter(message => message.id === id))
      .then(message => message);

