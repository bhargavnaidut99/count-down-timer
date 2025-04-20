const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const startButtonEl = document.getElementById("startButton");
const stopButtonEl = document.getElementById("stopButton");
const resetButtonEl = document.getElementById("resetButton");
const shortBreakButtonEl = document.getElementById("shortBreakButton");
const longBreakButtonEl = document.getElementById("longBreakButton");

let timerInterval = null;
let totalSeconds = 25 * 60;

function updateDisplay() {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    minutesEl.textContent = String(mins).padStart(2, "0");
    secondsEl.textContent = String(secs).padStart(2, "0");
}

startButtonEl.onclick = () => {
    if (timerInterval) return; // already running
    timerInterval = setInterval(() => {
        if (totalSeconds > 0) {
            totalSeconds--;
            updateDisplay();
        } else {
            clearInterval(timerInterval);
            timerInterval = null;
        }
    }, 1000);
};

stopButtonEl.onclick = () => {
    clearInterval(timerInterval);
    timerInterval = null;
};

resetButtonEl.onclick = () => {
    clearInterval(timerInterval);
    timerInterval = null;
    totalSeconds = 25 * 60;
    updateDisplay();
};

shortBreakButtonEl.onclick = () => {
    clearInterval(timerInterval);
    timerInterval = null;
    totalSeconds = 5 * 60;
    updateDisplay();
};

longBreakButtonEl.onclick = () => {
    clearInterval(timerInterval);
    timerInterval = null;
    totalSeconds = 15 * 60;
    updateDisplay();
};

// initialize on load
updateDisplay();
