function GetServerTime() {
  fetch("heure.php")
    .then((response) => response.text())
    .then((timestamp) => {
      const serverTime = new Date(parseInt(timestamp, 10) * 1000);
      const serverTimeString = serverTime.toLocaleTimeString();
      const pcTime = new Date();
      const pcTimeString = pcTime.toLocaleTimeString();

      document.getElementById("server-time").innerText =
        "Heure du serveur : " + serverTimeString;
      document.getElementById("server-time2").innerText =
        "Heure de l'ordi : " + pcTimeString;
    })
    .catch((error) => console.error("Erreur :", error));
}

setInterval(GetServerTime, 1000);
GetServerTime();
