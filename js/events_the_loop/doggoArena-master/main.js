// JS: Events & The Loop

// Events
const toxicTim = document.querySelector("#toxic-tim");
const teamSalmon = document.querySelector(".team.salmon");

// <selected-node>.addEventListener

teamSalmon.addEventListener('click', event => {
    // console.log("==============================");
    // console.log("Team Salmon was clicked");
    // console.log("==============================");
    
    // The 'event' object contains a host of useful information about triggered
    // event including (but not limited to) the position of the cursor, which
    // modifier was held at the time (e..g shift, alt, cmd, etc.), which node was
    // clicked, at what datetime the eventwas triggered, etc.
    // console.log(event.type); // returns the type of event e.g. click, dblClick...
    // console.log(event.target); // refers to the node that originally triggered the event
    // In this case, a 'click' event that is where the cursor was located at the time of the click.
    // It will always be a descendant of the currentTarget node, or the currentTarget ndoe.
    // In this case, it is always going to be 'teamSalmon'
    // console.log(event.currentTarget); 
});

toxicTim.addEventListener('click', event => {
    // console.log("Toxic Tim was clicked!");
    const { target, currentTarget, clientX, clientY } = event;
    console.log("target: ", target);
    console.log("currentTarget: ", currentTarget);
    console.log(`Cursor Position: ${clientX}, ${clientY}`);

    // This will refer to Window because we are using arrow function above
    // If not arrow function, it will refer to function
    console.log("this: ", this);
});

const printMessage = element => {
    // console.log("element: ", element);
    // console.log("Printing a Message");
};

document.addEventListener("click", () => {
    // console.log("clicked the document!");
});

// Exercise
const doggoNames = document.querySelectorAll(".doggo.fighter h1");
doggoNames.forEach(doggo => {
    doggo.addEventListener('click', event => {
        const { currentTarget } = event;
        console.log(`${currentTarget.innerText} was clicked!`)
    });
});

// querySelector will return null if there isn't one (e.g. <p>)
const h1 = document.querySelector("h1");
if (h1 instanceof Node) {
    h1.addEventListener("click", () => {
        console.log("heading was clicked!")
    });
};

/*
function c() {
    console.log('c');
    setTimeout(function getLname() {
        console.log("Sulaiman")
    }, 0);
}

function b() {
    console.log('b');
    setTimeout(function getFname() {
        console.log('Hindreen');
    }, 0);
    c();
}

function a() {
    console.log('a');
    b();
}

a();
*/

const doggos = document.querySelectorAll(".doggo.fighter");

doggos.forEach(doggo => {
    doggo.addEventListener("click", event => {
        // const clickedDoggo = event.currentTarget;
        // const team = clickedDoggo.parentElement;
        // team.append(clickedDoggo);
    })
});

// Mouse Events
doggos.forEach(doggo => {
    // Double click
    doggo.addEventListener('dblclick', event => {
        console.log(`${event.currentTarget.id} was double-clicked!`);
        event.currentTarget.classList.toggle("inverted"); // toggle will add or remove
        console.log("event: ", event);
    });
    // Mouse down
    doggo.addEventListener("mousedown", event => {
        event.currentTarget.classList.add("flipped");
    });
    // Mouse up
    doggo.addEventListener("mouseup", event => {
        event.currentTarget.classList.remove("flipped");
    });
    // Mouse Over
    doggo.addEventListener("mouseover", event => {
        event.currentTarget.classList.add("grayscale");
    });
    // Mouse Out
    doggo.addEventListener("mouseout", event => {
        event.currentTarget.classList.remove("grayscale");
    });
});

// Mouse move
const coorDiv = document.createElement('div');
coorDiv.style.position = "fixed";
coorDiv.style.bottom = 0;
coorDiv.style.backgroundColor = "white";

document.querySelector('body').append(coorDiv);
document.addEventListener("mousemove", event => {
    const position = `${event.clientX}, ${event.clientY}`;
    coorDiv.innerText = position;
});

// Type Loudly & Explode on Submit
const random = n => Math.ceil(Math.random() * n);
const keySound = () => new Audio(`sounds/vintage-keyboard-${random(5)}.wav`);

document.querySelectorAll('input').forEach(inputField => {
    inputField.addEventListener("input", event => {
        keySound().play();
    });
});

const explosion = () => new Audio("sounds/small-explosion.wav")
const submit = document.querySelector("form");
submit.addEventListener("submit", event => {
    // preventDefault() prevents default reload behavior of browser
    event.preventDefault();
    explosion().play();
});

// Add image preview
const applicantPreview = document.querySelector("#applicant-preview .doggo.blank");

// document
//     .querySelector('input[name="picture-url"]')
//     .addEventListener("input", event => {
//         const imageUrl = event.currentTarget.value;
//         applicantPreview.style.backgroundImage = `url(${imageUrl})`;
//     });

// DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
    document
    .querySelector("#application-form")
    .addEventListener("submit", event => {
        event.preventDefault();
        // To easily access all of the input field values within a form, use the FormData constructor,
        // passing in the form as an argument.
        const form = event.currentTarget;
        const formData = new FormData(form);
        // To get the value of the input fields in the form, we use the 'get' method on the
        // formData instance.
        formData.get("name");
        formData.get("picture-url");
        formData.get("team-name");

        const blankDoggo = document.querySelector("#applicant-preview .doggo.blank");
        blankDoggo.style.backgroundImage = `url(${formData.get("picture-url")})`;
        blankDoggo.querySelector("h1").innerText = formData.get("name");
        blankDoggo.style.border = `1px solid ${formData.get('team-name')}`;
    });
});

document
    .querySelector('input[name="name"]')
    .addEventListener("input", event => {
        const fieldValue = event.currentTarget.value;
        if (fieldValue === "panic") {
            window.location.replace("http://hackertyper.net");
        };
    });

// Keyboard events
document.addEventListener("keydown", event => {
    console.log(event);
    const {
        currentTarget,
        target,
        keyCode,
        altKey,
        shiftKey,
        metaKey,
        key
    } = event;

    if (altKey && shiftKey && keyCode == 73) { // alt + shift + i
        window.location.href = "http://nyan.cat"
    }
});

document.addEventListener("DOMContentLoaded", event => {
    console.log("DOM content loaded");
});