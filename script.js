let time = 0; // Time in seconds
let running = false;
let interval;

const startButton = document.getElementById('start-btn');
const pauseButton = document.getElementById('pause-btn');
const resetButton = document.getElementById('reset-btn');
const timeDisplay = document.getElementById('time-display');

// Start/Resume button click event
startButton.addEventListener('click', () => {
    if (!running) {
        running = true;
        interval = setInterval(updateTime, 1000);
        startButton.textContent = 'Resume';
        pauseButton.disabled = false;
    }
});

// Pause button click event
pauseButton.addEventListener('click', () => {
    if (running) {
        running = false;
        clearInterval(interval);
        startButton.textContent = 'Start';
    }
});

// Reset button click event
resetButton.addEventListener('click', () => {
    running = false;
    clearInterval(interval);
    time = 0;
    timeDisplay.textContent = '00:00:00';
    startButton.textContent = 'Start';
    pauseButton.disabled = true;
});

// Update the time display
function updateTime() {
    time++;
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    timeDisplay.textContent = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
}

// Format time as MM:SS or HH:MM:SS
function formatTime(unit) {
    return unit < 10 ? '0' + unit : unit;
}
