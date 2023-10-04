const maxQuadrate = 6;
let aktuelleAnzahlQuadrate = 1;
const gezogeneZahlen = [];

const pickBtn = document.querySelector(".pick-btn");
const mainEl = document.querySelector("main");
const resetBtn = document.querySelector(".reset-btn");

function quadratErstellen() {
  if (aktuelleAnzahlQuadrate <= maxQuadrate) {
    let zufallsZahl;
    do {
      zufallsZahl = Math.floor(Math.random() * 49) + 1; // zufällige Zahl zwischen 1 und 49
    } while (gezogeneZahlen.includes(zufallsZahl));
    // die Schleife wird so lange wiederholt, bis eine Zufallszahl generiert wird, die nicht bereits in "gezogeneZahlen" enthalten ist.
    gezogeneZahlen.push(zufallsZahl); // die Zufallszahlen dem Array hinzufügen
    gezogeneZahlen.sort((a, b) => a - b); // die generierten Zahlen für das Array aufsteigend sortieren

    renderGezogeneZahlen();

    aktuelleAnzahlQuadrate++;
  } else {
    pickBtn.disabled = true;
  }
}

function renderGezogeneZahlen() {
  mainEl.innerHTML = ""; // löscht alle evtl vorhandene Quadrate
  for (let zahl of gezogeneZahlen) {
    //die for-Schleife iteriert durch jedes Element in "gezogeneZahlen".
    // Die Variable "zahl" wird bei jedem Durchlauf der Schleife auf das nächst Element im Array gesetzt.
    const div = document.createElement("div");
    div.className = "quadrat";
    div.textContent = zahl;
    mainEl.appendChild(div);
  }
}

pickBtn.addEventListener("click", () => {
  quadratErstellen();
});

resetBtn.addEventListener("click", () => {
  mainEl.innerHTML = "";
  aktuelleAnzahlQuadrate = 1; // zurücksetzen der Anzahl erstellter Quadrate
  gezogeneZahlen.length = 0; // Array zurücksetzen
  pickBtn.disabled = false;
});
