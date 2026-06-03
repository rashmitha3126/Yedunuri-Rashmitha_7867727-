$(document).ready(function(){

    // Handle click event
    $('#registerBtn').click(function(){

        $('#message')
            .text('Registration Successful!')
            .fadeIn();

        // Fade out after 3 seconds
        setTimeout(function(){
            $('#message').fadeOut();
        },3000);
    });

    // Hide event card
    $('#hideBtn').click(function(){
        $('.event-card').fadeOut();
    });

});