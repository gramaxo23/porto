var modal = document.getElementById('contactFormModal');

var btn = document.querySelectorAll('.cta .btn')[0];

var span = document.getElementsByClassName('close-button')[0];

btn.addEventListener('click', function(event) {
    if (window.innerWidth > 768) {
        event.preventDefault();
        modal.style.display = "block";
    }
})

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
