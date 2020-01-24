// JS: jQuery

// Selecting nodes
// The $ function from jQuery could be thought of like the following:
// const $ = query => document.querySelectorAll(query);
// To be clear, that is not how it is implemented, but it will return
// a collection of jQuery nodes similar to how document.querySelectorAll
// returns a collection of HTML nodes.

// $('css-selector')
// It returns a list of nodes (jQuery list) that contains all of the
// nodes that match the 'css-selector'

// select the 2nd button
$('button-2');
// select all anchor tags
$('li a');
// select the small grey circle shape
$('.small.grey.circle.shape');
// count the number of blue circles
$('.blue.circle.shape').length;

// Attributes, Classes, and Removal
// Set href attribute of all links on the page to 'http://nyan.cat'
$('li a').attr('href', 'http://nyan.cat');

// Remove the blue class from all shapes and replace it with the red class.
$('.blue.shape').removeClass('blue').addClass('red');

// Set the class attribute of all anchors to highlight with attr method
$('a').attr('class', 'highlight');
// Replace all circle classes with the diamond class
$('.circle.shape').removeClass('circle').addClass('diamond');
// Remove all shapes in the purple & green container
$('#purple-container .shape, #green-container .shape').remove();
$('#purple-container, #green-container').find('.shape').remove();

// Iterating over a jQuery collection
$('.shape').first();
$('.shape').last();
// get a node at a specific index
$('.shape').eq(2);
$('.shape').eq(3);
// This method returns a jQuery wrapped object so that we can still use
// all jQuery methods on it as opposed to:
$('shape')[0];

// HTML, children, and parent
// Get HTML of the reset button
$('#reset').html();
// HTML of all links
$('li a').map((index, link) => $(link).html());
// Change reset button to read "Launch Doggos!"
$('#reset').html("Launch Doggos!");
// Replace contents of every 'td' with 'yasss'
$('td').html('yasss');
// Select parents of all td tags
$('td').parent();

// Creating nodes, append, and prepend
// Create a small blue diamond with $
const smallBlueDiamond = $('<div class="small blue diamond shape"></div>');
// Append small blue diamonds to all containers
$('.container').append(smallBlueDiamond);
// Prepend a new link 'http://nyan.cat' to the link list
$('ul').prepend('<li><a href="http://nyan.cat">Nyan Cat</a></li>');
// Create a div with the 'container' class.
const container = $('<div class="container"></div>');
// Prepend it to the first section tag in the body.
$('body section').first().prepend(container);
// Append a 'small black circle' to the container.
$(container).append('<div class="small black circle shape></div>');

// document.addEventListener('DOMContentLoaded) is equivalent to:
// $(document).ready()
$(document).ready(function() {
    $('.blue.circle').on('mouseenter', event => {
        console.log('blue circle: go away!');
    });

    $('.blue.circle').on('mouseleave', event => {
        console.log('blue circle: goodbye!');
    });

    $("#button-1").on("click", event => {
        $(".shape").remove();
      });

    $("#button-2").on("click", function(event) {
        const { currentTarget } = event;
        $(this).attr("disabled", "true");
    });
    
    $("#button-3").on("click", event => {
        $("#button-message").html("Button 3 was clicked.");
    });

    $("tr").on("mouseenter", event => {
        const { currentTarget } = event;
        $(currentTarget).addClass("highlight");
    });

    $("tr").on("mouseleave", event => {
        const { currentTarget } = event;
        $(currentTarget).removeClass("highlight");
    });
});

