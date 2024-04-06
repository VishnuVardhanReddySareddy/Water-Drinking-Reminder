let timerInterval;
let countdown;

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('startButton').addEventListener('click', startReminder);
    document.getElementById('stopButton').addEventListener('click', stopReminder);
});

function startReminder() {
    const intervalInput = document.getElementById('interval');
    const interval = parseInt(intervalInput.value, 10);
    
    if (isNaN(interval) || interval <= 0) {
        alert('Please enter a valid interval.');
        return;
    }

    clearInterval(timerInterval);
    countdown = interval * 60; // Convert minutes to seconds
    updateTimerDisplay();

    timerInterval = setInterval(() => {
        countdown--;
        if (countdown <= 0) {
            alert('Time to drink water!');
            clearInterval(timerInterval);
            countdown = interval * 60; // Reset countdown
            updateTimerDisplay();
        } else {
            updateTimerDisplay();
        }
    }, 1000);
}

function stopReminder() {
    clearInterval(timerInterval);
    countdown = 0;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const minutes = Math.floor(countdown / 60);
    const seconds = countdown % 60;
    const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    document.getElementById('timer').textContent = formattedTime;
}
