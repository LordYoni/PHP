let minuterie = null;
let heureDebut = null;
let heureServeurDebut = null;

function start() {
  if (minuterie !== null) {
    clearInterval(minuterie);
  }
  document.getElementById("indicateur").innerHTML = "<b>M</b>";
  
  fetch('heure.php')
    .then(response => response.text())
    .then(timestamp => {
      heureServeurDebut = parseInt(timestamp, 10);
      heureDebut = Math.floor(Date.now() / 1000); 
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
  fetch('heure.php')
    .then(response => response.text())
    .then(timestamp => {
      const heureServeurActuelle = parseInt(timestamp, 10);
      const tempsEcouleEnSecondes = heureServeurActuelle - heureServeurDebut;

      const secondes = Math.floor(tempsEcouleEnSecondes % 60);
      const minutes = Math.floor((tempsEcouleEnSecondes / 60) % 60);
      const heures = Math.floor(tempsEcouleEnSecondes / 3600);

      const formate = `${heures.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secondes.toString().padStart(2, '0')}`;

      document.getElementById("perio").innerText = formate;
    });
}

document.getElementById("startBtn").addEventListener("click", start);
document.getElementById("stopBtn").addEventListener("click", stop);
