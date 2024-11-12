<?php
$databaseFile = 'database.sqlite';

try {
    $refDB = new PDO("sqlite:$databaseFile");
    $refDB->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $sql = "DROP TABLE IF EXISTS clients";

    if ($refDB->exec($sql) === false) {
        die(print_r($refDB->errorInfo(), true));
    }

    echo "Table clients supprimée avec succès.";
} catch (PDOException $e) {
    echo "Erreur lors de la suppression de la table : " . $e->getMessage();
}

$refDB = null;
