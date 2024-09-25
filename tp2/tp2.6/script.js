fetch("enregistrer_heure.php")
  .then((response) => {
    if (!response.ok)
      throw new Error("Erreur lors de la configuration de l'heure du serveur.");
  })
  .catch((error) => console.error("Erreur :", error));

function getTimeDifference() {
  fetch("calculer_temps.php")
    .then((response) => response.json())
    .then((data) => {
      const hours = data.heure;
      const chrono = data.chrono;

      document.getElementById(
        "time-difference"
      ).innerText = `Heure de départ : ${hours}\nChrono : ${chrono} secondes`;
    })
    .catch((error) => console.error("Erreur :", error));
}

setInterval(getTimeDifference, 1000);
getTimeDifference();
