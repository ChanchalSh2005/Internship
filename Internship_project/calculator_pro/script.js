let display = document.getElementById('display');

function append(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}
// Select all buttons
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.add('bounce');
        setTimeout(() => button.classList.remove('bounce'), 300); // Remove class after animation
    });
});
// Select the audio element
const clickSound = document.getElementById('click-sound');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        clickSound.currentTime = 0; // Reset audio if it’s already playing
        clickSound.play();
    });
});


