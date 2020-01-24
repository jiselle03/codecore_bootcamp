// Event bubbling and capturing
// .on method only works in bubbling phase

const { log } = console;

$(document).ready(() => {
    // Bubble phase
    // In bubbling, the event is bubbled or going up from the inner most
    // to the upper most
    // Think of it as water bubbling and the bubbles are going up

    $("body").on("click", event => {
        event.preventDefault();
        log("Document was clicked!");
    });
    $(".events").on("click", event => {
        event.preventDefault();
        log("Events container was clicked!");
    });
    $(".event-bubbling-container").on("click", event => {
        event.preventDefault();
        event.stopPropagation();
        log("Event bubbling container was clicked!");
    });

    // Event capturing
    const captureButton = document.querySelector("#event-capturing-button");
    const eventCapturingContainer = document.querySelector(".event-capturing-container");
    const eventsContainer = document.querySelector(".events");
    const documentBody = document.querySelector("body");

    // To activiate capturing phase we need to pass 'true' argument to addEventListener function
    captureButton.addEventListener("click", event => {
        console.log("Event capturing button was clicked!");
    }, true);
    eventCapturingContainer.addEventListener("click", event => {
        console.log("Event capturing container was clicked!");
    }, true);
    eventsContainer.addEventListener("click", event => {
        console.log("Events container button was clicked!");
    });
    documentBody.addEventListener("click", event => {
        console.log("Body was clicked!");
    }, true);
});