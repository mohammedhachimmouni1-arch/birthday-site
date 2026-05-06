let current = 1;

function nextScreen() {
  document.getElementById("screen" + current).classList.add("hidden");
  current++;
  document.getElementById("screen" + current).classList.remove("hidden");
}

function showFinal() {
  document.getElementById("screen" + current).classList.add("hidden");
  document.getElementById("final").classList.remove("hidden");
  startHearts();
}

/* Lights */
function toggleLights() {
  document.querySelectorAll(".lights span").forEach((light, i) => {
    setTimeout(() => {
      light.classList.add("active-light");
    }, i * 150);
  });
}

/* Balloons */
function flyBalloons() {
  const container = document.getElementById("balloons");

  for (let i = 0; i < 15; i++) {
    let b = document.createElement("div");
    b.className = "balloon";
    b.style.left = Math.random() * 100 + "vw";
    b.style.background = `hsl(${Math.random()*360},70%,60%)`;
    b.style.animationDuration = (5 + Math.random()*3) + "s";

    container.appendChild(b);
    setTimeout(() => b.remove(), 8000);
  }
}

/* Hearts */
function startHearts() {
  const container = document.getElementById("hearts");

  setInterval(() => {
    let h = document.createElement("div");
    h.className = "heart";
    h.innerHTML = "❤";
    h.style.left = Math.random() * 100 + "vw";

    container.appendChild(h);
    setTimeout(() => h.remove(), 5000);
  }, 300);
}

/* Cake */
function showCake() {
  document.getElementById("final").classList.add("hidden");
  document.getElementById("cake-screen").classList.remove("hidden");
}

/* Candle */
function blowCandle() {
  document.getElementById("flame").style.display = "none";
  document.getElementById("smoke").classList.add("active");

  setTimeout(() => {
    const black = document.getElementById("final-black");
    black.classList.remove("hidden");
    black.classList.add("show");
  }, 2000);
}
