const timers = [
  { //timer 0
    name: 'Save eyes',
    minutes: 0,
    seconds: 5,
    message: 'Do not look at monitor, please.'
  },
  { //timer 1
    name: 'Backbone care',
    minutes: 2,
    seconds: 2,
    message: 'Go for a walk, please.'
  },
  { //timer 2
    name: 'Wrist-reminder',
    minutes: 3,
    seconds: 30,
    message: 'Stretch your wrist, please.'
  },
  { //timer 3
    name: 'Glass of water',
    minutes: 4,
    seconds: 4,
    message: 'Drink glass of water/tea, please.'
  },
  { //timer 4
    name: 'Fifth timer',
    minutes: 5,
    seconds: 5,
    message: 'Do something, please.'
  },
  { //timer 5
    name: 'Sixth timer',
    minutes: 6,
    seconds: 6,
    message: 'Do something else, please.'
  }
];

const startBtn = document.getElementById('turnOnTimers');
const numberOfTimers = document.querySelectorAll('.col').length;
// const box = document.querySelector('#col-');

// this function is to dinamically rendering HTML elements, for now I am not using it
function load_home() {
  document.querySelector("#container").innerHTML = '<object type="text/html" data="home.html"></object>';
}

// this function is to dinamically rendering HTML elements, for now I am not using it
function addElement() {
  const container = document.getElementById('container');
  const label = document.createElement("label");
  const name = document.createElement('h2');
  const checkbox = document.createElement('input');
  const timer = document.createElement('div');
  const minutes = document.createElement('span');
  const seconds = document.createElement('span');
  const progressBar = document.createElement('div');
  const progressDone = document.createElement('div');

  label.className = 'col';
  label.htmlFor = 'timerCheckbox-0';
  label.id = 'first';

  name.id = 'timerName-0';

  checkbox.type = 'checkbox';
  checkbox.id = 'timerCheckbox-0';

  timer.id = 'timer-0';

  minutes.id = 'minutes-0';

  seconds.id = 'seconds-0';

  progressBar.className = 'progress';

  progressDone.className = 'progress-done';
  // label. TODO find out how to add for into label


  // and give it some content 
  const newContent = document.createTextNode(':');

  // add the text node to the newly created div
  // newDiv.appendChild(newContent);  

  // add the newly created element and its content into the DOM 
  // const currentDiv = document.getElementById("first");
  // container.appendChild(label);
  container.insertBefore(label, container.firstChild)
  label.append(name);
  label.append(checkbox);
  label.append(timer);
  label.append(progressBar);

  timer.append(minutes);
  timer.append(newContent);
  timer.append(seconds);

  progressBar.append(progressDone);
  // document.body.insertBefore(newDiv, currentDiv); 
}

document.addEventListener('DOMContentLoaded', () => {
  setAllTimers();
})

function setAllTimers() {
  for (let i = 0; i < numberOfTimers; i++) {
    const namePosition = document.querySelector('#timerName-' + i);
    const minutesPosition = document.querySelector('#minutes-' + i);
    const secondsPosition = document.querySelector('#seconds-' + i);
    const minutes = timers[i].minutes;
    const seconds = timers[i].seconds;

    namePosition.innerHTML = timers[i].name;
    addZeroToNumberSmallerThanTen(minutes, minutesPosition);
    addZeroToNumberSmallerThanTen(seconds, secondsPosition);

    document.getElementById('col-' + i).addEventListener('click', () => {
      highlightClicked(i);
    })
  }
}

function addZeroToNumberSmallerThanTen(number, position = 0) {
  if (number < 10) {
    if (position) {
      position.innerHTML = '0' + number;
    } else {
      return number = '0' + number;
    }
  } else {
    if (position) {
      position.innerHTML = number;
    } else {
      return number;
    }
  }
}

function highlightClicked(clickedBox) {
  const checkbox = document.querySelector('#timerCheckbox-' + clickedBox);
  const box = document.querySelector('#col-' + clickedBox);
  if (!called) {
    if (checkbox.checked == true) {
      highlightBox(box);
    } else {
      stopLightBox(box);
    }
  } else {
    return
  }
}

