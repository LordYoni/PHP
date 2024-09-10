let minuterie = null;
let heureServeurDebut = null;

function start() {
  if (minuterie !== null) {
    clearInterval(minuterie);
  }
  document.getElementById("indicateur").innerHTML = "<b>M</b>";

  fetch("enregistrer_heure.php")
    .then((response) => response.json())
    .then((data) => {
      heureServeurDebut = Math.floor(Date.now() / 1000);
      document.getElementById(
        "perio"
      ).innerText = `Heure de début : ${data.heure}, Chrono : ${data.chrono} sec`;
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
    .then((response) => response.json())
    .then((data) => {
      document.getElementById(
        "perio"
      ).innerText = `Heure actuelle : ${data.heure}, Chrono : ${data.chrono} sec`;
    });
}

document.getElementById("startBtn").addEventListener("click", start);
document.getElementById("stopBtn").addEventListener("click", stop);
