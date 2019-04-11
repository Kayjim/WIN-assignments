$('#newtodo').keyup(e => e.keyCode == 13 ? $('#submit').click() : null);
$('#submit').click(e => $('<li>').text($('#newtodo').val()).insertBefore($('#newtodo').val('').parent()));
$('ul').on('click', 'li:not(#newtodoli)', e => $(e.target).css({'text-decoration': 'line-through', 'animation': 'disappear 1.1s'}).delay(1000).queue(n => e.target.remove()));

/*
// Explanation:
$('#newtodo').keyup(e => // When a key is pressed in the input box:
    e.keyCode == 13          // Check if that key is the enter key.
    ? $('#submit').click()   // If it is, click the button.
: null); // Else do nothing.

$('#submit').click(e => // When the button is clicked:
    $('<li>')                      // Create an <li> element,
        .text($('#newtodo').val()) // set its text to the value of the input box,
        .insertBefore(             // and insert the new element before
            $('#newtodo').val('').parent() // the parent <li> of the input box, but first clear the input box.
        )
);

$('ul').on('click', // When anthing inside the ul is clicked:
    'li:not(#newtodoli)', // Check if it matches this selector (li without the id "newtodoli") and if it does:
    e => $(e.target)      // Get the element that was clicked,
        .css({'text-decoration': 'line-through', 'animation': 'disappear 1.1s'}) // apply this CSS to it,
        .delay(1000).queue(n => e.target.remove())                               // then after a 1s delay, remove the element.
);
*/