function ZufallsZahlGenerieren() {
  const min = 1;
  const max = 49;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const pickBtn = document.querySelector(".pick-btn");
const mainEl = document.querySelector("main");
const resetBtn = document.querySelector(".reset-btn");
let anzahlErstellterQuadrate = 0;

function quadratErstellen() {
  if (anzahlErstellterQuadrate < 6) {
    const zufallsZahl = ZufallsZahlGenerieren();

    const div = document.createElement("div");
    div.className = "quadrat";
    div.textContent = zufallsZahl;

    mainEl.appendChild(div);
    anzahlErstellterQuadrate++;
  }
}

pickBtn.addEventListener("click", () => {
  quadratErstellen();
});

resetBtn.addEventListener("click", () => {
  mainEl.innerHTML = ""; // leeren des Main-Elements
  anzahlErstellterQuadrate = 0; // zurücksetzen der Anzahl erstellter Quadrate
  pickBtn.disabled = false;
});
