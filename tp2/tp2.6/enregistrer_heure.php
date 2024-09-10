<?php
session_start();

$SESSION['heure_debut'] = time();

$heure_formattee = date('H:i:s');

$response = [
    "heure" => $heure_formattee,
    "chrono" => 0
];

echo json_encode($response);
