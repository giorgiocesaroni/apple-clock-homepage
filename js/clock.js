const hourHand = document.getElementById('hour-hand');
const minuteHand = document.getElementById('minute-hand');
const secondHand = document.getElementById('second-hand');
const background = document.body;
const search = document.getElementById("search");
const welcome = document.getElementById("welcome");

function runClock() {
  const now = new Date();
  hourHand.style.transform = `rotate(${(now.getHours() % 12) * 30 + (now.getMinutes() / 2)}deg)`;
  minuteHand.style.transform = `rotate(${now.getMinutes() * 6 + (now.getSeconds() / 10)}deg)`;
  secondHand.style.transform = `rotate(${now.getSeconds() * 6 + (now.getMilliseconds() / (1000 / 6))}deg)`;
  setTimeout(() => {
    salute();
    requestAnimationFrame(runClock);
  }, 1000);
}

function salute() {
  const now = new Date();
  if (now.getHours() < 12) {
    welcome.innerHTML = 'Good morning.';
  } else if (now.getHours() >= 12 && now.getHours() < 18) {
    welcome.innerHTML = 'Good afternoon.';
  } else {
    welcome.innerHTML = 'Good night.';
  }
}

document.addEventListener('keydown', e => {
  if (e.key == "Enter") {
    window.open(`http://www.google.com/search?q=${search.value}`);
    search.value = '';
  }
  search.focus();
})

runClock();
salute();

