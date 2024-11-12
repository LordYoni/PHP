<?php
$databaseFile = 'database.sqlite';

try {
    $refDB = new PDO("sqlite:$databaseFile");
    $refDB->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $sql = <<<SQL
    CREATE TABLE clients (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nom TEXT NOT NULL,
        id_commune INTEGER DEFAULT NULL
    );
    SQL;

    if ($refDB->exec($sql) === false) {
        die(print_r($refDB->errorInfo(), true));
    }

    echo "Table clients créée avec succès.";
} catch (PDOException $e) {
    echo "Erreur lors de la création de la table : " . $e->getMessage();
}

$refDB = null;