function highlightBox(box) {
  box.style.boxShadow = '0 5px 15px rgba(0,0,0,1)';
  box.style.transition = '0.6s';
}

function stopLightBox(box) {
  box.style.boxShadow = 'none';
  box.style.transition = '0.6s';
}

startBtn.addEventListener('click', () => {
  for (let i = 0; i < numberOfTimers; i++) {
    const checkbox = document.querySelector('#timerCheckbox-' + i);
    
  }

  if (1) {
    if (!called) {
      countdown()
    } else {
      alert('Countdown was started')
    }
  } else {
    alert('You didn\'t selected any timer')
    return
  }
});

function beep() {
  var snd = new Audio("data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");
  snd.play();
}

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

function fadeNotSelectedBoxes() {
  for (let i = 0; i < numberOfTimers; i++) {
    const checkbox = document.querySelector('#timerCheckbox-' + i);
    const box = document.querySelector('#col-' + i);
    if (!checkbox.checked) {
      box.style.cursor = 'not-allowed';
      box.style.backgroundColor = 'rgb(43, 226, 147, 0.3)';
      box.style.color = 'rgb(255, 255, 255, 0.3)';
    }
  }
}

var interval, called = false;
function countdown() {
  let timerNumber, timersSelected;
  timersSelected = getSelectedTimers();
  var numberOfSelectedTimers = timersSelected.length;
  for (let i = 0; i < numberOfTimers; i++) {
    const box = document.querySelector('#col-' + i);
    box.style.cursor = 'default';
    // toto treba doladit, aby sa divka, ktore nie su vybrane dali ako faded
    box.style.opacity = 1;
  }

  fadeNotSelectedBoxes();

  called = true;

  for (timerNumber = 0; timerNumber < numberOfSelectedTimers; timerNumber++) {
    startBtn.innerText = 'New timers selection';

    const selectedTimer = timersSelected[timerNumber]
    const minutesPosition = document.getElementById('minutes-' + selectedTimer);
    const secondsPosition = document.getElementById('seconds-' + selectedTimer);

    if (minutesPosition === null && secondsPosition === null) {
      alert('Chod do pice!!!')
    }

    const progress = document.querySelector('#progress-done-' + selectedTimer);
    const numberOfMinutes = timers[selectedTimer].minutes;
    const numberOfSeconds = timers[selectedTimer].seconds;
    const timer = document.querySelector('#timer-' + selectedTimer);
    const timerDoneText = document.querySelector('#timerDone-' + selectedTimer);
    const resetBtn = document.querySelector('#resetBtn-' + selectedTimer);
    let currentSeconds = (60 * numberOfMinutes) + numberOfSeconds;
    const totalSeconds = currentSeconds;

    setInterval(() => {
      let minutes = Math.round((currentSeconds - 30) / 60);
      let remainingSeconds = currentSeconds % 60;
      let remainingPercentage = (currentSeconds / totalSeconds) * 100;

      // TODO find out how to implement out functions into setInterval function
      // addZeroToNumberSmallerThanTen(minutes);
      // addZeroToNumberSmallerThanTen(remainingSeconds);

      if (minutes < 10) {
        minutes = '0' + minutes;
      }
      // add 0 if there is less then 10 seconds
      if (remainingSeconds < 10) {
        remainingSeconds = '0' + remainingSeconds;
      }

      // stop counting at 0
      if (currentSeconds <= 0) {
        clearInterval(remainingSeconds = 0);
        clearInterval(minutes = 0);
        progress.style.width = 0 + '%';
        timer.textContent = timers[selectedTimer].message;
        beep();
        return
        // timer.style.display = 'none';
        // timerDoneText.innerHTML = 'Time left! You should do...';
      } else { //display current time
        minutesPosition.innerHTML = minutes;
        secondsPosition.innerHTML = remainingSeconds;
        progress.style.width = remainingPercentage + '%';
        currentSeconds--;
      }
    }, 1000)
  }
}