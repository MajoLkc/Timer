document.addEventListener('DOMContentLoaded', () => {
  const progress = document.querySelector('.progress-done');
  const displayMinutes = document.getElementById('minutes-1');
  const displaySeconds = document.getElementById('seconds-1');
  const startBtn = document.querySelector('#turnOnTimers');
  const numberOfMinutes = Number(document.getElementById('minutes-1').textContent);
  const numberOfSeconds = Number(document.getElementById('seconds-1').textContent);
  const timer = document.querySelector('.timer');
  const timerDoneText = document.querySelector('#timerDone-1');
  let seconds = (60 * numberOfMinutes) + numberOfSeconds;
  const fullSeconds = seconds;

  function countdown() {
    setInterval(function () {
      let minutes = Math.round((seconds - 30) / 60);
      let remainingSeconds = seconds % 60;


      let remainingPercentage = (seconds / fullSeconds) * 100;

      // progress.style.width = remainingPercentage + '%';

      if (minutes < 10) {
        minutes = '0' + minutes;
      }

      // add 0 if there is less then 10 seconds
      if (remainingSeconds < 10) {
        remainingSeconds = '0' + remainingSeconds;
      }

      // stop counting at 0
      if (seconds <= 0) {
        clearInterval(remainingSeconds = 0);
        clearInterval(minutes = 0);
        progress.style.width = 0 + '%';
        timer.style.display = 'none';
        timerDoneText.innerHTML = 'Time left! You should do...';
      } else { //display current time
        displayMinutes.innerHTML = minutes;
        displaySeconds.innerHTML = remainingSeconds;
        progress.style.width = remainingPercentage + '%';
        seconds--;
      }
    }, 1000)
  }
  startBtn.addEventListener('click', countdown)
})