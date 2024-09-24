fetch("enregistrer_heure.php")
  .then((response) => {
    if (!response.ok)
      throw new Error("Erreur lors de la configuration de l'heure du serveur.");
  })
  .catch((error) => console.error("Erreur :", error));

// Fonction pour récupérer la différence de temps
function getTimeDifference() {
  fetch("calculer_temps.php")
    .then((response) => response.text())
    .then((difference) => {
      const seconds = parseInt(difference, 10);
      const minutes = Math.floor(seconds / 60);
      const remain = seconds % 60;
      document.getElementById(
        "perio"
      ).innerText = `Différence avec l'heure du serveur : ${minutes} minutes et ${remain} secondes`;
    })
    .catch((error) => console.error("Erreur :", error));
}

setInterval(getTimeDifference, 1000);
getTimeDifference();
