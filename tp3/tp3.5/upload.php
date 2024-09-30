<?php
if (!empty($_FILES['fichiers']['name'][0])) {
    $repertoireCible = 'uploads/';

    if (!is_dir($repertoireCible)) {
        mkdir($repertoireCible, 0777, true);
    }
    $reponses = [];
    foreach ($_FILES['fichiers']['name'] as $index => $nomFichier) {
        $cheminTemporaire = $_FILES['fichiers']['tmp_name'][$index];
        $cheminCible = $repertoireCible . basename($nomFichier);
        if (move_uploaded_file($cheminTemporaire, $cheminCible)) {
            $reponses[] = "Fichier " . $nomFichier . " téléchargé avec succès.";
        } else {
            $reponses[] = "Erreur lors du téléchargement du fichier " . $nomFichier . ".";
        }
    }
    echo implode("<br>", $reponses);
} else {
    echo "Aucun fichier sélectionné.";
}