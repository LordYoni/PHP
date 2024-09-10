<?php
session_start();
$_SESSION['heure_debut'] = time();
echo 'Heure enregistrée.';
