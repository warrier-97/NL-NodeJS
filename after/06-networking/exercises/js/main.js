window.onload = function() {
    let numberEl = document.getElementById( 'number' );
    let outputEl = document.getElementById( 'output' );

    let buttonEl = document.getElementById( 'btn-check-even-odd' );
    buttonEl.addEventListener( 'click', function() {
        let number = numberEl.value;

        if( number % 2 === 0 ) {
            outputEl.innerHTML = 'Even number';
            // // change style inline
            // outputEl.style.color = 'crimson';
            
            // add a class to change the color
            outputEl.className = 'even';
        } else {
            outputEl.innerHTML = 'Odd number';
            // outputEl.style.color = 'olive';
            outputEl.className = 'odd';
        }
    });
};