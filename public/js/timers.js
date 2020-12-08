const timers = [
  { //timer 0
    name: 'Save eyes',
    minutes: 1,
    seconds: 11
  },
  { //timer 1
    name: 'Backbone care',
    minutes: 2,
    seconds: 2
  },
  { //timer 2
    name: 'Wrist-reminder',
    minutes: 33,
    seconds: 3
  },
  { //timer 3
    name: 'Glass of water',
    minutes: 44,
    seconds: 4
  },
  { //timer 4
    name: '',
    minutes: 55,
    seconds: 5
  },
  { //timer 5
    name: '',
    minutes: 66,
    seconds: 6
  },
];

const startBtn = document.querySelector('#turnOnTimers');
const numberOfTimers = document.querySelectorAll('.col').length;

document.addEventListener('DOMContentLoaded', () => {
  setAllTimers();
})

function setAllTimers() {
  for (let i = 0; i < numberOfTimers; i++) {
    const namePosition = document.querySelector('#timerName-' + i);
    const minutesPosition = document.querySelector('#minutes-' + i);
    const secondsPosition = document.querySelector('#seconds-' + i);

    namePosition.innerHTML = timers[i].name;
    minutesPosition.innerHTML = timers[i].minutes;
    secondsPosition.innerHTML = timers[i].seconds;
  }
}

  // var interval;
  // var minutes = 5;
  // var seconds = 10;


  // function countdown(element) {
  //   interval = setInterval(function () {
  //     var el = document.getElementById(element);
  //     if (seconds == 0) {
  //       if (minutes == 0) {
  //         alert(el.innerHTML = "countdown's over!");
  //         clearInterval(interval);
  //         return;
  //       } else {
  //         minutes--;
  //         seconds = 60;
  //       }
  //     }
  //     if (minutes > 0) {
  //       var minute_text = minutes + (minutes > 1 ? ' minutes' : ' minute');
  //     } else {
  //       var minute_text = '';
  //     }
  //     var second_text = seconds > 1 ? 'seconds' : 'second';
  //     el.innerHTML = minute_text + ' ' + seconds + ' ' + second_text + ' remaining';
  //     seconds--;
  //   }, 1000);
  // }