let minuterie = null;
let heureServeurDebut = null;

function start() {
  if (minuterie !== null) {
    clearInterval(minuterie);
  }
  document.getElementById("indicateur").innerHTML = "<b>M</b>";

  fetch("enregistrer_heure.php")
    .then((response) => response.text())
    .then(() => {
      heureServeurDebut = Math.floor(Date.now() / 1000);
      minuterie = setInterval(afficherTemps, 1000);
    });
}

function stop() {
  if (minuterie !== null) {
    document.getElementById("indicateur").innerHTML = "<b>A</b>";
    clearInterval(minuterie);
    minuterie = null;
    document.getElementById("perio").innerText = "";
  }
}

function afficherTemps() {
  fetch("calculer_temps.php")
    .then((response) => response.text())
    .then((temps) => {
      document.getElementById("perio").innerText = temps;
    });
}

document.getElementById("startBtn").addEventListener("click", start);
document.getElementById("stopBtn").addEventListener("click", stop);
