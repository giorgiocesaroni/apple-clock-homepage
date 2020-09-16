const clockFace = document.getElementById("clock-face");
const hourHand = document.getElementById("hour-hand");
const minuteHand = document.getElementById("minute-hand");
const secondHand = document.getElementById("second-hand");
const background = document.body;
const search = document.getElementById("search");
const welcome = document.getElementById("welcome");

function runClock() {
  const now = new Date();
  hourHand.style.transform = `rotate(${
    (now.getHours() % 12) * 30 + now.getMinutes() / 2
  }deg)`;
  minuteHand.style.transform = `rotate(${
    now.getMinutes() * 6 + now.getSeconds() / 10
  }deg)`;
  secondHand.style.transform = `rotate(${
    now.getSeconds() * 6 + now.getMilliseconds() / (1000 / 6)
  }deg)`;
  setTimeout(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      darkMode();
    } else {
      lightMode();
    }
    requestAnimationFrame(runClock);
  }, 1000);
}

function salute() {
  let now = new Date();
  if (now.getHours() < 12) {
    welcome.innerHTML = "Good morning.";
  } else if (now.getHours() >= 12 && now.getHours() < 18) {
    welcome.innerHTML = "Good afternoon.";
  } else {
    welcome.innerHTML = "Good evening.";
  }
  setInterval(() => {
    now = new Date();
    document.title = `${now.getHours()}:${String(now.getMinutes()).padStart(
      2,
      "0"
    )}`;
  }, 2000);
}

// REGEX for websites
let urlFormat = /(https?:\/\/)?(\w+\.)?(\w+\.\w+)/;

document.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    if (urlFormat.test(search.value)) {
      let address = urlFormat.exec(search.value)[3];
      window.open(`https://${address}`);
    } else {
      window.open(`https://duckduckgo.com/?q=${search.value}`);
    }
    search.value = "";
  }
  search.focus();
});

function darkMode() {
  clockFace.src = "./png/clock-face-dark.png";
  hourHand.src = "./png/hour-hand-dark.png";
  minuteHand.src = "./png/minute-hand-dark.png";
  secondHand.src = "./png/second-hand-dark.png";
}

function lightMode() {
  clockFace.src = "./png/clock-face.png";
  hourHand.src = "./png/hour-hand.png";
  minuteHand.src = "./png/minute-hand.png";
  secondHand.src = "./png/second-hand.png";
}

runClock();
salute();
