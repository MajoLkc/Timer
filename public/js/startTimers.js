var start = document.querySelector('#turnOnTimers');
var start = document.querySelector('#resetBtn-0');

var start = document.querySelector();
var start = document.querySelector();
var start = document.querySelector();


/*
let timerIndex;
const numberOfTimers = document.querySelectorAll('.col').length;

function getAllNumbers(id) {
  var numbers = [];
  for (timerIndex = 0; timerIndex < numberOfTimers; timerIndex++) {
    numbers.push(Number(document.querySelector(id + timerIndex).textContent));
  }
  return numbers;
};

const staticVariables = {
  numbersOfMinutes: getAllNumbers('#minutes-'),
  numbersOfSeconds: getAllNumbers('#seconds-')
};

function getSelectedTimers() {
  let checkbox, numberOfTimer, timersSelected = [];
  for (numberOfTimer = 0; numberOfTimer < numberOfTimers; numberOfTimer++) {
    checkbox = document.querySelector('#timerCheckbox-' + numberOfTimer).checked;
    if (checkbox) {
      timersSelected.push(numberOfTimer);
    }
  }
  return timersSelected;
}

function selectNumberFromId(id) {
  var str = id;
  var splitId = str.split("-");
  var number = splitId[1];
  return number;
}

function resetCountdown(buttonId) {
  buttonId = selectNumberFromId(buttonId);
  const progress = document.querySelector('#progress-done-' + buttonId);
  const minutesPosition = document.getElementById('minutes-' + buttonId);
  const secondsPosition = document.getElementById('seconds-' + buttonId);
  const numberOfMinutes = staticVariables.numbersOfMinutes[buttonId];
  const numberOfSeconds = staticVariables.numbersOfSeconds[buttonId];
  const timer = document.querySelector('#timer-' + buttonId);
  const timerDoneText = document.querySelector('#timerDone-' + buttonId);
  const resetBtn = document.querySelector('#resetBtn-' + buttonId);
  let seconds = (60 * numberOfMinutes) + numberOfSeconds;
  const fullSeconds = seconds;

  progress.style.width = 100 + '%';
  minutesPosition.innerHTML = numberOfMinutes;
  secondsPosition.innerHTML = numberOfSeconds;

  setInterval(function () {
    let minutes = Math.round((seconds - 30) / 60);
    let remainingSeconds = seconds % 60;
    let remainingPercentage = (seconds / fullSeconds) * 100;

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
      minutesPosition.innerHTML = minutes;
      secondsPosition.innerHTML = remainingSeconds;
      progress.style.width = remainingPercentage + '%';
      seconds--;
    }
  }, 1000)
}

function countdown() {
  let timerNumber, timersSelected;
  timersSelected = getSelectedTimers();
  var numberOfSelectedTimers = timersSelected.length;

  for (timerNumber = 0; timerNumber < numberOfSelectedTimers; timerNumber++) {
    const progress = document.querySelector('#progress-done-' + timersSelected[timerNumber]);
    const minutesPosition = document.getElementById('minutes-' + timersSelected[timerNumber]);
    const secondsPosition = document.getElementById('seconds-' + timersSelected[timerNumber]);
    const numberOfMinutes = staticVariables.numbersOfMinutes[timersSelected[timerNumber]];
    const numberOfSeconds = staticVariables.numbersOfSeconds[timersSelected[timerNumber]];
    const timer = document.querySelector('#timer-' + timersSelected[timerNumber]);
    const timerDoneText = document.querySelector('#timerDone-' + timersSelected[timerNumber]);
    const resetBtn = document.querySelector('#resetBtn-' + timersSelected[timerNumber]);
    let seconds = (60 * numberOfMinutes) + numberOfSeconds;
    const fullSeconds = seconds;

    resetBtn.style.display = 'block';

    setInterval(function () {
      let minutes = Math.round((seconds - 30) / 60);
      let remainingSeconds = seconds % 60;
      let remainingPercentage = (seconds / fullSeconds) * 100;

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
        minutesPosition.innerHTML = minutes;
        secondsPosition.innerHTML = remainingSeconds;
        progress.style.width = remainingPercentage + '%';
        seconds--;
      }
    }, 1000)
  }
}


document.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.querySelector('#turnOnTimers');
  startBtn.addEventListener('click', countdown);
})
*/