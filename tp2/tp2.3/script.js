let minuterie = null;
let heureDebut = null;

function start() {
  if (minuterie !== null) {
    clearInterval(minuterie);
  }
  document.getElementById("indicateur").innerHTML = "<b>M</b>";
  heureDebut = new Date();
  minuterie = setInterval(afficherTemps, 1000);
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
  const actuel = new Date();
  const ecoule = actuel - heureDebut;

  const secondes = Math.floor((ecoule / 1000) % 60);
  const minutes = Math.floor((ecoule / (1000 * 60)) % 60);
  const heures = Math.floor((ecoule / (1000 * 60 * 60)) % 24);

  const formate = `${heures.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secondes.toString().padStart(2, '0')}`;

  document.getElementById("perio").innerText = formate;
}

document.getElementById("startBtn").addEventListener("click", start);
document.getElementById("stopBtn").addEventListener("click", stop);