<?php
session_start();

if (isset($_SESSION['heure_debut'])) {
    $heure_debut = $_SESSION['heure_debut'];
    $heure_actuelle = time();
    $temps_ecoule = $heure_actuelle - $heure_debut;

    $heure_formattee = date('h:i:s A');

    $response = [
        "heure" => $heure_formattee,
        "chrono" => $temps_ecoule
    ];

    echo json_encode($response);
} else {
    $response = [
        "heure" => "N/A",
        "chrono" => 0
    ];

    echo json_encode($response);
}