<?php
if (isset($_FILES['fichier']) && $_FILES['fichier']['error'] === UPLOAD_ERR_OK) {
    $repertoireCible = 'uploads/';
    if (!is_dir($repertoireCible)) {
        mkdir($repertoireCible, 0777, true);
    }
    $nomFichier = basename($_FILES['fichier']['name']);
    $cheminCible = $repertoireCible . $nomFichier;
    if (move_uploaded_file($_FILES['fichier']['tmp_name'], $cheminCible)) {
        echo "Fichier " . $nomFichier . " téléchargé avec succès.";
    } else {
        echo "Erreur lors du téléchargement du fichier.";
    }
} else {
    echo "Aucun fichier sélectionné ou une erreur s'est produite lors du transfert.";
}