const toggler = document.querySelector('.toggler');
const toggling = document.querySelector('.toggling');
const container = document.querySelector('.container');
let start = document.getElementById('view');
let mode = document.getElementById('modal');
let end = document.getElementById('close');

end.onclick = function(event) {
    // container.classList.toggle('home');
    if (event.target == end) {
        mode.style.display = "none";
    }
}
start.onclick = function(e) {
    if (e.target == start) {
        mode.style.display = "block";
    }
}

// Get the modal
// var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

start.addEventListener('click', function(e) {
    e.preventDefault();
    displayForm();
})

function displayForm() {
    mode.classList.add('show');
}

toggler.addEventListener('click', function(e) {
    toggler.classList.toggle('active')
    container.classList.toggle('active')
    if (e.target == container) {
        toggler.classList.toggle('toggler');
    }
})
toggling.addEventListener('click', function(e) {
    toggling.classList.toggle('active')
    container.classList.toggle('active')
    if (e.target == container) {
        toggling.classList.toggle('toggling');
    }
})

// toggling.onclick = function(e) {
//     toggling.classList.toggle('active')
//     container.classList.toggle('active')
//     if (e.target == container) {
//         toggling.classList.toggle('toggling');
//     }
// }

let wordFlip = ["View your city road map", "Search for city by coordinate", "View your precise location", "Access your city master plan", "Get to the satellite view of your city"];
let wordIndex = 0;

let putWord = document.getElementById('flip');

function change() {
    putWord.innerHTML = wordFlip[wordIndex];
    wordIndex++;
    if (wordIndex == wordFlip.length) {
        wordIndex = 0;
    }
}
setInterval(change, 4000);