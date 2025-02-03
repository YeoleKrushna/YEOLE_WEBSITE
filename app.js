let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');
let seeMoreButtons = document.querySelectorAll('.seeMore');
let backButton = document.getElementById('back');

nextButton.onclick = function() {
    showSlider('next');
};
prevButton.onclick = function() {
    showSlider('prev');
};

// Function to change the slider
let unAcceppClick;
const showSlider = (type) => {
    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';

    carousel.classList.remove('next', 'prev');
    let items = document.querySelectorAll('.carousel .list .item');
    if (type === 'next') {
        listHTML.appendChild(items[0]);
        carousel.classList.add('next');
    } else {
        listHTML.prepend(items[items.length - 1]);
        carousel.classList.add('prev');
    }
    clearTimeout(unAcceppClick);
    unAcceppClick = setTimeout(() => {
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
    }, 2000);
};

// Handle the "see more" button click
seeMoreButtons.forEach((button) => {
    button.onclick = function() {
        carousel.classList.remove('next', 'prev');
        carousel.classList.add('showDetail');
    };
});

// Handle the back button click to return from details view
backButton.onclick = function() {
    carousel.classList.remove('showDetail');
};

// Add event listener for keyboard navigation
document.addEventListener('keydown', function(event) {
    // Debugging the key press to make sure it's working
    console.log("Key pressed: " + event.key);  // This will print which key is being pressed.

    // Check for right arrow key (key code 39) and left arrow key (key code 37)
    if (event.key === 'ArrowRight') {
        console.log("Right arrow pressed");
        showSlider('next');  // Go right when the right arrow key is pressed
    } else if (event.key === 'ArrowLeft') {
        console.log("Left arrow pressed");
        showSlider('prev');  // Go left when the left arrow key is pressed
    }
});
