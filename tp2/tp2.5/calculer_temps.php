<?php
session_start();

if (isset($_SESSION['heure_debut'])) {
    $heure_debut = $_SESSION['heure_debut'];
    $heure_actuelle = time();
    $temps_ecoule = $heure_actuelle - $heure_debut;

    $secondes = $temps_ecoule % 60;
    $minutes = ($temps_ecoule / 60) % 60;
    $heures = $temps_ecoule / 3600;

    $formate = sprintf("%02d:%02d:%02d", $heures, $minutes, $secondes);

    echo $formate;
} else {
    echo 'Aucune heure enregistrée.';
}
