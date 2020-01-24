$(document).ready(function() {
    $(".shape").on("mouseenter", event => {
        const { currentTarget } = event;
        $(currentTarget).toggleClass("highlight");
    });

    $(".shape").on("click", event => {
        const { currentTarget } = event;
        if ($(currentTarget).hasClass("small")) {
            $(currentTarget).css("visibility", "hidden");
        } else if ($(currentTarget).hasClass("medium")) {
            $(currentTarget).removeClass('medium').addClass('small');
        } else if ($(currentTarget).hasClass("large")) {
            $(currentTarget).removeClass('large').addClass('medium');
        };
    });

    $('table').prepend('<tr><td>0</td><td>-</td></tr>');

    $("input[type='submit']").on("click", event => {
        event.preventDefault();
        const message = $('input[type="text"]').val();
        $("#form-1").append(message);
    });
  
    $('#button-1').on("click", event => {
        $("#green-container").toggle();
    });
    $('#button-2').on("click", event => {
        $("#button-message").fadeOut();
    });
    $('#button-3').on("click", event => {
        $("#button-message").fadeIn();
    });
    $('#button-4').on("click", event => {
        $("#green-container").slideUp();
    });

    $(document).on("keydown", event => {
        const { keyCode } = event;
        if (keyCode === 71) {
            $(".shape").toggle();
        } else if (keyCode === 32) {
            $("#green-container").append('<div class="small blue circle shape"></div>');
        };
    });

    $('input[type="text"]').on("input", event => {
        const { currentTarget } = event;
        const characters = $(currentTarget).val();
        $('input[type="text"]').attr("maxlength", 14);
        $("#form-message").text(`${14 - characters.length} characters remaining`);
    });

});