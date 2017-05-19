/**
 * Scripts for Assignment2
 *
 * author: Joshua Bauer + Kris Bebbington
 *email: joshybee@gmail.com & krisbebb@gmail.com
 *website: https://jaybeebauer.github.io/codefair
 *
 */

(function() {
/*
  FORM VALIDATION
*/
  $.validate({
    modules : 'html5'
  });

/*
  Privay Policy Modal
*/
// Get the modal
var modal = document.getElementById('privacymodal');

// Get the button that opens the modal
var btn = document.getElementById("privacymodallink");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    event.preventDefault();
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

})();
