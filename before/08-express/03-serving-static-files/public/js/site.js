window.onbeforeunload = function() {
    console.log( 'So sad you are leaving. We hope to see you again!' );
    return false;
};