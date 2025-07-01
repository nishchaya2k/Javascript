const progressBar = document.querySelector('.progress-bar');
const startButton = document.querySelector('#strt');

let progress = 0;
let isPaused = false;
let timeoutId;

function updateProgress() {
    if (!isPaused) {
        if (progress <= 100) {
            progressBar.style.width = `${progress}%`;
            progress++;
            timeoutId = setInterval(updateProgress, 100);
        } else {
            progress = 100;
            progressBar.style.width = '100%';
        }
    }
}

startButton.addEventListener('click', () => {
    if (startButton.textContent === 'Pause') {
        isPaused = true;
        clearInterval(timeoutId);
        startButton.textContent = 'Start';
    } else {
        startButton.textContent = 'Pause';
        isPaused = false;
        if (progress < 100) {
            updateProgress();
        }
    }
});




/*
const progressBar = document.querySelector('.progress-bar');
const startButton = document.querySelector('#strt');

startButton.addEventListener('click', () => {
    let progress = 0;
    const interval = 100; // Update every 100ms
    const maxProgress = 100;
    
    // Clear any existing intervals to avoid multiple intervals running
    if (window.progressInterval) {
        clearInterval(window.progressInterval);
    }

    // Set up a new interval to increment the progress
    window.progressInterval = setInterval(() => {
        if (progress < maxProgress) {
            progress += 1;
            progressBar.style.width = `${progress}%`;
        } else {
            clearInterval(window.progressInterval);
        }
    }, interval);
});

*/

