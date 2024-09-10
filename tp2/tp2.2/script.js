let minuterie;
let heureDebut;

function start() {
  document.getElementById("indicateur").innerHTML = "<b>M</b>";
  heureDebut = new Date();
  minuterie = setInterval(tempsEcoule, 1000);
}

function stop() {
  document.getElementById("indicateur").innerHTML = "<b>A</b>";
  clearInterval(minuterie);
}

function tempsEcoule() {
  const actuel = new Date();
  const ecoule = actuel - heureDebut;

  const secondes = Math.floor((ecoule / 1000) % 60);
  const minutes = Math.floor((ecoule / (1000 * 60)) % 60);
  const heures = Math.floor((ecoule / (1000 * 60 * 60)) % 24);

  const formate = `${heures.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secondes.toString().padStart(2, '0')}`;

  document.getElementById("perio").innerText = formate;
}
