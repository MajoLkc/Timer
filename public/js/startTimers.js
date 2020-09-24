document.addEventListener('DOMContentLoaded', () => {

  
  const startBtn = document.querySelector('#turnOnTimers');
  const numberOfTimers = document.querySelectorAll('.col').length;



  function countdown() {

    let timerNumber, checkbox, timersSelected = [];

    for (var numberOfTimer = 1; numberOfTimer <= numberOfTimers; numberOfTimer++) {
      checkbox = document.querySelector('#timerCheckbox-' + numberOfTimer).checked;
      if (checkbox) {
        timersSelected.push(numberOfTimer);
      }
    }

    console.log(timersSelected);

    var numberOfSelectedTimers = timersSelected.length;

    console.log(numberOfSelectedTimers);

    for (timerNumber = 0; timerNumber < numberOfSelectedTimers; timerNumber++) {

      const progress = document.querySelector('#progress-done-' + timersSelected[timerNumber]);
      const displayMinutes = document.getElementById('minutes-' + timersSelected[timerNumber]);
      const displaySeconds = document.getElementById('seconds-' + timersSelected[timerNumber]);
      const numberOfMinutes = Number(document.getElementById('minutes-' + timersSelected[timerNumber]).textContent);
      const numberOfSeconds = Number(document.getElementById('seconds-' + timersSelected[timerNumber]).textContent);
      const timer = document.querySelector('#timer-' + timersSelected[timerNumber]);
      const timerDoneText = document.querySelector('#timerDone-' + timersSelected[timerNumber]);
      let seconds = (60 * numberOfMinutes) + numberOfSeconds;
      const fullSeconds = seconds;

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


  }
  startBtn.addEventListener('click', countdown)
})